import { journalPosts } from '../../../data/homepage.js'

function Journal() {
  return (
    <section className="blog-section" id="journal">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6"><h2 className="section-title">Recent Journal</h2></div>
          <div className="col-md-6 text-start text-md-end"><a href="#journal" className="more">View All Posts</a></div>
        </div>
        <div className="row">
          {journalPosts.map((post) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0" key={post.title}>
              <article className="post-entry">
                <a href="#journal" className="post-thumbnail"><img src={post.image} alt="" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#journal">{post.title}</a></h3>
                  <div className="meta"><span>by <a href="#journal">{post.author}</a></span><span> on <a href="#journal">{post.date}</a></span></div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journal