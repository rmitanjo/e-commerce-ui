import '../assets/styles/components/MyCard.css';
import monImage from '../assets/images/jeans3.jpg';

export default function MyCard(props) {
    const {image1, libelle, pu, description} = props.data;
    const img = require('../' + image1);

    return (
      <div className="my-card">
        <img src={img} alt="card_picture" />
        <h1>{libelle}</h1>
        <p className="price"><b>MGA {pu}</b></p>
        <p>{description}</p>
        <p><button>Ajouter</button></p>
      </div>
    );
}