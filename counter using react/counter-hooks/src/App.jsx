import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  //let count = 0
  function inc (){
    if(counter < 5){
      counter = counter + 1;
    }
    setCounter(counter)
  }

  function dec(){
    if(counter > 0){
      setCounter(counter - 1);
    }

  }

  return (
    <>
    <h1>Counter - Hooks - useState</h1>
    <h2>counter value: <span id="countSpan">{counter}</span></h2>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>decrement</button>
    </>
  )
}

export default App
