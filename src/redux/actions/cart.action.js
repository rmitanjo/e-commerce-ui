export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QTY = 'INCREASE_QTY';
export const DECREASE_QTY = 'DECREASE_QTY';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = (articleItem) => {
    return (dispatch) => {
        dispatch({ type: ADD_TO_CART, payload: articleItem });
    }
}

export const increaseQty = (id) => {
    return (dispatch) => {
        dispatch({ type: INCREASE_QTY, payload: id });
    }
}

export const decreaseQty = (id) => {
    return (dispatch) => {
        dispatch({ type: DECREASE_QTY, payload: id });
    }
}

export const removeItem = (id) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_ITEM, payload: id });
    }
}

export const emptyCart = () => {
    return (dispatch) => {
        dispatch({ type: EMPTY_CART });
    }
}