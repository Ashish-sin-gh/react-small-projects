import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
  const [data, setData] = useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then(res => res.json())
      .then(res => setData(res[currency]))
      .catch(err => console.error(err));
  },[currency]);
  return data; //data of different exchange rate against one currency will be retuned
}

export default useCurrencyInfo;
  