import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link id="main-logo" to="/">Elina Otchenko</Link>
            <div className="links">
                <Link to="/works">works</Link>
                <Link to="/about">about</Link>
            </div>
        </nav>
    );
}

export default Navbar;