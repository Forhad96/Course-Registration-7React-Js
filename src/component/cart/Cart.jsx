import PropTypes from "prop-types";

const Cart = ({ selectedCourses, totalCredits,remainingCredits, totalPrice }) => {
  return (
    <div className="w-1/4 sticky h-full top-10">
      <div className="card bg-base-100 shadow-2xl p-6">
        <h1 className="text-lg font-bold text-sky-500 border-b-2 text-center pb-4">
          Credit Hour Remaining {remainingCredits} hr
        </h1>
        <h2 className="text-lg font-bold border-b-2 text-center py-4">
          Course Name
        </h2>
        <ol className="list-decimal text-gray-600">
          {selectedCourses.map((selectedCourse) => (
            <li key={selectedCourse.id} className="">
              {selectedCourse.title}
            </li>
          ))}
        </ol>
        <h3 className="font-medium text-gray-600 border-b-2 py-4">
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
