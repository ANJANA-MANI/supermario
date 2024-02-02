
import React, { useEffect, useState } from 'react';
import Mushroom from './Mushroom';
import Coins from './Coins';
import Mushroom2 from './Mushroom2';

function Home() {
   
  const [mario, setmMario] = useState();
  const [mushroom, setMushroom] = useState();
  const [startBtn, setstartBtn] = useState('block');
  const [score, setscore] = useState(0);
  const [level, setLevel] = useState(1);
  const [counter, setCounter] = useState(0);

  const [mushroomdisplay, setmushroomDisplay] = useState('none');
  const [gamedisplay, setgameDisplay] = useState('none');

  const [audio, setAudio] = useState(new Audio('background.mp3'));
  const [jumpaudio, setjumpAudio] = useState(new Audio('jump.mp3'));

  const [mariojumping, setMariojumping] = useState(false);
  const [movingright, setMovingright] = useState(false);
  const [movingleft, setMovingleft] = useState(false);
  const [flip, setflip] = useState(false);

  const [mariobottom, setMariobottom] = useState('60');
  const [marioposition, setMarioposition] = useState(0);
  const[limitLeft,setlimitLeft]=useState(2)
  const[limitRight,setlimitRight]=useState(1100)


  useEffect(() => {
    startGame();
    return () => {
      audio.loop = true;
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (movingright) {
       
       if(marioposition<limitRight)
          {moveMario('right');}
          if(marioposition>1200)
          {
            setMarioposition(1200)
          }
        
      } else if (movingleft) {
        console.log(marioposition);
        if(marioposition>0) 
        {
        moveMario('left');
        }
        if(marioposition<0)
        {
          setMarioposition(10)
        }
        
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [movingright, movingleft]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case ' ':
          jump();
          break;
        case 'ArrowRight':
        case 'd':
          setMovingright(true);
          setflip(false);
          break;
        case 'ArrowLeft':
        case 'a':
          setMovingleft(true);
          setflip(true);
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case 'ArrowRight':
        case 'd':
          setMovingright(false);
          break;
        case 'ArrowLeft':
        case 'a':
          setMovingleft(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setMovingright, setMovingleft, setflip]);

  const startGame = () => {
    setgameDisplay('block');
    setstartBtn('none');
    audio.play().catch((error) => {
      console.error('Autoplay blocked:', error);
    });
  };

  const moveMario = (direction) => {
    setMarioposition((prevPosition) => {
      const step = direction === 'right' ? 20 : -20;
      const proposedPosition = prevPosition + step;
      return proposedPosition;
    });
  };

  const jump = () => {
    if (!mariojumping) {
      setMariojumping(true);
      jumpaudio.play();
      let startPos = 60;
      const endPos = 150;
      const speed = 10;

      const jumpInterval = setInterval(() => {
        if (startPos < endPos) {
          startPos += speed;
          setMariobottom(startPos);
        } else {
          clearInterval(jumpInterval);
          fall();
        
        }
      }, 20);
    }
  };

  const fall = () => {
    let startPos = 150;
    const endPos = 60;
    const speed = 8;

    const fallInterval = setInterval(() => {
      if (startPos > endPos) {
        startPos -= speed;
        setMariobottom(startPos);
      } else {
        clearInterval(fallInterval);
        setMariojumping(false);
      }
    }, 20);
  };

  return (
    <>
   
      <div className="game-container" style={{ display: `block` }}>
      <Coins Mpos={marioposition} />
        <div className="game-area">
       
        <p className="level">LEVEL:{level}</p>
        <img
          className={`${flip && 'marioflip'} mario`}
          src="mario.gif"
          alt=""
          style={{ bottom: `${mariobottom}px`, left: `${marioposition}px` }}
        />
       <Mushroom  mPosition={marioposition} Mbottom={mariobottom} bg={audio} />
      
       <Mushroom2  mPosition={marioposition} Mbottom={mariobottom} bg={audio} />
     
      </div>
      </div>
      
    </>
  );
}

export default Home;

