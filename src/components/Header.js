import LOGO_UL from "../utils/constants";
const Header = () =>
(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_UL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header;