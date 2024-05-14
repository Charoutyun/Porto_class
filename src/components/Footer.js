import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Row>
        
         
            <ul className="footer-icons">
              {socialLinks.map(({ href, text, icon }) => (
                <li className="social-icons" key={href}> {/* Changed from <p> to <li> */}
                  <a href={href} className="social-icon" target="_blank" rel="noopener noreferrer">
                    {icon} <span>{text}</span> {/* Display text next to the icon */}
                  </a>
                </li>
              ))}
            </ul>
         
      
      </Row>
    </footer>
  );
}

const socialLinks = [
  { href: "https://github.com/Charoutyun", text: "GitHub", icon: <AiFillGithub /> },

  { href: "https://www.linkedin.com/in/haroutyun-chamelian-0364b2289/", text: "LinkedIn", icon: <FaLinkedinIn /> },

];

export default Footer;
