import { products } from '../data/homepage.js'

function ProductSection() {
  return (
    <section className="product-section" id="shop">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">Discover considered shapes and enduring materials, made to bring a little more ease to everyday life.</p>
            <p><a href="#popular" className="btn">Explore</a></p>
          </div>
          {products.map((product) => (
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={product.name}>
              <a className="product-item" href="#newsletter" aria-label={`Discover ${product.name}`}>
                <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                <h3 className="product-title">{product.name}</h3>
                <strong className="product-price">{product.price}</strong>
                <span className="icon-cross"><img src="/furni/images/cross.svg" className="img-fluid" alt="" /></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection