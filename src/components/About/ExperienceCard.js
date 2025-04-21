import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I worked as a <span className="purple">Front-End Developer Intern</span> at <span className="purple">TechnBoost</span>.
            <br /><br />
            During this time, I was involved in both front-end and back-end development across multiple projects using technologies like <span className="purple">HTML</span>, <span className="purple">CSS</span>, <span className="purple">JavaScript</span>, <span className="purple">Next.js</span>, <span className="purple">Node.js</span>, and <span className="purple">MongoDB</span>.
            <br /><br />
            Key Responsibilities:
            <ul className="about-activity">
              <li>• Collaborated with teams to develop responsive UIs</li>
              <li>• Wrote clean and efficient code with a focus on performance</li>
              <li>• Debugged and tested applications for real-world use cases</li>
              <li>• Stayed updated with frontend trends and best practices</li>
            </ul>
          </p>

          <p style={{ color: "rgb(81, 84, 237)" }}>
            "Building real-world apps that make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">NiteshK.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;

