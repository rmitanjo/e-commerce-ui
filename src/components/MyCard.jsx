import { useDispatch } from 'react-redux';
import '../assets/styles/components/MyCard.css';

import { addToCart } from '../redux/actions/cart.action';

export default function MyCard(props) {
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

    return (
      <div className="my-card">
        <img src={img} alt="card_picture" />
        <h1>{libelle} #{id}</h1>
        <p className="price"><b>MGA {pu}</b></p>
        <p>{description}</p>
        <p>
          <button onClick={addCartAction}>Ajouter</button>
        </p>
      </div>
    );
}