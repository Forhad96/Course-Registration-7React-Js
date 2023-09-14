
import './App.css'
import Cart from './component/cart/Cart'
import Courses from './component/courses/Courses'

function App() {


  return (
    <div className='container mx-auto py-10'>

      <h1 className='text-3xl text-center font-bold'>Course Registration</h1>
      <div className='md:flex justify-between gap-6'>
      <Courses></Courses>
      <Cart></Cart>
      </div>

    </div>
  )
}

export default App
