import React, { useId } from 'react'

function InputCard({
  label,
  amount,
  onAmountChange,
  onCurrencyOptionChange,
  selectCurrency = "usd",
  currencyOptions = [],
  amountDisabled = false
}) {
  const amountInputID = useId();

  return (
    <div className='bg-gray-100 flex p-6 justify-around rounded-md w-[100%]'>
      <div className='flex flex-col gap-10 text-gray-600'>
        <label htmlFor={amountInputID} 
        className=''>
          {label}
        </label>
        <input type='number' 
        id={amountInputID}
        placeholder='Amount'
        value={amount}
        disabled = {amountDisabled}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} 
        className='text-black border border-gray-400 rounded-md p-1'/>
      </div>

      <div className='flex flex-col gap-10'>
        <label 
        htmlFor="currencyOptions"
        className='text-gray-600'>
          currency type
        </label>
        <select 
        className='text-black border border-gray-400 rounded-md p-1'
        name="" 
        id="currencyOptions"
        value={selectCurrency}
        onChange={(e)=> onCurrencyOptionChange && onCurrencyOptionChange(e.target.value)}>
        
          {currencyOptions.map((currency)=>(
            <option 
              key = {currency}
              value = {currency}> 
              {currency}
            </option>
          ))}
          
        </select>
      </div>
    </div>
  )
}

export default InputCard;