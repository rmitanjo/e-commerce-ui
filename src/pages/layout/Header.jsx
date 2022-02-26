import '../../assets/styles/Header.css';

import imgLogo from '../../assets/images/logo.png';

export default function Header() {
    return (
        <div className="my-header">
            <img src={imgLogo} alt="logo" />
            <h1>My-store</h1>
        </div>
    );
  }