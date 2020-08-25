import React, {useState, useEffect, useRef} from 'react'; //Объявляем хук useState и useEffect

function App() {
  const [value, setValue] = useState('value') // Если собираемся
  const renderCount = useRef(1) // Если не собираемся перерисовывать
  const inputRef = useRef(null) // Сюда, ниже, записываем элемент DOM

  useEffect(()=> {
    renderCount.current++


  })

  const focus = event => inputRef.current.focus()

  return (
    <div className="App">
      <h1>Количество рендеров: {renderCount.current}</h1>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}></input>
      <button onClick={focus} className="btn btn-success">Focus</button>
    </div>
  );
}

export default App;
