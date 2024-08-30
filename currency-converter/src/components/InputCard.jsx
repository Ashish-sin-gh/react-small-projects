import React, { useId } from 'react'

function InputCard({
  label,
  amount,
  onAmountChange,
  onCurrencyOptionChange,
  selectCurrency = "inr",
  currencyOptions = []
}) {
  const amountInputID = useId();

  return (
    <div className='bg-white flex p-6 justify-around rounded-md w-[100%]'>
      <div className='flex flex-col gap-10'>
        <label htmlFor={amountInputID} 
        className=''>
          {label}
        </label>
        <input type='number' 
        id={amountInputID}
        placeholder='Amount'
        value={amount}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} />
      </div>

      <div className='flex flex-col gap-10'>
        <label 
        htmlFor="currencyOptions">
          currency type
        </label>
        <select 
        name="" 
        id="currencyOptions"
        value={selectCurrency}
        onChange={(e)=> onCurrencyOptionChange && onCurrencyOptionChange(e.target.value)}>
        
          {currencyOptions.map((currency)=>{
            <option 
              key = {currency}
              value = {currency}>
              {currency}
            </option>
          })}
          
        </select>
      </div>
    </div>
  )
}

export default InputCard;