import React, { useEffect, useState } from 'react'

function Coins({Mpos,Mbottom}) 
{
  
  const [coinaudio, setcoinAudio] = useState(new Audio('soundcoin.mp3'))
  const [coinaudio2, setcoinAudio2] = useState(new Audio('soundcoin.mp3'))
    const[score,setScore]=useState(0)
    const[c1,setc1]=useState('block')
    const[c1position,setc1Position]=useState(80)

    const[c2,setc2]=useState('block')
    const[c2position,setc2Position]=useState(160)

    const[c3,setc3]=useState('block')
    const[c3position,setc3Position]=useState(240)

    const[c4,setc4]=useState('block')
    const[c4position,setc4Position]=useState(320)
    const[c5,setc5]=useState('block')
    const[c5position,setc5Position]=useState(400)
    ////set 2
    const[c11,setc11]=useState('block')
    const[c11position,setc11Position]=useState(800)

    const[c21,setc21]=useState('block')
    const[c21position,setc21Position]=useState(880)

    const[c31,setc31]=useState('block')
    const[c31position,setc31Position]=useState(960)

    const[c41,setc41]=useState('block')
    const[c41position,setc41Position]=useState(1040)

    const[c51,setc51]=useState('block')
    const[c51position,setc51Position]=useState(1120)
    

    console.log('Marioo',Mpos);
    console.log('Marioo bottom',Mbottom);
    //console.log('COINNN',c1position);
    console.log('COINNN',c51position);
   
    //console.log('COINNN',c3position);
    //console.log('COINNN',c4position);
    //console.log('COINNN',c5position);
    console.log('Score',score);
    const updatescore = () => {
     
      if((Mpos==c1position/2)&&(c1=='block'))
      {
      console.log('collect coin');
      setScore(prevScore => prevScore + 10);
      coinaudio.play();
      setc1('none');
      
      }
      else if((Mpos==c2position/2-20)&&(c2=='block'))
      {
        console.log('collect coin');
        coinaudio.pause();
        setScore(prevScore => prevScore + 10);
        coinaudio2.play();
        setc2('none');
        
      }
      else if((Mpos==c3position/2-20)&&(c3=='block'))
      {
        console.log('collect coin');
        coinaudio2.pause();
       setScore(prevScore => prevScore + 10);
        coinaudio.play();
        setc3('none');
        
      }
      else if((Mpos==c4position/2-20)&&(c4=='block'))
      {
        console.log('collect coin');
        coinaudio.pause()
        setScore(prevScore => prevScore + 10);
coinaudio2.play();
        setc4('none');
  ;
      }
      else if((Mpos==c5position/2-20)&&(c5=='block'))
      {
        console.log('collect coin');
        coinaudio2.pause();
        setScore(prevScore => prevScore + 10);
        coinaudio.play();
        setc5('none');
       

      }

      else if((Mpos+100==c51position)&&(c51=='block'))
      {
        
        console.log('collect coin');
        coinaudio.pause();
        setScore(prevScore => prevScore + 10);
        coinaudio2.play();
        setc51('none');
       
      }
      else if((Mpos+100==c11position)&&(c11=='block'))
      {
        
        console.log('collect coin');
        coinaudio2.pause();
        setScore(prevScore => prevScore + 10);
        coinaudio.play();
        setc11('none');
       
      }
      else if((Mpos+100==c21position)&&(c21=='block'))
      {
        
        console.log('collect coin');
        coinaudio.pause();
        setScore(prevScore => prevScore + 10);
        coinaudio2.play();
        setc21('none');
       
      }
      else if((Mpos+100==c31position)&&(c31=='block'))
      {
        
        console.log('collect coin');
        coinaudio.pause();
        setScore(prevScore => prevScore + 10);
        coinaudio2.play();
        setc31('none');
       
      }
      else if((Mpos+100==c41position)&&(c41=='block'))
      {
        
        console.log('collect coin');
        coinaudio2.pause();
        setScore(prevScore => prevScore + 10);
        coinaudio.play();
        setc41('none');
       
      }
      
    };
  
    // useEffect hook to run the function when the component mounts
    useEffect(() => {
      updatescore(); // Call your custom function when the component mounts
      // You can add dependencies to the array below if needed
    }, [Mpos]);









  return (
    <>
    <p className="score">SCORE : {score}</p>
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c1}`,left:`${c1position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c2}`,left:`${c2position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c3}`,left:`${c3position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c4}`,left:`${c4position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c5}`,left:`${c5position}px`,bottom:'60px',position:"absolute"}} />
   
   

    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c11}`,left:`${c11position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c21}`,left:`${c21position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c31}`,left:`${c31position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c41}`,left:`${c41position}px`,bottom:'60px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c51}`,left:`${c51position}px`,bottom:'60px',position:"absolute"}} />
   

   
    </>

  )
}

export default Coins