import '../../assets/styles/Sidebar.css';
import MyCart from '../../components/MyCart';

export default function Sidebar() {
    return (
        <div className="my-sidebar">
            <p>Sidebar</p>
            <MyCart />
        </div>
    );
}