import { imageGrid } from '../../../data/homepage.js'

function InteriorDesign() {
  return (
    <section className="we-help-section" id="about">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              {imageGrid.map((image, index) => (
                <div className={`grid grid-${index + 1}`} key={image}>
                  <img src={image} alt={`Modern home interior detail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
            <p>Make room for a home that feels like you. Our collection brings together practical silhouettes and thoughtful details for everyday living.</p>
            <ul className="list-unstyled custom-list my-4">
              <li>Timeless pieces designed for everyday life</li>
              <li>Honest materials and considered details</li>
              <li>Comfort that feels right at home</li>
              <li>Help choosing the pieces that fit your space</li>
            </ul>
            <p><a href="#shop" className="btn">Explore</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteriorDesign