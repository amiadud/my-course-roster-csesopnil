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
  const [defaults, setDefaults] = useState(20);

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
    const newPrice = prices + parseInt(price.price)
    console.log("price",newPrice);
    setPrices(newPrice)
  }

  const handleAddCredit = credit =>{
    const newCredit = credits + parseInt(credit.credit_hour)
    setCredits(newCredit)
    if(newCredit < 20 ){
      let newCredit = defaults - newCredit
      console.log(" remaining",newCredit); 
      setDefaults(newCredit)
    }
    else{
      setDefaults(0)
    }
  }
  return (
    <> 
    <Header></Header>
    <div className='flex w-10/12 justify-around m-auto flex-wrap  '>
      <Cards handleAddToCourse ={handleAddToCourse}></Cards>
      <Sidebars courses={courses} prices={prices} credits={credits} defaults={defaults}></Sidebars>
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
