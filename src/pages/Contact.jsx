function Contact() {
    return (
        <main className="contact-page py-5">
            <div className="container">

                {/* HEADER */}
                <div className="text-center mb-5">
                    <p className="hero-label">GET IN TOUCH</p>
                    <h1 className="fw-bold">Contact Us</h1>
                    <p className="text-muted">
                        Kami senang mendengar cerita dan pesan darimu.
                    </p>
                </div>

                <div className="row g-4">

                    {/* INFORMASI KONTAK */}
                    <div className="col-lg-5">

                        <div className="card product-card p-4 h-100">
                            <h4 className="fw-bold mb-4">
                                Let's Talk Coffee!
                            </h4>

                            <div className="mb-4">
                                <h6 className="fw-bold">📍 Address</h6>
                                <p className="text-muted">
                                    Jl. Coffee Street No. 10,
                                    Indonesia
                                </p>
                            </div>

                            <div className="mb-4">
                                <h6 className="fw-bold">📞 Phone</h6>
                                <p className="text-muted">
                                    +62 812-3456-7890
                                </p>
                            </div>

                            <div className="mb-4">
                                <h6 className="fw-bold">✉️ Email</h6>
                                <p className="text-muted">
                                    hello@kopisenja.com
                                </p>
                            </div>

                            <div>
                                <h6 className="fw-bold">🕒 Opening Hours</h6>
                                <p className="text-muted mb-1">
                                    Monday - Friday: 09.00 - 22.00
                                </p>
                                <p className="text-muted">
                                    Saturday - Sunday: 10.00 - 23.00
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* CONTACT FORM */}
                    <div className="col-lg-7">

                        <div className="card product-card p-4">
                            <h4 className="fw-bold mb-4">
                                Send Us a Message
                            </h4>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Terima kasih! Pesan kamu berhasil dikirim.");
                                    e.target.reset();
                                }}
                            >

                                <div className="mb-3">
                                    <label className="form-label">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan nama kamu"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Masukkan email kamu"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Judul pesan"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Tuliskan pesan kamu..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn coffee-btn"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}

export default Contact;
