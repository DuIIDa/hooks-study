import React, {useState} from 'react'; //Объявляем хук useState

function App() {

  const [counter, setCounter] = useState(0) //Передаем начальное состояние
  //Деструктуризируем то, что нам возвращается(переменная и функция изменения)

  const [state, setState] = useState({ // State в формате объекта
    title: 'Название',
    date: Date.now()
  })

  const increment = () => {
    setCounter(counter + 1) // 1 вариант вызова
  }

  const decrement = () => {
    setCounter(prev => prev - 1) // 2 вариант вызова
  }

  const updateTitle = () => {
    setState(prev => {
      return {
        ...prev,
        title: 'New Name'
      }
    })
  }


  return (
    <div className="App">
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Добивить +</button>
      <button onClick={decrement} className="btn btn-danger">Убрать -</button>
      <button onClick={updateTitle} className="btn btn-success">Изменить название</button>


      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
