import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
    <Header></Header>
    <div className='flex w-10/12 justify-around m-auto flex-wrap  '>
      <Cards></Cards>
      <Sidebar></Sidebar>
    </div>
      
    </>
  )
}

export default App
