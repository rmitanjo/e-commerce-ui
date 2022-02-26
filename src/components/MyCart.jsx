import { useSelector } from 'react-redux';

import MyCartItem from './MyCartItem';

function MyCart() {
    const cart = useSelector((state) => state.cartReducer);

    return (
        <div className="my-cart">
            {cart.articles.map((item, index) => 
                <MyCartItem key={index} data={item} />
            )}
        </div>
    )
}

export default MyCart;