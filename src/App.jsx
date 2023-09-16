import { useState } from 'react'
import PropTypes from 'prop-types';
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Sidebars from './components/Sidebars/Sidebars';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [courses, setCourses] = useState([]);
  const [prices, setPrices] = useState(0);
  const [credits, setCredits] = useState(0);
  const [remains, setRemains] = useState(0);

  const handleAddToCourse = card =>{
    const defaultHour = 20;
    const handleAddCredit = credit =>{
      const newCredit = credits + parseInt(credit.credit_hour)
      if(newCredit > 20){
        return toast.warning(`Not available remaining hour`)
      }
      else{
        setCredits(newCredit);
      }

      
      if(newCredit <= 20){
        let newHours = defaultHour - newCredit
        setRemains(newHours)
      }
      else{
        setRemains(0);
        toast.error(`Can't Added Credit`);
      }
    }
    const courseIndex = courses.findIndex((courseItem) => courseItem.id === card.id);
    if(courseIndex === -1){
      if(courses.length < 4){
      setCourses([...courses, { ...card, quantity: 1 }]);
      }
      handleAddCredit(card)
      handleAddPrices(card);
    }
    else{
      
      toast.warning("Already Added");
    }
  }
  const handleAddPrices = price =>{
    const newPrice = prices + parseInt(price.price)
    if(prices <= 4 ){
      setPrices(newPrice)
    }
  }
  return (
    <> 
    <Header></Header>
    <div className='flex w-10/12 justify-around m-auto flex-wrap  '>
      <Cards handleAddToCourse ={handleAddToCourse}></Cards>
      <Sidebars courses={courses} prices={prices} credits={credits} remains={remains} ></Sidebars>
      <ToastContainer theme="dark"></ToastContainer>
      
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
