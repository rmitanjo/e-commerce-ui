import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";

import PageAccueil from './pages/page-accueil/PageAccueil';
import PagePanier from './pages/page-panier/PagePanier';
import PagePaiement from './pages/page-paiement/PagePaiement';

const rootElement = document.getElementById("root");

render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="accueil" element={<PageAccueil />} />
        <Route path="panier" element={<PagePanier />} />
        <Route path="paiement" element={<PagePaiement />} />
        {/* The default route */}
        <Route path="/" element={<PageAccueil />} />
      </Route>
    </Routes>
  </Router>,
  rootElement
);