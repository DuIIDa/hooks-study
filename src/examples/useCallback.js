import React, {useState, useEffect, useCallback} from 'react';

const ItemsList = ({getItems}) => {
  const [items, setItems] = useState([])

  useEffect (() => {
    const newItems = getItems()
    console.log('render')
    setItems(newItems)
  }, [getItems])

  return ( 
    <ul>
      {items.map((item, i) => <li key = {i}>{item}</li>)}
    </ul>
  )
}

function App() {
  const [count, setcount] = useState(1) 
  const [colored, setColored] = useState(false)

  const style = {
    color: colored ? 'red' : 'black'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }, [count])

  return (
    <div className="App">
      <h1 style={style}>Rezult: {count}</h1>
      <button onClick={() => setcount(prev => prev + 1)} className="btn btn-success">Add</button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Change</button>

      <ItemsList getItems={generateItemsFromAPI}></ItemsList>

    </div>

  );
}

export default App;
