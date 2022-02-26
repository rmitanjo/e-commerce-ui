import { Outlet } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import Header from './pages/layout/Header';
import Nav from './pages/layout/Nav';
import Footer from './pages/layout/Footer';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import combineReducers from './redux/reducers'; //Read index.js

//redux
export const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

function App() {
  return (
        <Provider store={store}>
          <Header />
          <Nav />
          <div id="container">
            <Outlet />
          </div>
          <Footer />
        </Provider>
  );
}

export default App;