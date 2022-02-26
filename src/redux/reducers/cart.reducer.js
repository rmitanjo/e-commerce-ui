import {
    ADD_TO_CART,
    GET_CART,
} from '../actions/cart.action';

const initialCartState = {
    totalCount: 0,
    articles: [],
};

export default function cartReducer(state = initialCartState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            const {id, qty} = action.payload;
            const articleItem = state.articles.find(item => item.id === id);
            
            let arrArticles = state.articles;
            //If the article does not exists in the cart -> add the article { id: [id], qty: [qty] }
            if(typeof articleItem === 'undefined') {
                const newArticle = {id: id, qty: qty};
                arrArticles.push(newArticle);
            }
            //Else if the article already exists in the cart then just add it { id: [id], qty: [oldQty + qty] }
            else {
                const existingArticle = {
                    id: id,
                    qty: articleItem.qty + qty
                };

                const existingArticleIndex = state.articles.indexOf(articleItem);
                arrArticles[existingArticleIndex] = existingArticle;
            }

            //Save the old state but only change the necessary (otherwise components will not be updated)
            //The reducer require immutable data
            //https://blog.jakoblind.no/react-component-not-updating/
            const newState = {
                ...state,
                totalCount: state.totalCount += 1, //Increment the count of all articles
                articles: arrArticles
            };

            return newState;

        case GET_CART:
            return state;
        default: 
            return state;
    }
}