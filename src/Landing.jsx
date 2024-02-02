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
          margin: 'auto',
          border: 'none',
          width: '155px',
          height: '160px',
          borderRadius: '20px',
          backgroundImage: `url(logo.png)`,
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          display: 'block',
          backgroundColor: 'white',
          marginTop: '150px'
        }}
      ></button>
    </div>
     
    </>
  );
}

export default Landing;
