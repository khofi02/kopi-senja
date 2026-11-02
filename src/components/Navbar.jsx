import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg coffee-navbar">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    KOPI SENJA<span>.</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">

                    <ul className="navbar-nav ms-auto gap-lg-3">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                    </ul>

                    <Link to="/cart" className="btn coffee-btn ms-lg-4">
                        My Cart
                    </Link>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
