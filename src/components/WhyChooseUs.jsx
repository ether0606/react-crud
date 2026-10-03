import { features } from '../data/homepage.js'

function WhyChooseUs() {
  return (
    <section className="why-choose-section" id="services">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>Good design should make daily life feel easier. From the first click to the final detail, we make finding your place simple.</p>
            <div className="row my-5">
              {features.map((feature) => (
                <div className="col-6 col-md-6" key={feature.title}>
                  <div className="feature">
                    <div className="icon"><img src={feature.image} alt="" className="img-fluid" /></div>
                    <h3>{feature.title}</h3>
                    <p>Carefully considered service, so you can focus on making yourself at home.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img-wrap">
              <img src="/furni/images/why-choose-us-img.jpg" alt="A warm, light-filled living room" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs