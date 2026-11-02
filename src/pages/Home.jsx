import { Link } from 'react-router-dom';
const products = [
    {
        id: 1,
        name: "Caramel Latte",
        category: "Coffee",
        price: "Rp25.000",
        image: "img/caramel.jpg"
    },
    {
        id: 2,
        name: "Cappuccino",
        category: "Coffee",
        price: "Rp22.000",
        image: "img/cappucino.jpg"
    },
    {
        id: 3,
        name: "Iced Americano",
        category: "Coffee",
        price: "Rp18.000",
        image: "img/americano.jpg"
    },
    {
        id: 4,
        name: "Cafe Latte",
        category: "Coffee",
        price: "Rp23.000",
        image: "img/cafe_latte.jpg"
    }
];

function Home() {
    return (
        <div>
            {/* HERO SECTION */}
            <section className="hero-section" id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <p className="hero-label">WELCOME TO KOPI SENJA</p>

                            <h1>
                                Good Coffee,
                                <br />
                                <span>Good Mood.</span>
                            </h1>

                            <p className="hero-description">
                                Nikmati setiap momen dengan secangkir kopi
                                pilihan yang dibuat dengan penuh cinta.
                            </p>

                            <Link to="/menu" className="btn coffee-btn">
                                Explore Our Menu
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <img
                                src="img/home.jpg"
                                alt="Coffee Shop"
                                className="hero-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT CATALOG */}
            <section className="menu-section" id="menu">
                <div className="container">
                    <div className="section-heading text-center">
                        <p>OUR COLLECTION</p>
                        <h2>Favorite Coffee</h2>
                        <span>Temukan kopi favoritmu hari ini.</span>
                    </div>

                    <div className="row g-4">
                        {products.map((product) => (
                            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                                <div className="card product-card h-100">
                                    <img
                                        src={product.image}
                                        className="card-img-top product-image"
                                        alt={product.name}
                                    />

                                    <div className="card-body">
                                        <small className="product-category">
                                            {product.category}
                                        </small>

                                        <h5 className="card-title mt-2">
                                            {product.name}
                                        </h5>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <strong className="product-price">
                                                {product.price}
                                            </strong>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer id="contact" className="coffee-footer">
                <div className="container text-center">
                    <h4>KOPI SENJA.</h4>
                    <p>Good Coffee, Good Mood.</p>
                    <small>© 2026 KOPI SENJA. All Rights Reserved.</small>
                </div>
            </footer>
        </div>
    );
}

export default Home;
