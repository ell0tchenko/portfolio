import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link id="main-logo" className="button" to="/">Elina Otchenko</Link>
            <div className="links">
                <Link className="button" to="/works">works</Link>
                <Link className="button" to="/about">about</Link>
            </div>
        </nav>
    );
}

export default Navbar;