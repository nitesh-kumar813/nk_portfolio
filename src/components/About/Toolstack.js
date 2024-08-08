import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: '#2aaaf2' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: '#ff713e' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker style={{ color: '#2599ee' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub style={{ color: '#' }}/>
      </Col>
    </Row>
  );
}

export default Toolstack;
