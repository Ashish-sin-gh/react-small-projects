import {useState} from 'react'; 

function App() {  
  const [color, setColor] = useState("olive");
  return (
    <div className="flex items-end justify-center w-full h-screen" style={{backgroundColor:color}}>
      <div className='p-4 m-4 flex flex-wrap'>
        <div className="bg-white p-4 flex flex-wrap rounded-full gap-10">
          <button 
          onClick = {() => setColor("red")}
          className='bg-red-600 px-4 py-2 rounded-full text-lg font-bold' >
            red
          </button>
          <button 
          onClick = {() => setColor("yellow")}
          className='bg-yellow-500 px-4 py-2 rounded-full text-lg font-bold' >
            yellow
          </button>
          <button 
          onClick = {() => setColor("blue")}
          className='bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold' >
            blue
          </button>
          <button 
          onClick = {() => setColor("green")}
          className='bg-green-500 px-4 py-2 rounded-full text-lg font-bold' >
            green
          </button>
          <button 
          onClick = {() => setColor("white")}
          className='bg-white border-2 border-gray-500 text-black px-4 py-2 rounded-full text-lg font-bold' >
            white
          </button>
          <button 
          onClick = {() => setColor("purple")}
          className='bg-purple-500 px-4 py-2 rounded-full text-lg font-bold' >
            purple
          </button>
        </div>
      </div>  
    </div>
  )
}

export default App
