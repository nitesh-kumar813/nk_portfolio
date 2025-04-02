import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hey there! My name is <span className="purple"> Nitesh Kumar. </span>
            <br /><br />
            I am a <span className="purple">full stack developer</span> with a passion for building scalable and user-friendly web applications. I love to create elegant solutions to complex problems.
            <br /><br />
            Self-driven, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.
            <br />
            <br />
            Beyond my work in technology, I have a deep love for cricket. Whether it is playing on the field or catching a game with a <span className="purple">fresh cup of coffee!</span> cricket brings me a lot of joy.
          </p>
          

          <p style={{ color: "rgb(81, 84, 237)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">NiteshK.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
