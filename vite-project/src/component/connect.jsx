import 'bootstrap/dist/css/bootstrap.min.css';
export default function Connect() {
  return (
  <section className="contact-section py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contact</h2>
        <p className="mb-5">
          Feel free to reach out if you have a question, an opportunity, or just want to say hello!
        </p>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card bg-light text-dark shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Email</h5>
                <p className="card-text">
                  <a href="mailto:michemubikay31@gmail.com" className="text-decoration-none text-primary">
                    michemubikay31@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card bg-light text-dark shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">LinkedIn</h5>
                <p className="card-text">
                  <a
                    href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    My LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card bg-light text-dark shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">GitHub</h5>
                <p className="card-text">
                  <a
                    href="https://github.com/miche-kazadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
