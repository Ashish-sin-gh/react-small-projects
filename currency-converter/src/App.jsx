import { useState } from 'react'
import { InputCard } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-slate-400 w-full h-screen text-2xl bg-main bg-fixed bg-no-repeat bg-cover font-poppins'>
      <div className='relative flex justify-center items-center h-screen '>
        <div className='flex flex-col relative gap-10 w-[70%]'>
          <InputCard />
          <button className='bg-black text-white text-3xl py-2 px-4 rounded-md hover:scale-125 duration-75 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>SWAP</button>
          <InputCard/>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
