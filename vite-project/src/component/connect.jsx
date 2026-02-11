import "bootstrap/dist/css/bootstrap.min.css";

export default function Connect() {
  return (
    <section className="contact-section py-5">
      <div className="container text-center">
        <h1 className="fw-bold mb-3 contact-title">Contact Me</h1>
        <p className="mb-5 contact-subtitle">
          Feel free to reach out if you have a question, an opportunity,
          or just want to say hello.
        </p>

        <div className="row justify-content-center g-4">
          {/* EMAIL */}
          <div className="col-md-4">
            <div className="contact-card h-100">
              <h5 className="fw-bold">Email</h5>
              <a
                href="mailto:michemubikay31@gmail.com"
                className="contact-link"
              >
                michemubikay31@gmail.com
              </a>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="col-md-4">
            <div className="contact-card h-100">
              <h5 className="fw-bold">LinkedIn</h5>
              <a
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                My LinkedIn Profile
              </a>
            </div>
          </div>

          {/* GITHUB */}
          <div className="col-md-4">
            <div className="contact-card h-100">
              <h5 className="fw-bold">GitHub</h5>
              <a
                href="https://github.com/miche-kazadi"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
