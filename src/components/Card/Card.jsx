import PropTypes from 'prop-types';

import { LiaDollarSignSolid  } from "react-icons/Lia";
import { HiOutlineBookOpen  } from "react-icons/hi";

const Card = ({card, handleAddToCourse}) => {
    const { title, cover, description, price, credit_hour } = card

    return (
<div className=" bg-white rounded-lg">
    <div className="mx-4 my-4  ">
    <img width={'400px'} src={cover} className="rounded-xl" />
    <h2 className="font-bold my-2 text-lg">{title}</h2>
    <p className="text-sm">{description}</p>
    <div className="flex  justify-between items-center my-2 ">
    <p className=" text-base flex gap-2 items-center"><p className='text-xl'><LiaDollarSignSolid></LiaDollarSignSolid></p>Price : {price} USD</p>
    <p className="flex gap-2 items-center"><p className='text-xl'><HiOutlineBookOpen></HiOutlineBookOpen></p>Credit: {credit_hour}hr</p>
    </div>
    <button onClick={() => handleAddToCourse(card) }  className=" btn btn-primary border-none outline-none transition-all w-full py-2 px-7 rounded-md bg-blue-500 text-white font">Select</button>
    </div>
</div>
    );
};

Card.PropTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToCourse:PropTypes.func.isRequired
}
export default Card;