import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import disney from "../../Assets/Projects/disney1.jpeg";
import Movix from "../../Assets/Projects/movix.png";
import healthcare from "../../Assets/Projects/healthcare.png";
import youtube from "../../Assets/Projects/youtube.png";
import video from "../../Assets/Projects/video.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1  style={{ color: "rgb(255, 255, 255)" }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white " }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="HealthCare Management System"
              description="A sleek web app transforming patient-doctor interactions. Easily register, book, and manage appointments. Powered by Next.js and TypeScript, it ensures top-notch patient care, efficient workflows, and seamless healthcare accessibility."
              ghLink="https://github.com/nitesh-kumar813/nik_healthcare"
              demoLink="https://nik-healthcare.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video Conferencing Tool"
              description="An innovative web app for effortless virtual meetings. Built with Next.js and TypeScript, it features secure login, meeting creation, recording, and screen sharing. Designed to enhance remote collaboration, it ensures efficient, interactive, and seamless communication."
              ghLink="https://github.com/nitesh-kumar813/zoom-clone/"
              demoLink="https://zoom-clone-nu-three.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movix}
              isBlog={false}
              title="Movix"
              description="A dynamic web app for discovering and streaming movies. Built with modern web technologies, it offers a user-friendly interface, personalized recommendations, and detailed movie information. Movix aims to enhance the movie-watching experience by making film discovery and streaming seamless and enjoyable."
              ghLink="https://github.com/nitesh-kumar813/Movie-app/"
              demoLink="https://movie-app-cyan-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube"
              description="A sleek, React-powered app for an immersive YouTube experience. Effortlessly search, watch, and explore videos with a user-friendly interface and personalized recommendations. Designed to elevate video streaming, it provides a smooth, engaging way to enjoy and discover content."
              ghLink="https://github.com/nitesh-kumar813/Youtube-website"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disney}
              isBlog={false}
              title="Disney Plus"
              description=" React-based clone of Disney Plus, offering an engaging streaming experience with a sleek interface. It includes features for browsing and watching content, with advanced UI elements to enhance user interaction. Designed to deliver a seamless and immersive viewing experience."
              ghLink="https://github.com/nitesh-kumar813/Disney__Clone"
               
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="RainDown"
              description="A user-friendly web app providing real-time weather updates and forecasts. Built with modern web technologies, it offers accurate weather information, interactive maps, and customizable notifications. Designed to help users plan their day effectively and stay informed about changing weather conditions."
              ghLink="https://github.com/nitesh-kumar813/weather_app"
                           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
