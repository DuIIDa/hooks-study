import React, {useState, useContext, useReducer} from 'react';

const Alert = () => {
  const alert = useAlert()

  if(!alert.visible) return null

  return (
    <div className="alert alert-success" onClick={alert.hide}>
      <p>{alert.text}</p>
    </div>
  )
}




const Main = () => {
  //const {toggle} = useAlert() 
  const {show} = useAlert()
  return (
    <>
      <h1>Hello useContext</h1>
      <button onClick={()=> show('Messange from main')} className="btn btn-success">Show is Alert</button>
    </>
  )
}





const AlertContext = React.createContext()
//const AlertToggleContext = React.createContext()
const useAlert = () => {
  return useContext(AlertContext)
}
/* const useAlertToggle = () => {
  return useContext(AlertToggleContext)
} */

const  reducer = (state, action) => {
  switch (action.type) {
    case 'show': return {...state, visible: true, text: action.text}
    case 'hide': return {...state, visible: false}
    default : return state
  }
}

const AlertProvider = ({children}) => {
  //const [alert, setAlert] = useState(false)
  //const toggle = () => setAlert(prev => !prev)

  const show = (text) => dispatch({type: 'show', text: text})
  const hide = () => dispatch({type: 'hide'})

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  })


  /*value в Proveder давет возможность обратиться к alert у дочерних компонентов*/
  /* return (
    <AlertContext.Provider value={alert}>
      <AlertToggleContext.Provider value={toggle}>
          {children}
      </AlertToggleContext.Provider>
    </AlertContext.Provider>
  )*/ 

  //БЕЗ РЕДЬЮСА
  /*return (
    <AlertContext.Provider value={{
      visible: state.visible,
      toggle
    }}>
      {children}
    </AlertContext.Provider>
  )*/

  //С РЕДЬЮСОМ
  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      show, hide,
      text: state.text
    }}>
      {children}
    </AlertContext.Provider>
  )
}






function App() {
 
  return (
    <div className="App container pt-3">
        <AlertProvider>
            <Alert></Alert>
            <Main toggle={() => {}}></Main>
        </AlertProvider>
    </div>

  );
}

export default App;
