import { NavLink } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/faq">FAQ</NavLink>
                </li>
            </ul>
        </nav>
    );
}
