import PropTypes from "prop-types";

const Header = ({
  selectedCourses,
  totalCredits,
  remainingCredits,
  totalPrice,
  cartCount
}) => {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <img className="w-16" src="/public/logo.png" alt="" />
        </div>
        <div className="flex-none md:hidden">
          <details className="dropdown dropdown-end">
            <summary tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-info"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cartCount}</span>
              </div>
            </summary>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow ">
              <div className="card bg-base-100 shadow-2xl p-6">
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
          </details>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalCredits: PropTypes.number.isRequired,
  remainingCredits: PropTypes.number.isRequired,
  cartCount:PropTypes.number.isRequired
};

export default Header;
