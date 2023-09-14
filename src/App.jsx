import { useState } from 'react'
import PropTypes from 'prop-types';
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Sidebars from './components/Sidebars/Sidebars';

function App() {

  const [courses, setCourses] = useState([]);
  const [prices, setPrices] = useState(0);
  const [credits, setCredits] = useState(0);
  const [remins, setRemins] = useState(0);

  const handleAddToCourse = card =>{
      const newCourses = [...courses, card];
      setCourses(newCourses);
      handleAddPrices(card);
      handleAddCredit(card);
   
  }
  const handleAddPrices = price =>{
    setPrices(prices + price.price)
  }

  const handleAddCredit = credit =>{
    setCredits(credits + credit.credit_hour)
    remaining(credit);
  }

  const remaining = remain =>{
    setRemins (credits - remain)
  }
  return (
    <> 
    <Header></Header>
    <div className='flex w-10/12 justify-around m-auto flex-wrap  '>
      <Cards handleAddToCourse ={handleAddToCourse} handleAddPrices = {handleAddPrices} handleAddCredit={handleAddCredit}></Cards>
      <Sidebars courses={courses} prices={prices} credits={credits} remins={remins}></Sidebars>
    </div>
    </>
  )
}

export default App
