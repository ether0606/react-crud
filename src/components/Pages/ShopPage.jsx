import { shopProducts } from '../../data/homepage.js'
import { Link } from 'react-router'

function ShopPage() {
  return (
    <>
      <section className="hero shop-hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt"><h1>Shop</h1></div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section before-footer-section shop-catalog" aria-label="Furniture collection">
        <div className="container">
          <div className="row">
            {shopProducts.map((product) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
                <article className="product-item">
                  <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                  <h3 className="product-title">{product.name}</h3>
                  <strong className="product-price">{product.price}</strong>
                  <Link className="icon-cross" to={`/product/${product.id}`} aria-label={`View details for ${product.name}`}>
                    <img src="/furni/images/cross.svg" className="img-fluid" alt="" />
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage