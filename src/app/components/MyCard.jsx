import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../assets/styles/components/MyCard.css';

import { addToCart } from '../redux/actions/cart.action';

export default function MyCard(props) {
    const navigate = useNavigate();

    const {id, ref, image1, libelle, pu, description} = props.data;
    const img = require('../' + image1);

    const dispatch = useDispatch();
    const addCartAction = () => {
      //Adding article with some quantities in the cart
      dispatch(addToCart(
        { 
          id: id,
          ref: ref,
          qty: 1,
          pu: pu,
          libelle: libelle,
          desc: description,
        }
      ));
    }

    const infoAction = () => {
      //Ouvrir fiche article
      navigate("/app/page-article/" + id);
    }

    return (
      <div className="my-card">
        <img src={img} alt="card_picture" />
        <h1>{ref}</h1>
        <p className="price"><b>MGA {pu}</b></p>
        <p>{libelle}</p>
        <p>
          <button className="button-add" onClick={addCartAction}>Ajouter</button>
          <button className="button-info" onClick={infoAction}>Info</button>
        </p>
      </div>
    );
}