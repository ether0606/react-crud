function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
              <p className="mb-4">Thoughtful pieces, honest materials, and lasting comfort for the spaces you call home.</p>
              <p>
                <a href="#shop" className="btn btn-secondary me-2">Shop Now</a>
                <a href="#about" className="btn btn-white-outline">Explore</a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="/furni/images/couch.png" className="img-fluid" alt="Sculptural green lounge chair" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero