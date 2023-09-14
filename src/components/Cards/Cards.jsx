import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [cards, setCards] = useState([])

    useEffect( ()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="w-9/12 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-3 ">
            {
                cards.map( card => <Card key={card.id} card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;