import {
    ADD_TO_CART,
    GET_CART,
} from '../actions/cart.action';

const initialCartState = {
    totalCount: 0,
    articles: [
        /*
        {
            id: 1,
            qty: 14,
        }
        */
    ],
};

export default function cartReducer(state = initialCartState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            const {id, qty} = action.payload;
            const articleItem = state.articles.find(item => item.id == id);

            //If the article does not exists in the cart -> add the article { id: [id], qty: [qty] }
            if(typeof articleItem === 'undefined') {
                const newArticle = {id: id, qty: qty};
                state.articles.push(newArticle);
            }
            //Else if the article already exists in the cart then just add it { id: [id], qty: [oldQty + qty] }
            else {
                const existingArticle = {
                    id: id,
                    qty: articleItem.qty + qty
                };

                const existingArticleIndex = state.articles.indexOf(articleItem);
                state.articles[existingArticleIndex] = existingArticle;
            }

            //Increment the count of all articles
            state.totalCount += 1;

            return state;

        case GET_CART:
            /*
            console.log('Get cart state:');
            console.log(action);
            console.log(state);
            */
            return { action: 'Get cart' };
        default: 
            return state;
    }
}