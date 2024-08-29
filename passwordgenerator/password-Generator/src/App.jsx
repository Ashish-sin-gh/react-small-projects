import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [password,setPassword] = useState("password");
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);

  const passGen = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(character){
      str += ",.'/!@#$%^&*_+=()~`?:";
    }
    if(number){
      str +=  "0123456789"
    }
    for(let i = 1; i <= length; i++){
      const char = Math.floor(Math.random() * str.length + 1) ;
      pass = pass + str.charAt(char); 
    }
    setPassword(pass);
  }, [length, character, number, setPassword]);

  //copy password using useRef
  const passReference = useRef(null);

  const copyToClipBoard = useCallback(()=>{
    passReference.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>passGen(),[length,character,number,passGen]);

  return (
    <>
      <h1
      className='text-5xl font-bold text-center my-16 underline'>PASSWORD GENERATOR</h1>

      <div className='flex flex-col items-start p-8 bg-slate-200 gap-5 border-2 mx-auto w-[50%] rounded-2xl'>
        <div className='flex flex-wrap items-center gap-5 w-[100%]'>
          <label htmlFor="slider" className='text-2xl mr-1'>length of password: {length} </label>

          <input id="slider" type='range' value={length} min={8} max={16} className='cursor-pointer w-[50%]'
          onChange={(e)=>setlength(e.target.value)}/>
        </div>

        <div className='flex flex-wrap items-center gap-5'>
          <label className="text-2xl" htmlFor="character">Character</label>

          <input type='checkbox' id="character" className='align-middle h-5 w-5'defaultChecked={character} onChange={() => {
            setCharacter((prev) => !prev);
          }}/>
        </div>

        <div className='flex flex-wrap items-center gap-5'>
          <label className="text-2xl" htmlFor="number">Number</label>

          <input type='checkbox' id="number" className='align-middle h-5 w-5'defaultChecked={number} onChange={() => {
            setNumber((prev) => !prev);
          }}/>
        </div>

        <div className='flex gap-5 items-center w-[100%]'>
          <input type="text" value={password} id="password-op" className='outline-none border-2 border-gray-700 text-2xl text-gray-500 px-4 py-2 rounded-2xl grow shadow-lg read-only:' ref={passReference}  />

          <button className='px-6 py-2 text-2xl bg-red-500  text-white rounded-2xl hover:scale-105 duration-75 hover:shadow-lg' onClick={copyToClipBoard}>COPY</button>
        </div>
      </div>
    </>
  )
}

export default App
