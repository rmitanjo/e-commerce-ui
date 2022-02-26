export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART = 'GET_CART';

export const addToCart = (articleItem) => {
    return (dispatch) => {
        dispatch({ type: ADD_TO_CART, payload: articleItem });
    }
}

export const getCart = () => {
    return (dispatch) => {
        dispatch({ type: GET_CART });
    }
}