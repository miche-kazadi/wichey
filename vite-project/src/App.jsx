import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home';
import About from './component/about';
import Connect from './component/connect';
import Project from './component/project';
import Footer from './component/footer';
import Nav from './component/nav';



function App() {
  return (
    <Router>
      {/* On place le container ici pour englober tout le contenu */}
      <div className="container">
        <Nav />

        {/* On entoure les Routes d'une div "row" si nécessaire pour le layout */}
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
