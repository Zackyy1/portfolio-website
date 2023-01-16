import React, { lazy, Suspense } from "react";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Heading } from "@zackyy1/vun-ui";
import "./Contact.scss";

const Container = lazy(() => import("components/Container/Container"));
const Header = lazy(() => import("components/Header/Header"));

const Contact = () => {
  return (
    <Suspense fallback={null}>
      <Container className="contact">
        <Header />
        <div className="content">
          <Heading tag="h1">Send me your compliments</Heading>
          <Button>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/martin-goncharov-5666a3199/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Button>
          <Button>
            <a
              target={"_blank"}
              href="https://www.facebook.com/profile.php?id=100009154274941"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Button>
          <Button>
            <a target={"_blank"} href="https://github.com/Zackyy1">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Button>
          <Heading tag="h2">
            Or contact me using the formal (boring) way
          </Heading>
          <Button>
            <a href="mailto:gontsarov.martin@gmail.com">
              gontsarov.martin@gmail.com
            </a>
          </Button>
        </div>
      </Container>
    </Suspense>
  );
};

export default Contact;
