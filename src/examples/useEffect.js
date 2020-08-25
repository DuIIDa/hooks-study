import React, {useState, useEffect} from 'react'; //Объявляем хук useState и useEffect

function App() {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [post, setPost] = useState({
    x: 0,
    y: 0
  })

  /* useEffect(() => {
    console.log('USE EFFECT');
  }, [type]) */

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = event => {
    setPost({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('CompanentDidMount');

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => { // При добавление слушателя, его необходимо удалять, он удалиться если удалитсья компонент
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div className="App">
      <h1>Счетчик: {type}</h1>
      <button onClick={() => setType('users')} className="btn btn-success">Пользватели</button>
      <button onClick={() => setType('todos')} className="btn btn-danger">ToDo</button>
      <button onClick={() => setType('Posts')} className="btn btn-success">Post</button>

      <pre>{JSON.stringify(post, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
