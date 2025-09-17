import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="mb-5 text-dark fw-bold">About Me</h1>
            <p className="lead text-muted">
              Hello! My name is <span className="fw-semibold-10">Michée Kazadi</span> and I'm a 
              web developer passionate about creating modern and intuitive user experiences.
              I recently began my programming journey and have gained a solid understanding of 
              <span className="fw-semibold"> React, JavaScript, HTML, and CSS</span>.
            </p>

            <p className="text-muted">
              I enjoy solving problems and learning new technologies. 
              Every new project is an opportunity to expand my skills and create 
              something both useful and beautiful.
            </p>

            <p className="text-muted">
              Outside of coding, I enjoy <span className="fw-semibold">playing and watching soccer</span>, 
              <span className="fw-semibold"> playing chess</span>, and of course, 
              <span className="fw-semibold"> enjoying good food</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
