import {
    ADD_TO_CART,
    INCREASE_QTY,
    DECREASE_QTY,
    REMOVE_ITEM,
} from '../actions/cart.action';

const initialCartState = {
    totalCount: 0,
    articles: [],
};

export default function cartReducer(state = initialCartState, action) {
    if(action.type === ADD_TO_CART) {
        const {id, ref, qty, libelle, pu, desc} = action.payload;
        const articleItem = state.articles.find(item => item.id === id);
            
        let arrArticles = state.articles;
        //If the article does not exists in the cart -> add the article { id: [id], qty: [qty] }
        if(typeof articleItem === 'undefined') {
            const newArticle = {id: id, ref: ref, qty: qty, libelle: libelle, pu: pu, desc: desc};
            arrArticles.push(newArticle);
        }
        //Else if the article already exists in the cart then just add it { id: [id], qty: [oldQty + qty] }
        else {
            const existingArticle = {
                id: id,
                ref: ref,
                libelle: libelle,
                qty: articleItem.qty + qty,
                pu: pu,
                desc: desc
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
    }
    else if(action.type === INCREASE_QTY) {
        const id = action.payload;
        
        const articleItem = state.articles.find(item => item.id === id);
        if(typeof articleItem !== 'undefined') {
            const updatedArticle = { ...articleItem, qty: articleItem.qty + 1 }

            const articleIndex = state.articles.indexOf(articleItem);
            let arrArticles = state.articles;
            arrArticles[articleIndex] = updatedArticle;

            const newState = {
                ...state,
                totalCount: state.totalCount += 1,
                articles: arrArticles
            }
            
            return newState;
        }

        return state;
    }
    else if(action.type === DECREASE_QTY) {
        const id = action.payload;
        
        const articleItem = state.articles.find(item => item.id === id);
        if(typeof articleItem !== 'undefined') {
            //Cannot decrease qty if there is one left => delete row instead
            if(articleItem.qty === 1) return state;

            const updatedArticle = { ...articleItem, qty: articleItem.qty - 1 }

            const articleIndex = state.articles.indexOf(articleItem);
            let arrArticles = state.articles;
            arrArticles[articleIndex] = updatedArticle;

            const newState = {
                ...state,
                totalCount: state.totalCount -= 1,
                articles: arrArticles
            }
            
            return newState;
        }

        return state;
    }
    else if(action.type === REMOVE_ITEM) {
        const id = action.payload;
        const articleItem = state.articles.find(item => item.id === id);
        
        let arrArticles = state.articles;
        if(typeof articleItem !== 'undefined') {
            const articleIndex = state.articles.indexOf(articleItem);

            if (articleIndex > -1) {
                arrArticles.splice(articleIndex, 1);

                const newState = {
                    ...state,
                    articles: arrArticles
                }
                
                return newState;
            }
        }

        return state;
    }
    else
         return state;
}