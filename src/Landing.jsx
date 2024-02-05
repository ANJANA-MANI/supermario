import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use the navigate function to navigate to the '/Home' route
    navigate('/Home');
  };

  return (
    <><div className="div">

<button
        className=""
        onClick={handleButtonClick}
        style={{
         
          border: 'none',
          width: '150px',
          height: '150px',
          borderRadius: '20px',
          backgroundImage: `url(logo.png)`,
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          display: 'block',
          position:'absolute',
          backgroundColor:"#F7DC6F",
          marginTop:"150px"
         
         
       
        }}
      ></button>
    </div>
     
    </>
  );
}

export default Landing;
