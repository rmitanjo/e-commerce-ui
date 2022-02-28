import {
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";

import PageAccueil from './pages/page-accueil/PageAccueil';
import PagePanier from './pages/page-panier/PagePanier';
import PagePaiement from './pages/page-paiement/PagePaiement';
import PageConfirmationCommande from './pages/page-confirmation-commande/PageConfirmationCommande';
import PageArticle from './pages/page-article/PageArticle';

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="accueil" element={<PageAccueil />} />
                <Route path="accueil/:idCategorie" element={<PageAccueil />} />
                <Route path="panier" element={<PagePanier />} />
                <Route path="paiement" element={<PagePaiement />} />
                <Route path="confirmation-commande/:idCommande" element={<PageConfirmationCommande />} />
                <Route path="page-article/:idArticle" element={<PageArticle />} />
                {/* The default route */}
                <Route path="/" element={<PageAccueil />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;