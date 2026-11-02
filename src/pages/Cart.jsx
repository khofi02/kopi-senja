import { useCart } from '../context/CartContext';

function Cart() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItem
    } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <main className="container-fluid bg-light min-vh-100 py-5">

            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <p className="text-uppercase fw-bold text-secondary mb-2">
                        Your Order
                    </p>

                    <h1 className="fw-bold">
                        My Shopping Cart
                    </h1>

                    <p className="text-muted">
                        Periksa kembali pesanan kopi favoritmu.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">

                    {/* Kolom Daftar Produk */}
                    <div className="col-12 col-lg-8">

                        {cartItems.length === 0 ? (

                            <div className="card border-0 shadow-sm p-5 text-center">
                                <h4>Keranjang masih kosong ☕</h4>
                                <p className="text-muted mb-0">
                                    Yuk, pilih kopi favoritmu!
                                </p>
                            </div>

                        ) : (

                            <div className="d-flex flex-column gap-3">

                                {cartItems.map(item => (

                                    <div
                                        className="card border-0 shadow-sm"
                                        key={item.id}
                                    >
                                        <div className="card-body p-3">

                                            <div className="row align-items-center g-3">

                                                {/* Gambar */}
                                                <div className="col-4 col-md-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="img-fluid rounded-3 w-100"
                                                        style={{
                                                            height: '130px',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </div>

                                                {/* Informasi Produk */}
                                                <div className="col-8 col-md-9">

                                                    <div className="d-flex justify-content-between align-items-start">

                                                        <div>
                                                            <h5 className="fw-bold mb-2">
                                                                {item.name}
                                                            </h5>

                                                            <h6 className="fw-bold mb-3" style={{ color: '#68452f' }}>
                                                                Rp{item.price.toLocaleString('id-ID')}
                                                            </h6>
                                                        </div>

                                                        <button
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => removeItem(item.id)}
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>

                                                    </div>

                                                    {/* Kontrol Jumlah */}
                                                    <div className="d-flex align-items-center gap-3">

                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            onClick={() => decreaseQuantity(item.id)}
                                                        >
                                                            -
                                                        </button>

                                                        <span className="fw-bold">
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            className="btn btn-sm text-white"
                                                            style={{ backgroundColor: '#68452f' }}
                                                            onClick={() => increaseQuantity(item.id)}
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                    {/* Kolom Order Summary */}
                    <div className="col-12 col-lg-4">

                        <div className="card border-0 shadow-sm">

                            <div className="card-body p-4">

                                <h4 className="fw-bold mb-4">
                                    Order Summary
                                </h4>

                                <div className="d-flex justify-content-between mb-3">
                                    <span className="text-muted">
                                        Total Items
                                    </span>

                                    <strong>{totalItems}</strong>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span className="text-muted">
                                        Subtotal
                                    </span>

                                    <strong>
                                        Rp{total.toLocaleString('id-ID')}
                                    </strong>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between mb-4">
                                    <strong>Total Payment</strong>

                                    <strong style={{ color: '#68452f' }}>
                                        Rp{total.toLocaleString('id-ID')}
                                    </strong>
                                </div>

                                <button
                                    className="btn w-100 text-white py-2 fw-bold"
                                    style={{ backgroundColor: '#68452f' }}
                                    disabled={cartItems.length === 0}
                                    onClick={() => alert('Terima kasih! Pesanan berhasil dibuat.')}
                                >
                                    Checkout Now
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Cart;