import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleAddToCourse, handleAddPrices, handleAddCredit}) => {

    const [cards, setCards] = useState([])


    useEffect( ()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="w-9/12 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-4 ">
            {
                cards.map( card => 
                <Card 
                key={card.id} 
                card={card}
                handleAddToCourse = {handleAddToCourse}
                handleAddPrices = {handleAddPrices}
                handleAddCredit = {handleAddCredit}
                ></Card>)
            }
            </div>
        </div>
    );
};

Cards.PropTypes = {
    handleAddToCourse:PropTypes.func.isRequired,
    handleAddPrices:PropTypes.func.isRequired,
    handleAddCredit:PropTypes.func.isRequired
}

export default Cards;