import "./App.css";
import  { useState } from "react"
import Buttons from "./components/Buttons"
import ClearButton from "./components/ClearButton";
import Input from "./components/Input"

function App() {

  const [ allvalues, addToInput] = useState({
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  });

  //  const inputHandler = val => { addToInput( () => allvalues.input + val )};

  const inputHandler = val => { addToInput( {...allvalues, input: allvalues.input + val })};
 
   const clearHandler = () => { addToInput( {...allvalues, input: ""})}

   const add = () => {addToInput( () => {
     allvalues.previousNumber = allvalues.input;
     allvalues.operator = "plus";
     return {...allvalues, input:  ""}
   } )};

   const divide = () => {addToInput( () => {
    allvalues.previousNumber = allvalues.input;
    allvalues.operator = "divide";
    return {...allvalues, input:  ""}
  } )};

  
  const multiply = () => {addToInput( () => {
    allvalues.previousNumber = allvalues.input;
    allvalues.operator = "multiply";
    return {...allvalues, input:  ""}
  } )};

  const minus = () => {addToInput( () => {
    allvalues.previousNumber = allvalues.input;
    allvalues.operator = "minus";
    return {...allvalues, input:  ""}
  } )};

   const evaluate = () => {addToInput(() => {
     allvalues.currentNumber = allvalues.input;

     if(allvalues.operator === "plus"){
      return {...allvalues, input: parseFloat(allvalues.previousNumber) + parseFloat(allvalues.currentNumber) }
     }

     if(allvalues.operator === "divide"){
      return {...allvalues, input: parseFloat(allvalues.previousNumber) / parseFloat(allvalues.currentNumber) }
     }

     if(allvalues.operator === "multiply"){
      return {...allvalues, input: parseFloat(allvalues.previousNumber) * parseFloat(allvalues.currentNumber) }
     }

     if(allvalues.operator === "minus"){
      return {...allvalues, input: parseFloat(allvalues.previousNumber) - parseFloat(allvalues.currentNumber) }
     }
   })}

  console.log(allvalues)

  return <div className='App'>
    <div className="calc-wrapper">
     <div className="row">
       <Input>{allvalues.input}</Input>
     </div>
    <Buttons handleClick={inputHandler} add={add} evaluate={evaluate} divide={divide} multiply={multiply} minus={minus} />
    <div className="row">
      <ClearButton handleClear={clearHandler}>Clear</ClearButton>
    </div>
    </div>
  </div>;
}

export default App;
