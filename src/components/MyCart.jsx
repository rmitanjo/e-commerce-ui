import { useSelector } from 'react-redux';

function MyCart() {
    const cartData = useSelector((state) => state.cartReducer);
    console.log('Content from Cart');
    console.log(cartData);

    return (
        <div className="my-cart">
            <button onClick={() => test()}>Test</button>
        </div>
    )
}

export default MyCart;