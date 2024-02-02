useEffect(() => {
  // Event listeners for keydown and keyup
  const handleKeyDown = (event) => {
   
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case " ":
          jump();
          break;
        case "ArrowRight":
        case "d":
          setMovingright(true);
          setflip(false)
          break;
        case "ArrowLeft":
        case "a":
          setMovingleft(true);
          setflip(true)
          break;
      }
    });


  };

  const handleKeyUp = (event) => {
    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowRight":
        case "d":
          setMovingright(false);
          break;
        case "ArrowLeft":
        case "a":
          setMovingleft(false);
          console.log('ArrowLeft key released - value of movingleft:', movingleft);
          break;
      }
    });
    
  };

  // Add event listeners
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  // Cleanup event listeners when the component is unmounted
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };
}, []); 