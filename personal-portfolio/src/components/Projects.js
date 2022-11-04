import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import "animate.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects= [
            {
                title: "Personel Takip",
                description: "Form Uygulaması, C#",
                imgUrl: projImg1,
            },
            {
                title: "Kişisel Blog - Admin Giriş",
                description: "ASP.NET MVC",
                imgUrl: projImg2,
            },
            {
                title: "Kişisel Blog - Admin Panel",
                description: "ASP.NET MVC",
                imgUrl: projImg3,
            },
            {
                title: "Kişisel Blog - Ana Sayfa",
                description: "ASP.NET MVC",
                imgUrl: projImg4,
            },
            {
                title: "Kişisel Portfolyo",
                description: "HTML, CSS, REACT.JS",
                imgUrl: projImg5,
            },
            {
                title: "Kişisel Portfolyo",
                description: "HTML, CSS, REACT.JS",
                imgUrl: projImg6,
            },
        ];

    return(
 <section className="project" id="project">
    <Container>
        <Row>
            <Col>        
            <h2>Projelerim</h2>
            <p>Personel takip uygulaması, Seyahat tatil blog sitesi, Kişisel web sitesi...</p>
            <div/>  
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="tabs" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
      <Nav.Item>
        <Nav.Link eventKey="first">Bölüm 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Bölüm 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">
          Bölüm 3
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="first">
          <Row>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard
                        key={index}
                        {...project}
                        />
                    )
                })
            }
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">Henüz bu kadar fazla projeye sahip değilim...</Tab.Pane>
        <Tab.Pane eventKey="third">Henüz bu kadar fazla projeye sahip değilim...</Tab.Pane>
    </Tab.Content>
    </Tab.Container>
            </Col>
        </Row>
    </Container>
    
 </section>
    )
}