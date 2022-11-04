import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Ana Sayfa
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Yetenekler
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projeler
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yasin-sezer-28a445223/">
                <img src={navIcon1} alt=""></img>
              </a>
              <a href="https://github.com/ysnsezer">
                <img src={navIcon2} alt=""></img>
              </a>
              <a href="https://z-p15.www.instagram.com/ysnsezer/">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <a href="cv.pdf" download ="Yasin Sezer Cv">
            <button>         
              <span>CV İndir</span>
            </button> 
            </a>
           
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
