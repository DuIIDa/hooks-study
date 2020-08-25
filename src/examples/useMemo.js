import React, {useState, useMemo} from 'react';

const complexCompute = num => {
  let i = 0
  while(i < 100000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(41) 
  const [colored, setColored] = useState(false)
  
  const computed = useMemo(() => { 
    return complexCompute(number)
  }, [number]) // Проверят если изменилось значение number, то вызвается функция

  const style = {
    color: colored ? 'red' : null
  }

  return (
    <div className="App">
      <h1 style={style}>Rezult: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-success">Add</button>
      <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-danger">Remove</button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Change</button>
    </div>
  );
}

export default App;
