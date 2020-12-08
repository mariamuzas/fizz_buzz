import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  
    const [number, setNumber] = useState(1);
    const [result, setResult] = useState("");

    useEffect(() => {
      if(number % 15 === 0){
        setResult("FizzBuzz")
      } else if (number % 5 === 0 ){
        setResult("Buzz")
      } else if (number % 3 === 0){
        setResult("Fizz")
      } else {
        setResult(number)
      }
    }, [number])

    
    const handleInc = () => {
        setNumber(number + 1);
    }
  
    const handleDec = () => {
      if (number > 1){
        setNumber(number - 1);
      }
    }
  
    return (
      <div className= "App">
        <button value={number} onClick={handleInc}> + </button>
  
        <button value={number} onClick={handleDec}> - </button>
  
        <h2> {result}</h2>
      </div>
    )
  }

export default App;
