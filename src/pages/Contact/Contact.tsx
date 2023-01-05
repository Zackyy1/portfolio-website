import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BodyText, Button, Heading } from "@zackyy1/vun-ui";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <Container className="contact">
      <Header />
      <div className="content">
        <Heading tag="h1">Send me your compliments</Heading>
        <a target={'_blank'} href="https://www.linkedin.com/in/martin-goncharov-5666a3199/"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a target={'_blank'} href="https://www.facebook.com/profile.php?id=100009154274941"><FontAwesomeIcon icon={faFacebook}/></a>
        <a target={'_blank'} href="https://github.com/Zackyy1"><FontAwesomeIcon icon={faGithub}/></a>
        <Heading tag="h2">Or contact me using the formal (boring) way</Heading>
        <Button><a href="mailto:gontsarov.martin@gmail.com">gontsarov.martin@gmail.com</a></Button>
      
      </div>
    </Container>
  );
};

export default Contact;