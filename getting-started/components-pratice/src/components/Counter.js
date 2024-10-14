import React,{useState} from 'react';

const Counter = () => {
    //Initialize the counter with default valuse of 0
const [counter, setCounter] = useState(0);
//increment the counter
const increamentCounter = () => {
  setCounter(counter+1);
    
};

//decrement the counter
const decrementCounter = () => {
    setCounter(counter-1);;
};

//reset the counter
const resetCounter = () => {
    setCounter(0);
};

  return (
    <div style={{textAlign: "center", marginTop: "20px" }}>
      <h1>Counter:{counter}</h1>
      <button onClick={increamentCounter
      } style={{margin:" 0 5px "}}>
        Increment
      </button>
      <button onClick={decrementCounter
      } style={{margin:" 0 5px "}}>
        Decrement
      </button>
      <button onClick={resetCounter
      } style={{margin:" 0 5px "}}>
        Reset
      </button>
    </div>
  )
}

export default Counter
