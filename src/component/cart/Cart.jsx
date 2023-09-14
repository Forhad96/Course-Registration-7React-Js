import PropTypes from 'prop-types'

const Cart = () => {
    return (
        <div className='w-1/4'>
            <h1 className='text-4xl'>Cart</h1>
            <div className="card bg-base-100 shadow-2xl p-6">
                <h1 className='text-lg font-bold text-sky-500 border-b-2 text-center pb-4'>Credit Hour Remaining 7 hr</h1>
                <h2 className='text-lg font-bold border-b-2 text-center py-4'>Course Name</h2>
                <h3 className='font-medium text-gray-600 border-b-2 py-4'>Total Credit Hour : 13</h3>
                <h3 className='font-semibold text-gray-600 py-4'>Total Price : 48000 USD</h3>

            </div>
        </div>
    );
};

Cart.propTypes={

}

export default Cart;