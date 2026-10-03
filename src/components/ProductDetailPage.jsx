import { useState } from 'react'
import { shopProducts } from '../data/homepage.js'

function ProductDetailPage({ productId }) {
  const product = shopProducts.find((item) => item.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name ?? '')
  const [cartMessage, setCartMessage] = useState('')

  if (!product) {
    return (
      <section className="hero product-not-found">
        <div className="container">
          <h1>We couldn't find that piece.</h1>
          <p><a className="btn btn-secondary" href="/shop">Return to the shop</a></p>
        </div>
      </section>
    )
  }

  function addToCart() {
    setCartMessage(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to your bag.`)
  }

  return (
    <>
      <section className="product-detail-section">
        <div className="container">
          <nav className="product-breadcrumb" aria-label="Breadcrumb">
            <a href="/#home">Home</a><span aria-hidden="true">/</span>
            <a href="/shop">Shop</a><span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="product-detail-visual">
                <span className="product-detail-number">FURNI OBJECT No. {String(product.id).padStart(2, '0')}</span>
                <img src={product.image} alt={product.name} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product-detail-copy">
                <p className="product-detail-eyebrow">Made for everyday living</p>
                <h1>{product.name}</h1>
                <p className="product-detail-price">{product.price}</p>
                <p className="product-detail-description">{product.description}</p>

                <div className="product-detail-spec">
                  <span>Material</span>
                  <strong>{product.material}</strong>
                </div>

                <fieldset className="product-color-picker">
                  <legend>Finish <span>{selectedColor}</span></legend>
                  <div className="product-color-options">
                    {product.colors.map((color) => (
                      <button
                        className={selectedColor === color.name ? 'selected' : ''}
                        type="button"
                        key={color.name}
                        style={{ '--swatch-color': color.value }}
                        aria-label={`${color.name} finish`}
                        aria-pressed={selectedColor === color.name}
                        onClick={() => setSelectedColor(color.name)}
                      />
                    ))}
                  </div>
                </fieldset>

                <div className="product-purchase-row">
                  <div className="product-quantity" aria-label="Quantity">
                    <button type="button" aria-label="Decrease quantity" disabled={quantity === 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
                    <output aria-live="polite">{quantity}</output>
                    <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}>+</button>
                  </div>
                  <button className="btn btn-primary product-add-button" type="button" onClick={addToCart}>
                    <span className="fa fa-bag-shopping" aria-hidden="true" />
                    <span>Add to bag</span>
                  </button>
                </div>
                <p className="product-cart-message" role="status" aria-live="polite">{cartMessage}</p>
                <p className="product-delivery-note">Thoughtfully chosen materials. Easy, everyday care: {product.care}</p>
                <a className="product-back-link" href="/shop"><span aria-hidden="true">←</span> Back to all furniture</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-notes">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4"><h2>Thoughtful form</h2><p>Considered proportions bring comfort and character to your everyday spaces.</p></div>
            <div className="col-md-4"><h2>Made to live with</h2><p>Practical finishes and straightforward care help keep this piece feeling at home.</p></div>
            <div className="col-md-4"><h2>Here to help</h2><p>Questions about this piece? <a href="/#contact">Get in touch with our team.</a></p></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetailPage