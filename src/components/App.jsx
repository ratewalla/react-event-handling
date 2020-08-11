import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("");
  const [name, setName] = useState("");
  const [mouseStatus, setMouseStatus] = useState(false);

  function updateHeading(event){
    setName(event.target.value)
  }

  function updateName(event){
    setHeadingText(name);

    //prevents default form submission
    event.preventDefault();
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
      <form onSubmit={updateName}>
        <input 
        onChange={updateHeading}
        type="text" placeholder="What's your name?" />

        <button
        onClick={updateName} 
        onMouseOver={onMouseOver} 
        onMouseOut={onMouseOut}
        style={{backgroundColor: mouseStatus ? "black":"white"}}
        >
        Submit</button>
      </form>
    </div>
  );
}

export default App;
