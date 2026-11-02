import { useState } from 'react';
import { useCart } from '../context/CartContext';

const products = [
    {
        id: 1,
        name: "Caramel Latte",
        category: "Coffee",
        description: "Perpaduan espresso, susu, dan caramel yang lembut.",
        price: 25000,
        stock: 12,
        image: "img/caramel.jpg"
    },
    {
        id: 2,
        name: "Cappuccino",
        category: "Coffee",
        description: "Espresso dengan susu dan foam yang creamy.",
        price: 22000,
        stock: 8,
        image: "img/cappucino.jpg"
    },
    {
        id: 3,
        name: "Iced Americano",
        category: "Coffee",
        description: "Kopi espresso dengan sensasi dingin dan segar.",
        price: 18000,
        stock: 15,
        image: "img/americano.jpg"
    },
    {
        id: 4,
        name: "Cafe Latte",
        category: "Coffee",
        description: "Espresso dan steamed milk dengan rasa lembut.",
        price: 23000,
        stock: 10,
        image: "img/cafe_latte.jpg"
    },
    {
        id: 5,
        name: "Matcha Latte",
        category: "Non-Coffee",
        description: "Matcha pilihan dengan susu segar.",
        price: 25000,
        stock: 7,
        image: "img/matcha latte.jpg"
    },
    {
        id: 6,
        name: "Chocolate",
        category: "Non-Coffee",
        description: "Minuman cokelat dengan rasa manis dan creamy.",
        price: 23000,
        stock: 9,
        image: "img/chocolate.jpg"
    }
];

function Menu() {
    const [activeCategory, setActiveCategory] = useState("All");

    const { addToCart, cartItems } = useCart();

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(
            (product) => product.category === activeCategory
        );

    // Menghitung stok yang tersisa
    const getRemainingStock = (product) => {
        const cartProduct = cartItems.find(
            (item) => item.id === product.id
        );

        const quantityInCart = cartProduct
            ? cartProduct.quantity
            : 0;

        return product.stock - quantityInCart;
    };

    // Menambahkan produk ke keranjang
    const handleAddToCart = (product) => {
        const remainingStock = getRemainingStock(product);

        if (remainingStock <= 0) {
            alert("Maaf, stok produk sudah habis!");
            return;
        }

        addToCart(product);
    };

    return (
        <main className="menu-page py-5">
            <div className="container">

                {/* HEADER MENU */}
                <div className="text-center mb-5">
                    <p className="hero-label">OUR MENU</p>
                    <h1 className="fw-bold">Discover Our Coffee</h1>
                    <p className="text-muted">
                        Temukan minuman favoritmu dari pilihan terbaik KOPI SENJA.
                    </p>
                </div>

                {/* FILTER KATEGORI */}
                <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
                    {["All", "Coffee", "Non-Coffee"].map((category) => (
                        <button
                            key={category}
                            className={`btn ${
                                activeCategory === category
                                    ? "coffee-btn"
                                    : "btn-outline-secondary"
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* PRODUCT CATALOG */}
                <div className="row g-4">
                    {filteredProducts.map((product) => {
                        const remainingStock = getRemainingStock(product);

                        return (
                            <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={product.id}
                            >
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

                                        <h5 className="card-title mt-2 fw-bold">
                                            {product.name}
                                        </h5>

                                        <p className="text-muted small">
                                            {product.description}
                                        </p>

                                        <div className="mb-3">
                                            <strong className="product-price">
                                                Rp{product.price.toLocaleString("id-ID")}
                                            </strong>
                                        </div>

                                        {/* STOK DAN TOMBOL TAMBAH */}
                                        <div className="d-flex justify-content-between align-items-center">

                                            <span className={`small fw-semibold ${
                                                remainingStock > 0
                                                    ? "text-success"
                                                    : "text-danger"
                                            }`}>
                                                {remainingStock > 0
                                                    ? `Stok: ${remainingStock}`
                                                    : "Stok Habis"}
                                            </span>

                                            <button
                                                className="btn coffee-btn rounded-3"
                                                onClick={() => handleAddToCart(product)}
                                                disabled={remainingStock <= 0}
                                                title="Tambah ke keranjang"
                                            >
                                                +
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </main>
    );
}

export default Menu;