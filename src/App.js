import React, { useState, useEffect, Fragment } from 'react';
import './App.css'

const getValutes = async () => {
	const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
 
	if (!res.ok) {
	  throw new Error(`Could not fetch ${url}, status: ${res.status}`)
	}
 
	return await res.json()
 }
 
 const valutes = getValutes();
 
 const USD = valutes.then(res => res.Valute['USD']);
 const EUR = valutes.then(res => res.Valute['EUR']);

const App = (props) => {
  const [valute, setValute] = useState('RUB');
  const [value, setValue] = useState(props.value);
  
  useEffect(() => {
    
  }, [valute])
  
  return (
    <div className="app">
      <div className="counter">{ value }</div>
      <div className="controls">
        <button onClick={ () => setValute('RUB') }>RUB</button>
        <button onClick={ () => setValute('USD') }>USD</button>
        <button onClick={ () => setValute('EUR') }>EUR</button>
      </div>
    </div>
  )
}

export default App;

