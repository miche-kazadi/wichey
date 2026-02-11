export default function About() {
  return (
    <section className="about-section py-5" style={{ backgroundColor: '#050714', color: 'white' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="mb-5 fw-bold mt-3" style={{ fontSize: '3rem' }}>About Me</h1>
            <p className="lead opacity-75" style={{ lineHeight: '1.8' }}>
              Hello ! <br /> My name is <span style={{ color: '#4f6cf6', fontWeight: 'bold' }}>Michée Kazadi</span> and I'm a
              <span style={{ color: '#4f6cf6' }}> Software Engineer</span> passionate about creating modern and intuitive user experiences.
              I recently began my programming journey in 2023 and have gained a solid understanding of
              <span className="fw-semibold"> React, React Native, Vue, JavaScript, Python Django and Node.js</span>.
            </p>
            <div className="mt-4">
              <p className="opacity-50">
                Outside of coding, I enjoy playing chess, soccer, and enjoying good food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}