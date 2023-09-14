import { BsBook,BsCurrencyDollar } from 'react-icons/bs';
import PropTypes from 'prop-types'

const Course = ({course}) => {
    const {id,image,title,description,price,credit} =course
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl p-6">
        <figure className='pb-3'>
          <img
            src={image}
            alt=""
            className="rounded-xl w-full"
          />
        </figure>
        <div className="text-center space-y-3">
          <h2 className="font-semibold">{title}</h2>
          <p className='text-gray-400 font-medium'>
            {description}
          </p>
          {/* footer */}
          <div className="card-actions justify-around py-2">
            <div className='flex items-center gap-2'>
            <BsCurrencyDollar></BsCurrencyDollar>
            <p className='text-gray-500 font-medium'>Price : {price}</p>
            </div>
            <div className='flex items-center gap-2'>
            <BsBook></BsBook>
            <p className='text-gray-500 font-medium'>Credit :{credit}hr</p>      
            </div>
          </div>
          <button className="btn btn-info w-full text-white text-lg hover:bg-sky-700">Select</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes={
    course: PropTypes.object.isRequired,
}
export default Course;
