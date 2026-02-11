import 'bootstrap/dist/css/bootstrap.min.css';

export default function Project() {
  const myProjects = [
    {
      title: "TodoList",
      description: "With busy schedules, we often lose track of essential weekly tasks. TodoList helps keep things organized and stress-free.",
      stack: "React, Bootstrap",
      link: "https://github.com/miche-kazadi"
    },
    {
      title: "Chef-Claude",
      description: "A restaurant project with a modern user experience. It extends your way to govern like a big Chef-Claude, helping you get a better experience.",
      stack: "React, Bootstrap",
      link: "https://github.com/miche-kazadi"
    },
    {
      title: "Tenzens",
      description: "We like gaming when there's nothing to do. Like me playing chess every day, Tenzens helps you remove stress and relax.",
      stack: "React, Bootstrap",
      link: "https://github.com/miche-kazadi"
    }
  ];

  return (
    <section className="project-section py-5" style={{ backgroundColor: '#050714' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-white mt-4" style={{ fontSize: '2.5rem' }}> My Projects </h2>
        <div className="row justify-content-center g-4">

          {myProjects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card h-100 border-0 shadow-lg divOf"
                style={{
                  backgroundColor: '#0a1128',
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="card-title fw-bold" style={{ color: '#4f6cf6' }}>{project.title}</h3>
                  <p className="card-text text-white opacity-75 flex-grow-1">
                    {project.description}
                  </p>
                  <div className="mt-3">
                    <p className="small mb-3" style={{ color: '#4f6cf6' }}>
                      <strong>Tech stack:</strong> {project.stack}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-100 fw-bold shadow-sm"
                      style={{
                        backgroundColor: '#4f6cf6',
                        color: 'white',
                        borderRadius: '8px',
                        border: 'none'
                      }}
                    >
                      View Code on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}