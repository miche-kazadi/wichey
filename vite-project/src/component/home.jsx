import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <header className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col- col-md-5 text-center ">
            <img
              src="./wicheykaiz.JPG"
              alt="Profile photo of Michée Kazadi smiling in a professional setting."
              className="img-fluid rounded shadow-sm rounded-circle m-auto"
              width={350}
            />
          </div>

          <div className="col-12 col-md-7">
            <p className="text-muted mb-2">Hello, I am</p>
            <h2 className="fw-bold display-3 mb-2">Michée Kazadi</h2>
            <p className="text-primary fs-4 fw-semibold mb-3">
              Junior React Developer
            </p>
            <p className="text-secondary mb-4">
              I create modern and responsive web interfaces. Passionate, I only
              do what I truly enjoy.
            </p>
            <a
              href="/resume.pdf"
              className="btn btn-primary btn-lg shadow-sm"
              download
            >
              <i className="bi bi-download me-2"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
