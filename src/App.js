import React from 'react'
import Home from './components/Home'
import './App.css'
import StoreState from './components/Context/StoreState'


const App = () => {
  return (
    <StoreState>
      <Home/>
    </StoreState>
  )
}

export default App