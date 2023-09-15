import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';

const Sidebars = ({courses, prices, credits, remins}) => {
    return (
        <div className="bg-white w-72 h-[50%] rounded-lg my-4">
            <div className='ml-4 my-2'>
            <h2 className='text-blue-500 font-semibold my-2'>Credit Hour Remaining:{remins} hr</h2>
            <hr />
            <h2 className='text-xl font-semibold my-2'>Course Name</h2>
            {  
                courses.map((course,idx) => <Sidebar key={idx} course={course}></Sidebar>)
            }
            <hr />
            <h2 className='my-4'>Total Credit: {credits}</h2>
            <hr />
            <h2 className='my-4'>Total Price: {prices} USD</h2>
            </div>
        </div>
    );
};

Sidebars.PropTypes ={
    courses:PropTypes.object,
    prices:PropTypes.number,
    credits:PropTypes.number
}
export default Sidebars;