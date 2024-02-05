import React, { useEffect, useState } from 'react';
import Mushroom from './Mushroom';
import Coins from './Coins';
import Mushroom2 from './Mushroom2';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [dead, setDead] = useState(false);

  const handleDead = (newState) => {
    setDead(newState);
  };
  const [levelcomplete, setlevelcomplete] = useState(false);
  const [mariodisplay, setMariodisplay] = useState('block');
  const [gameover, setGameover] = useState('none');

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
  const [winaudio, setwinAudio] = useState(new Audio('win.mp3'));
  const [deathaudio, setdaethAudio] = useState(new Audio('death.mp3'));

  const [mariojumping, setMariojumping] = useState(false);
  const [movingright, setMovingright] = useState(false);
  const [movingleft, setMovingleft] = useState(false);
  const [flip, setflip] = useState(false);

  const [mariobottom, setMariobottom] = useState('60');
  const [marioposition, setMarioposition] = useState(0);

  const [limitLeft, setlimitLeft] = useState(2);
  const [limitRight, setlimitRight] = useState(1100);

  const [treasure1, setTreasure1] = useState(470);
  const [treasure1display, setTreasure1display] = useState('block');

  const [treasure2, setTreasure2] = useState(530);
  const [treasure2display, setTreasure2display] = useState('block');

  const [treasure3, setTreasure3] = useState(590);
  const [treasure3display, setTreasure3display] = useState('block');

  const [treasure4, setTreasure4] = useState(650);
  const [treasure4display, setTreasure4display] = useState('block');

  const [treasure5, setTreasure5] = useState(710);
  const [treasure5display, setTreasure5display] = useState('block');

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
      if (marioposition > 1100) {
        setMariodisplay('none');
        audio.pause();
        setGameover('block');
        winaudio.play();
      }

      if (movingright) {
        if (marioposition < limitRight) {
          moveMario('right');
        }
      } else if (movingleft) {
        if (marioposition > 0) {
          moveMario('left');
        }
        if (marioposition < 0) {
          setMarioposition(0);
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
          if (
            marioposition === treasure1 + 10 ||
            marioposition === treasure1 - 10 ||
            marioposition === treasure1 - 30
          ) {
            setTreasure1display('none');
          } else if (
            marioposition === treasure3 + 10 ||
            marioposition === treasure3 - 10 ||
            marioposition === treasure3 - 30
          ) {
            setTreasure3display('none');
          } else if (
            marioposition === treasure5 + 10 ||
            marioposition === treasure5 - 10 ||
            marioposition === treasure5 - 30
          ) {
            setTreasure5display('none');
          }
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

  const falldown = () => {
    let startPos = 30;
    const endPos = 0;
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

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="game-container" style={{ display: 'block' }}>
        <Coins Mpos={marioposition} Mbottom={mariobottom} />
        
        <Mushroom mPosition={marioposition} Mbottom={mariobottom} bg={audio} onStateChange={handleDead} />
        <Mushroom2 mPosition={marioposition} Mbottom={mariobottom} bg={audio} onStateChange={handleDead} />
        <div className="game-area">
          <p className="level">LEVEL:{level}</p>
          <img
            className={`${flip && 'marioflip'} ${dead ? 'dead-class' : ''} mario`}
            src="mario.gif"
            alt=""
            style={{ bottom: `${mariobottom}px`, left: `${marioposition}px`, display: `${mariodisplay}` }}
          />

          <div className="treasure1" style={{ left: `${treasure1}px`, display: `${treasure1display}` }}>
            <img src="/tbrick.jpg" width="60px" />
          </div>

          <div className="treasure2" style={{ left: `${treasure2}px`, display: `${treasure2display}` }}>
            <img src="/qmark.jpg" width="60px" />
          </div>

          <div className="treasure3" style={{ left: `${treasure3}px`, display: `${treasure3display}` }}>
            <img src="/tbrick.jpg" width="60px" />
          </div>
          <div className="treasure4" style={{ left: `${treasure4}px`, display: `${treasure4display}` }}>
            <img src="/qmark.jpg" width="60px" />
          </div>
          <div className="treasure5" style={{ left: `${treasure5}px`, display: `${treasure5display}` }}>
            <img src="/tbrick.jpg" width="60px" />
          </div>

          <div className="castle">
            <img src="/castle.png" width="220px" height="250px" alt="" />
          </div>
          <div className="flag">
            <img src="/flag.png" width="100px" height="450px" alt="" />
          </div>

          <button onClick={handleButtonClick} className="status2" style={{ display: `${gameover}` }}>
            COMPLETED
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
