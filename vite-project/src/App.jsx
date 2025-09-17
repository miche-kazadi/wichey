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
    <>
      <Router className="container">
        <Nav />
        <Routes className="row">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
      <Footer />
    </>

  )
}

export default App
