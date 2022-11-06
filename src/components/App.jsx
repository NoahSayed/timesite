import React, { useState } from "react";

function App() {
   const [count ,  setcount] = useState({time});
   function increase(){
     setcount ({time})
  }
  function timerefresh(){
increase()
  }
  setInterval(timerefresh , 1000);
  // function increase(){
  //    setcount (count+1)
let time = new Date().getHours()-12
let minute = new Date().getMinutes()
let seconds = new Date().getSeconds()


  return (<div className="container">
  <h1>{time}:{minute}:{seconds}</h1>


</div>
)};

export default App;
{/* <h1>{count}</h1>
<button onClick={increase}>+</button>
<button onClick={decrease}>-</button> */}