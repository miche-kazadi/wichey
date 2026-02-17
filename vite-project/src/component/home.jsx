import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      ref={heroRef}
      className="hero-section py-5 d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">

          {/* IMAGE */}
          <div className="col-md-5 text-center fade-in-left">
            <div className="profile-wrapper mx-auto">
              <img
                src="/wicy.jpg"
                alt="Michée Kazadi"
                className="profile-img"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="col-md-6 fade-in-right">
            <p className="text-accent mb-2">Hello, I am</p>

            <h1 className="hero-title mb-2">
              Michée <span>Kazadi</span>
            </h1>

            <p className="hero-role mb-3">
              Junior Software Engineer
            </p>

            <p className="hero-desc mb-4">
              I build modern and responsive web interfaces, mobile applications
              and meaningful digital experiences. Passionate, creative and
              focused on quality.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a href="/Michee.pdf" download className="btn btn-main">
                Download Resume
              </a>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
