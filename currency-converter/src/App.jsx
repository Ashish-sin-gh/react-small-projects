import { useState } from 'react'
import { InputCard } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencyData = useCurrencyInfo(from); 

  const options = Object.keys(currencyData) 

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  }

  const converter = () => {
    setConvertedAmt(amount * currencyData[to]);
  }

  return (
    <>
     <div className='bg-slate-400 w-full h-screen text-2xl bg-main bg-fixed bg-no-repeat bg-cover font-poppins '>
     <div className=' flex justify-center items-center h-screen'>
        <form onSubmit={(e) =>{
          e.preventDefault();
        }}>
        <div className=' p-8 relative backdrop-blur-lg border-2 border-white/50 rounded-lg bg-white/20'>
        <div className='relative flex flex-col justify-center  gap-10 w-[50%] min-w-[600px] '>
            <InputCard 
            label='from'
            amount ={amount}
            onCurrencyOptionChange={(curreny) => {
              setAmount(amount);
            }}
            selectCurrency={from}
            currencyOptions={options} 
            onAmountChange={(amount) => {
              setAmount(amount);
            }}
            />
            <button onClick={swap} className='bg-slate-600 text-white text-3xl py-2 px-4 rounded-md hover:scale-105 duration-75 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform active:scale-95'>
              SWAP
            </button>
            <InputCard
            label='to'
            amount ={convertedAmt}
            onCurrencyOptionChange={(currency) => {
              setTo(currency);
            }}
            amountDisabled = {true}
            selectCurrency={to}
            currencyOptions={options}
            
            />
          </div>
          <div className=' flex justify-center hover:scale-105  transform transition-transform active:scale-95  '>
            <button type='submit'
              className=' bg-white p-4 mt-4 w-full  rounded-lg'
              onClick={converter}>
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
        </div>
     </div>
    </>
  )
}

export default App
