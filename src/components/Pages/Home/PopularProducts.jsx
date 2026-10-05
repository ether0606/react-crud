import { products } from '../../../data/homepage.js'

function PopularProducts() {
  return (
    <section className="popular-product" id="popular">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={product.name}>
              <article className="product-item-sm d-flex">
                <div className="thumbnail"><img src={product.image} alt="" className="img-fluid" /></div>
                <div className="pt-3">
                  <h3>{product.name}</h3>
                  <p>A considered design with lasting comfort, made to find its place in your home.</p>
                  <p><a href="#shop">Shop the collection</a></p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts