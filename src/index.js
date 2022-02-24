import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";

import PageAccueil from './pages/page-accueil/PageAccueil';
import PageArticles from './pages/page-articles/PageArticles';

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="accueil" element={<PageAccueil />} />
        <Route path="articles" element={<PageArticles />} />
      </Route>
    </Routes>
  </Router>,
  rootElement
);