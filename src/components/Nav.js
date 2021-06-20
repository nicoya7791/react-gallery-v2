import { NavLink } from "react-router-dom";

// Displas nav component.
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/search/cars">Cars</NavLink></li>
                <li><NavLink to="/search/birds">Birds</NavLink></li>
                <li><NavLink to="/search/house">House</NavLink></li>
            </ul>
        </nav>

    );
}

export default Nav;