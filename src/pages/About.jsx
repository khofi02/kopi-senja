
function About() {
    return (
        <main className="about-page">

            {/* ABOUT HERO */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <p className="hero-label">OUR STORY</p>

                            <h1 className="fw-bold display-5">
                                More Than Just
                                <br />
                                <span> A Cup of Coffee.</span>
                            </h1>

                            <p className="text-muted mt-4">
                                KOPI SENJA hadir sebagai tempat untuk
                                menikmati kopi berkualitas, berbagi cerita,
                                dan menciptakan momen berharga.
                            </p>

                            <p className="text-muted">
                                Kami percaya bahwa setiap cangkir kopi
                                memiliki cerita. Dengan biji kopi pilihan
                                dan racikan terbaik, kami ingin memberikan
                                pengalaman berbeda di setiap tegukan.
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900"
                                alt="Suasana Coffee Shop"
                                className="img-fluid rounded-4 shadow"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className="py-5">
                <div className="container">

                    <div className="text-center mb-5">
                        <p className="hero-label">WHY KOPI SENJA</p>
                        <h2 className="fw-bold">What Makes Us Special?</h2>
                        <p className="text-muted">
                            Alasan untuk menikmati setiap momen bersama kami.
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card value-card h-100 p-4 text-center">
                                <h2>☕</h2>
                                <h5 className="fw-bold">Quality Coffee</h5>
                                <p className="text-muted">
                                    Menggunakan bahan pilihan untuk
                                    menghasilkan kopi berkualitas.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card value-card h-100 p-4 text-center">
                                <h2>🤎</h2>
                                <h5 className="fw-bold">Cozy Atmosphere</h5>
                                <p className="text-muted">
                                    Tempat nyaman untuk bersantai,
                                    bekerja, dan berbagi cerita.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card value-card h-100 p-4 text-center">
                                <h2>✨</h2>
                                <h5 className="fw-bold">Made With Love</h5>
                                <p className="text-muted">
                                    Setiap minuman dibuat dengan
                                    perhatian dan sepenuh hati.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="fw-bold">Good Coffee, Good Mood.</h2>
                    <p className="text-muted">
                        Temukan cerita dan momen terbaikmu bersama KOPI SENJA.
                    </p>
                </div>
            </section>

        </main>
    );
}

export default About;
