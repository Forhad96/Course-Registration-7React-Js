import { useState } from "react";
import "./App.css";
import Cart from "./component/cart/Cart";
import Courses from "./component/courses/Courses";

// react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header/Header";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(20);
  const [cartCount, setCartCount] = useState(0);

  // Select button handler for add course to cart
  const handlerSelect = (course) => {
    const isExist = selectedCourses.find(
      (selectedCourse) => selectedCourse.id === course.id
    );
    if (isExist) {
      return toast.error("⚠️Already added!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      if (remainingCredits - course.credit < 0) {
        // return alert('Warning: Your credit limit has been reached')
        return toast.warn("Your credit limit has been reached!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.success(`${course.title}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setSelectedCourses([...selectedCourses, course]);
      }
    }

    // total credit
    setTotalCredits(totalCredits + course.credit);

    // set total price
    setTotalPrice(totalPrice + course.price);

    // set remaining
    setRemainingCredits(remainingCredits - course.credit);
    // set cart count
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container mx-auto py-5">
      <Header
        cartCount={cartCount}
        remainingCredits={remainingCredits}
        totalCredits={totalCredits}
        totalPrice={totalPrice}
        selectedCourses={selectedCourses}></Header>
      <h1 className="text-3xl text-center font-bold">Course Registration</h1>
      <div className="md:flex gap-6">
        <Courses handlerSelect={handlerSelect}></Courses>
        <Cart
          remainingCredits={remainingCredits}
          totalCredits={totalCredits}
          totalPrice={totalPrice}
          selectedCourses={selectedCourses}></Cart>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="custom-toast"
      />
    </div>
  );
}

export default App;
