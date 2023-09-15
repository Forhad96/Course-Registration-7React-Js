import PropTypes from "prop-types";


const Cart = ({ selectedCourses, totalCredits,remainingCredits, totalPrice }) => {
  return (
    <div className="min-w-[320px]  ">
      <div className="card bg-base-100 shadow-2xl p-6 hidden md:block sticky  top-10">
        <h1 className="text-lg font-bold text-sky-500 border-b-2 text-center pb-4">
          Credit Hour Remaining {remainingCredits} hr
        </h1>
        <h2 className="text-lg font-bold text-center py-4">
          Course Name
        </h2>
        <ol className="list-decimal text-gray-600 leading-7">
          {selectedCourses.map((selectedCourse) => (
            <li key={selectedCourse.id} className="">
              {selectedCourse.title}
            </li>
          ))}
        </ol>
        <h3 className="font-medium text-gray-600 border-y-2 py-4 mt-5">
          Total Credit Hour : {totalCredits}
        </h3>
        <h3 className="font-semibold text-gray-600 py-4">
          Total Price : {totalPrice} USD
        </h3>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalCredits: PropTypes.number.isRequired,
  remainingCredits: PropTypes.number.isRequired,
};

export default Cart;
