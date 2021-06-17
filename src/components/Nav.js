import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cars">Cars</NavLink></li>
                <li><NavLink to="/birds">Birds</NavLink></li>
                <li><NavLink to="/house">House</NavLink></li>
            </ul>
        </nav>

    );
}

export default Nav;