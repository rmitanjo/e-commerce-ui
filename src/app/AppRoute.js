import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";

import PageAccueil from './pages/page-accueil/PageAccueil';
import PagePanier from './pages/page-panier/PagePanier';
import PagePaiement from './pages/page-paiement/PagePaiement';
import PageConfirmationCommande from './pages/page-confirmation-commande/PageConfirmationCommande';

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="accueil" element={<PageAccueil />} />
                <Route path="accueil/:idCategorie" element={<PageAccueil />} />
                <Route path="panier" element={<PagePanier />} />
                <Route path="paiement" element={<PagePaiement />} />
                <Route path="confirmation-commande/:idCommande" element={<PageConfirmationCommande />} />
                {/* The default route */}
                <Route path="/" element={<PageAccueil />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;