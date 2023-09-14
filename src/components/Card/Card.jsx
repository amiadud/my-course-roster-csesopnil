import { FaBookOpen,FaDollarSign  } from "react-icons/fa";

const Card = ({card}) => {

    const { title, cover, description, price, credit_hour } = card
    
    
    return (
<div className=" bg-white rounded-lg">
    <div className="mx-4 my-4 ">
    <img width={'400px'} src={cover} className="rounded-xl" />
    <h2 className="font-bold my-2 text-lg">{title}</h2>
    <p className="text-sm">{description}</p>
    <div className="flex  justify-between items-center my-2 ">
    <p className=" text-base flex gap-2 items-center"><FaDollarSign></FaDollarSign>Price : {price}</p>
    <p className="flex gap-2 items-center"><FaBookOpen></FaBookOpen>Credit: {credit_hour}hr</p>
    </div>
    <button className=" btn btn-primary border-none outline-none transition-all w-full py-2 px-7 rounded-md bg-blue-500 text-white font">Select</button>
    </div>
</div>
    );
};

export default Card;