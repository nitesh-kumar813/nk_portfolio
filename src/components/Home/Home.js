import React from "react";
import myImg from "../../Assets/home_img2.jpg";
import myImg2 from "../../Assets/my-img.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import "./Home.css";
import pdf from "../../Assets/../Assets/Nitesh_Resume 8.2.pdf";


function Home() {
  return (
    <div className="container22">
      {/* First Section: .first-cont22 */}
      <div className="first-cont22">
        <div className="text-section22">
          <h2 className="greeting22">
            Hello There! <span>👋</span>
          </h2>
          <h1 className="name22">
            I’m <span className="highlight22">Nitesh Kumar</span>
          </h1>
          <h3 className="role22">
             <span className="highlight22"><Type /></span>
          </h3>
          <p className="description22">
          Hi, I’m Nitesh Kumar, a MERN Stack Developer crafting dynamic and scalable web solutions.
          </p>
          <div className="buttons22">
            <button className="btn22 download22" onClick={() => window.open(pdf, "_blank")}>
              <Download size={16} /> Download CV
            </button>
          </div>
        </div>
        <motion.div
          className="image-section22"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={myImg2} alt="Nitesh kumar" className="profile-image22" />
        </motion.div>
      </div>
      {/* Second Section: .introduce-myself22 */}
      <div className="introduce-myself22">
        <h1 className="introduce-title22">LET ME <span className="highlight33">INTRODUCE</span> MYSELF</h1>
        <div className="introduce-content22">
          <div className="introduce-text22">
            <p className="introduce-body22">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like{" "}
              <i>
                <b className="highlight33">C++ and Javascript.</b>
              </i>
              <br />
              <br />
              My field of interest includes building new{" "}
              <i>
                <b className="highlight33">Web Technologies and Products.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with{" "}
              <b className="highlight33">Node.js</b> and
              <i>
                <b className="highlight33">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>{" "}
              like{" "}
              <i>
                <b className="highlight33">React.js and Next.js</b>
              </i>
              .
            </p>
          </div>
          <motion.div
            className="avatar-section22"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={myImg} className="avatar-image22" alt="avatar" />
          </motion.div>
        </div>
      </div>
      {/* third section */}
      <div className="social-links-section22">
        <h1 className="social-title22">FIND ME ON</h1>
        <p className="social-description22">
          Feel free to <span className="highlight22">connect</span> with me
        </p>
        <div className="social-icons22">
          <a
            href="https://github.com/nitesh-kumar813"
            target="_blank"
            rel="noreferrer"
            
          >
            <AiFillGithub />
          </a>
          <a
            href="https://x.com/K71411967Nitesh"
            target="_blank"
            rel="noreferrer"
            
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/nitesh-kumar-76a947241/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/niteshkumar__1512/"
            target="_blank"
            rel="noreferrer"
            
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;


