import '../assets/styles/components/MyCard.css';
import imgCard from '../assets/images/jeans3.jpg';

export default function MyCard() {
    return (
      <div className="my-card">
        <img src={imgCard} alt="Denim Jeans" />
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p>
      </div>
    );
}