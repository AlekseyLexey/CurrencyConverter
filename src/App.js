import React, { useState, useEffect, Fragment } from 'react';
import './App.css'
import getValutes from './services/cbrService';


const App =  (props) => {
  const [valute, setValute] = useState('RUB');
  const [value, setValue] = useState(props.value);
  const [list, setList] = useState([])

  useEffect(() => {
    getValutes().then(res => setList(res['Valute']))
  }, [])

  useEffect(() => {

    if (valute === 'RUB') {
      setValue(props.value)
    }

    if (valute !== 'RUB') {
      setValue(props.value)
      setValue(value => (value / list[valute]['Value']).toFixed(2))
    }

  }, [valute])
  
  return (
    <div className="app">
      <div className="counter">{ value }</div>
      <div className="valute">{ valute }</div>
      <div className="controls">
        <button onClick={ () => setValute('RUB') }>RUB</button>
        <button onClick={ () => setValute('USD') }>USD</button>
        <button onClick={ () => setValute('EUR') }>EUR</button>
      </div>
    </div>
  )
}

export default App;

