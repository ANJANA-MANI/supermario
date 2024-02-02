import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Mushroom2({mPosition,Mbottom,bg}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use the navigate function to navigate to the '/Home' route
    navigate('/');
  };
 const[mushroomRight,setmushroomRight]=useState(0)
 const[maxRight,setmaxRight]=useState(1250)
 const[mushroomBottom,setmushroomBottom]=useState(60)
 const[collision,setCollision]=useState(false)
console.log('mario postion',mPosition);

console.log('mushroom2 postion',mushroomRight);

 const[limitLeft,setlimitLeft]=useState(2)
  const[limitRight,setlimitRight]=useState(1100)
  const[gameover,setGameover]=useState('none');
  const [overaudio, setoverAudio] = useState(new Audio('over.mp3'));
  const[obstacles,setObstacles]=useState({})
  useEffect(() => {

    const intervalId = setInterval(() => {
    collision();
      if(mushroomRight<maxRight) {
       moveMushroom();

      }
      else if(mushroomRight==maxRight)
      {
        //fall();
        setmushroomRight(0);
      }
    },250);

     const collision=() => {
    
      if(((mushroomRight==limitRight-mPosition+2)||(mushroomRight==limitRight-mPosition))&&(Mbottom<70)) {
       bg.pause(); 

       setGameover('block');
       fall();
       overaudio.play();
      }
     
    }
    ////
///

    const moveMushroom = () => {
      setmushroomRight((prevPosition) => {
        const step = 10;
        const proposedPosition = prevPosition + step;
        return proposedPosition;
      });
    }


    return () => clearInterval(intervalId);
  }, [mushroomRight],[mushroomBottom]);

  const fall=()=>
  { 
   console.log("falll");
   let startPos =40;
   const speed = 8;
  setInterval(() => {
     startPos -= speed;
     setmushroomBottom(startPos);
   },20);


  }

  return (
    <>
    <div>
    
    <img className="mushroom2" src="mushroom.png" alt="" style={{right:`${mushroomRight}px`,bottom:`${mushroomBottom}px`}} />
     <button onClick={handleButtonClick} className='status' style={{display:`${gameover}`}}>GAME OVER</button>
    </div>
    
    </>
   
  
    )
}

export default Mushroom2