import { HiOutlineShoppingCart } from 'react-icons/hi';

const CartWidget = () => {
    return(
        <>
        <div className='cart-container'>
            <HiOutlineShoppingCart className='cart' />
            <p className='bubble'>4</p>
        </div>
        </>
    )
}

export default CartWidget;