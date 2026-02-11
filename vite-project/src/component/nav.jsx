import { NavLink } from "react-router-dom";

export default function Nav() {
  const closeMenu = () => {
    const menu = document.getElementById("navbarNav");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold fs-4">
          my<span className="text-primary">portfolio</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4 text-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                About me
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/connect"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
