import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  
} from "react-icons/di";
import {
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

import { BsFiletypeSql } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",  }}>
      <Col xs={4} md={2} className="tech-icons ">
        <CgCPlusPlus style={{ color: '#1E90FF' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: 'yellow' }} />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: 'green' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: '#08dafa' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: '#5e993c' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <DiGit style={{ color: 'red' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{ color: 'yellow' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux  style={{ color: '#7a50be' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{ color: '#377cc8' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
    </Row>
    
  );
}

export default Techstack;
