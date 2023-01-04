import { BodyText, Card, Heading } from "@zackyy1/vun-ui";
import Container from "components/Container/Container";
import React from "react";
import Wine from "assets/wine.svg";
import Cat from "assets/cat.svg";
import Avatar from "assets/avatar.svg";
import Showcase from "assets/showcase.svg";
import "./Landing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <Container className="landing">
      <div className="section main-info">
        <div className="text">
          <Card>
            <Heading tag="h1">Hi there!</Heading>
            <Heading tag="h2">
              I'm Martin, a Software Engineer who specializes in front-end
              development.
            </Heading>
            <BodyText>
              That means I'm the one who makes sure your website looks as
              amazing as it operates. Just call me the code wizard of the
              internet. Or the web guru. Or the front-end fairy. I'm flexible.
            </BodyText>
          </Card>
        </div>
        <img className="image" src={Avatar} />
        <FontAwesomeIcon icon={faArrowDown} className={"arrow-icon"} />
      </div>
      <div className="section skills">
        <img className="image" src={Showcase} />
        <div className="text">
          <Card>
            <Heading tag="h4">
              I'm a programming pro with a long list of skills and technologies
              under my belt.{" "}
            </Heading>
            <BodyText>
              Some of the languages I know include JS/TS, Python, Java, C#, and
              even a little bit of Lua.
            </BodyText>
            <Heading tag="h4">As for technologies, I'm familiar with</Heading>
            <BodyText>
              React, NextJS, Angular, Vue, AEM, and jQuery (just to name a few).
            </BodyText>
            <Heading tag="h4">
              But wait, there's more! I also have experience with
            </Heading>
            <BodyText>
              APIs, databases, data structures, accessibility, and even UX/UI
              design.
            </BodyText>
            <BodyText>
              Basically, if it involves code, I've probably dabbled in it at
              some point."
            </BodyText>
          </Card>
        </div>
        <FontAwesomeIcon icon={faArrowDown} className={"arrow-icon"} />
      </div>
      <div className="section hobbies">
        <div className="text">
          <Card>
            <Heading tag="h2">Let's talk hobbies.</Heading>
            <Heading tag="h3">Pick your favorite.</Heading>
            <BodyText>
              When I'm not busy dominating the coding world, you can find me
              tearing up the roads on my motorcycle, shredding on my guitar like
              a rockstar, or getting lost in a virtual reality game.
            </BodyText>
            <BodyText>
              But if you really want to win me over, just bring on the red wine.
              And maybe a pool table. Or a snooker table. I'm not picky, as long
              as there are balls involved.
            </BodyText>
          </Card>
        </div>
        <img className="image " src={Wine} />

        <FontAwesomeIcon icon={faArrowDown} className={"arrow-icon"} />
      </div>
      <div className="section serious">
        <img className="image " src={Cat} />
        <div className="text">
          <Card>
            <Heading tag="h2">Let's talk business now.</Heading>
            <Heading tag="h3">I have a bald cat.</Heading>
            <BodyText>His name is Felix</BodyText>
          </Card>
        </div>
        <FontAwesomeIcon icon={faArrowDown} className={"arrow-icon"} />
      </div>
    </Container>
  );
};

export default Landing;
