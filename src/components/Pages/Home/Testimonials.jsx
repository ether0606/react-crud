import { useState } from 'react'
import { testimonials } from '../../../data/homepage.js'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % testimonials.length)
  }

  return (
    <section className="testimonial-section" aria-label="Customer testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <div id="testimonial-nav">
                <button className="prev" type="button" onClick={showPrevious} aria-label="Previous testimonial">
                  <span className="fa fa-chevron-left" aria-hidden="true" />
                </button>
                <button className="next" type="button" onClick={showNext} aria-label="Next testimonial">
                  <span className="fa fa-chevron-right" aria-hidden="true" />
                </button>
              </div>
              <div className="testimonial-slider" aria-live="polite">
                <div className="item" key={testimonial.name}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <figure className="testimonial-block text-center">
                        <blockquote className="mb-5"><p>“{testimonial.quote}”</p></blockquote>
                        <figcaption className="author-info">
                          <div className="author-pic"><img src={testimonial.image} alt="" className="img-fluid" /></div>
                          <h3 className="font-weight-bold">{testimonial.name}</h3>
                          <span className="position d-block mb-3">{testimonial.role}</span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-dots" aria-label="Choose a testimonial">
                {testimonials.map((item, index) => (
                  <button
                    className={index === activeIndex ? 'active' : ''}
                    type="button"
                    key={item.name}
                    aria-label={`Show testimonial from ${item.name}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials