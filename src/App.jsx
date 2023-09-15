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
    const courseIndex = courses.findIndex((courseItem) => courseItem.id === card.id);
    if(courseIndex === -1){
      setCourses([...courses, { ...card, quantity: 1 }]);
      handleAddPrices(card);
      handleAddCredit(card);
    }
    else{
      alert('Course Already added');
    }
  }
  const handleAddPrices = price =>{
    setPrices(prices + price.price)
  }

  const handleAddCredit = credit =>{
    const newCredit = credits + credit.credit_hour
    setCredits(newCredit)
    remaining(credit)
  }
  const defaultCreditHours = 20;
  const remaining = (remain) =>{
    const difference = defaultCreditHours - remain.credit_hour;
    setRemins(difference);
    
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
Cards.PropTypes = {
  handleAddToCourse:PropTypes.func.isRequired,
  handleAddPrices:PropTypes.func.isRequired,
  handleAddCredit:PropTypes.func.isRequired
}
export default App
