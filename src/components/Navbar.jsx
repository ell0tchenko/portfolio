import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link id="logo_container" className="button" to="/">
                <img id="main-logo" src={Logo} alt="Logo" />
            </Link>
            <div className="links">
                <Link className="button" to="/works">WORKS</Link>
                <Link className="button" to="/about">ABOUT ME</Link>
            </div>
        </nav>
    );
}

export default Navbar;