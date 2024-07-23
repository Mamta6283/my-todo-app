import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import Todo from './components/Todo'
import store from './redux/actions/store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store} >
        <Todo></Todo>
      </Provider>
    </>
  )
}

export default App
