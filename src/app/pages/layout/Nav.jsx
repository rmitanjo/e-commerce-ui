import { NavLink } from 'react-router-dom';
import '../../assets/styles/Nav.css';

export default function Nav() {
    return (
        <div className="my-nav">
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/app/accueil">Accueil</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/app/panier">Panier</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/app/paiement">Paiement</NavLink></li>
            </ul>
        </div>
    );
}