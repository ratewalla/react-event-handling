import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState();
  const [mouseStatus, setMouseStatus] = useState(false);

  function updateHeading(event){
    setHeadingText(event.target.value)
  }

  function onMouseOver(){
    setMouseStatus(true);
  }

  function onMouseOut(){
    setMouseStatus(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}!</h1>
      <input onChange={updateHeading} type="text" placeholder="What's your name?" />
      <button onMouseOver={onMouseOver} 
      onMouseOut={onMouseOut}
      style={{backgroundColor: mouseStatus ? "black":"white"}}
      >
      Submit</button>
    </div>
  );
}

export default App;
