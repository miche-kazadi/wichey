import 'bootstrap/dist/css/bootstrap.min.css';
export default function project(){
    return(
    <section className="project-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">My Projects</h2>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <h3 className="card-title text-primary">TodoList</h3>
                <p className="card-text text-muted">
                  With busy schedules, we often lose track of essential weekly tasks.  
                  <span className="fw-semibold text-dark"> TodoList </span> helps keep things organized and stress-free.
                </p>
                <p className="small text-secondary">
                  <strong>Tech stack:</strong> React, CSS, JavaScript
                </p>
                <a 
                  href="https://github.com/miche-kazadi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-primary btn-sm"
                >
                  View Code on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}