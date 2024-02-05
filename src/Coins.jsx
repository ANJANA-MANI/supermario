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
    const[c11position,setc11Position]=useState(600)

    const[c21,setc21]=useState('block')
    const[c21position,setc21Position]=useState(680)

    const[c31,setc31]=useState('block')
    const[c31position,setc31Position]=useState(760)

    const[c41,setc41]=useState('block')
    const[c41position,setc41Position]=useState(840)

    const[c51,setc51]=useState('block')
    const[c51position,setc51Position]=useState(900)
    
    const updatescore = () => {
      try {
        if ((Mpos === c1position - 20) && (c1 === 'block')) {
          console.log('collect coin');
          setScore(prevScore => prevScore + 10);
          coinaudio.play().catch(error => console.error('Error playing audio:', error));
          setc1('none');
        } else if ((Mpos === c2position - 20) && (c2 === 'block')) {
          console.log('collect coin');
          coinaudio.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio2.play().catch(error => console.error('Error playing audio:', error));
          setc2('none');
        } else if ((Mpos === c3position - 20) && (c3 === 'block')) {
          console.log('collect coin');
          coinaudio2.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio.play().catch(error => console.error('Error playing audio:', error));
          setc3('none');
        } else if ((Mpos === c4position - 20) && (c4 === 'block')) {
          console.log('collect coin');
          coinaudio.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio2.play().catch(error => console.error('Error playing audio:', error));
          setc4('none');
        } else if ((Mpos === c5position - 20) && (c5 === 'block')) {
          console.log('collect coin');
          coinaudio2.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio.play().catch(error => console.error('Error playing audio:', error));
          setc5('none');
        } else if ((Mpos === c51position - 20) && (c51 === 'block')) {
          console.log('collect coin');
          coinaudio.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio2.play().catch(error => console.error('Error playing audio:', error));
          setc51('none');
        } else if ((Mpos === c11position - 20) && (c11 === 'block')) {
          console.log('collect coin');
          coinaudio2.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio.play().catch(error => console.error('Error playing audio:', error));
          setc11('none');
        } else if ((Mpos === c21position - 20) && (c21 === 'block')) {
          console.log('collect coin');
          coinaudio.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio2.play().catch(error => console.error('Error playing audio:', error));
          setc21('none');
        } else if ((Mpos === c31position - 20) && (c31 === 'block')) {
          console.log('collect coin');
          coinaudio.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio2.play().catch(error => console.error('Error playing audio:', error));
          setc31('none');
        } else if ((Mpos === c41position - 20) && (c41 === 'block')) {
          console.log('collect coin');
          coinaudio2.pause();
          setScore(prevScore => prevScore + 10);
          coinaudio.play().catch(error => console.error('Error playing audio:', error));
          setc41('none');
        }
      } catch (error) {
        console.error('Error in updatescore:', error);
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
   
   

    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c11}`,left:`${c11position}px`,bottom:'80px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c21}`,left:`${c21position}px`,bottom:'80px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c31}`,left:`${c31position}px`,bottom:'80px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c41}`,left:`${c41position}px`,bottom:'80px',position:"absolute"}} />
    <img src="C1.png" alt="hh" style={{width:"50px",height:"50px",display:`${c51}`,left:`${c51position}px`,bottom:'80px',position:"absolute"}} />
   

   
    </>

  )
}

export default Coins