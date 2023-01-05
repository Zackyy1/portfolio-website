import { BodyText, Card, Heading } from "@zackyy1/vun-ui";
import Container from "components/Container/Container";
import React, { useEffect, useRef } from "react";
import Wine from "assets/wine.svg";
import Cat from "assets/cat.svg";
import Avatar from "assets/avatar.svg";
import Showcase from "assets/showcase.svg";
import "./Landing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Header from "components/Header/Header";

const Landing = () => {
  const [activeSection, setActiveSection] = React.useState(0);

  const listWrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const listRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (listWrapperRef.current && contentWrapperRef.current) {
      listRefs.current = Array.from(
        listWrapperRef.current.querySelectorAll(".item")
      );
      contentRefs.current = Array.from(
        contentWrapperRef.current.querySelectorAll(".section")
      );
    }

    console.log(listRefs);
  }, []);

  const setActive = (event) => {
    const index = listRefs.current.indexOf(event.target);
    setActiveSection(index);
  };

  useEffect(() => {
    listRefs.current.forEach((item, i) => {
      if (i === activeSection) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    contentRefs.current.forEach((item, i) => {
      if (i === activeSection) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, [activeSection]);

  // listen for mouse wheel down or up to switch sections
  useEffect(() => {
    let scrollCount = 0;
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        scrollCount++;
        if (scrollCount === 3 && activeSection < listRefs.current.length - 1) {
          setActiveSection(activeSection + 1);
          scrollCount = 0;
        }
      } else {
        scrollCount--;
        if (scrollCount === -3 && activeSection > 0) {
          setActiveSection(activeSection - 1);
          scrollCount = 0;
        }
      }

      if (scrollCount > 3) {
        scrollCount = 3;
      } else if (scrollCount < -3) {
        scrollCount = -3;
      }

      if (scrollCount > 0 && activeSection === listRefs.current.length - 1) {
        scrollCount = 0;
      } else if (scrollCount < 0 && activeSection === 0) {
        scrollCount = 0;
      }

      // console.log(scrollCount);
    };

    let swipeDirection = 0;
    let swipeStart = null;
    let swipeEnd = null;

    const handleTouchStart = (event) => {
      swipeStart = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      swipeEnd = event.touches[0].clientY;
      swipeDirection = swipeEnd - swipeStart;
    };

    const handleTouchEnd = (event) => {
      if (swipeDirection > 0 && activeSection > 0) {
        setActiveSection(activeSection - 1);
      } else if (
        swipeDirection < 0 &&
        activeSection < listRefs.current.length - 1
      ) {
        setActiveSection(activeSection + 1);
      }
      swipeDirection = 0;
      swipeStart = null;
      swipeEnd = null;
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

  return (
    <Container className="landing">
      <Header />
      <div className="wrapper">
        <div className="content-list" ref={listWrapperRef}>
          <div className="item active" onClick={(e) => setActive(e)}>
            <div className="number-label">1</div> Introduction
          </div>
          <div className="item" onClick={(e) => setActive(e)}>
            <div className="number-label">2</div> My skills
          </div>
          <div className="item" onClick={(e) => setActive(e)}>
            <div className="number-label">3</div> Hobbies
          </div>
          <div className="item" onClick={(e) => setActive(e)}>
            <div className="number-label">4</div> Achievements
          </div>
        </div>
        <div className="content" ref={contentWrapperRef}>
          <div className="section active main-info">
            <img className="image" src={Avatar} />
            <Card>
              <Heading tag="h1">Hi there!</Heading>
              <BodyText className="bigger">
                I'm Martin,
                <br /> a Software Engineer who specializes in front-end
                development.
              </BodyText>
              <BodyText>
                That means I'm the one who makes sure your website looks as
                amazing as it operates. Just call me the code wizard of the
                internet. Or the web guru. Or the front-end fairy. I'm flexible.
              </BodyText>
            </Card>
          </div>
          <div className="section skills">
            <img className="image" src={Showcase} />
            <Card>
              <Heading tag="h4">
                I'm a programming pro with a long list of skills and
                technologies under my belt.{" "}
              </Heading>
              <BodyText>
                Some of the languages I know include JS/TS, Python, Java, C#,
                and even a little bit of Lua.
              </BodyText>
              <BodyText className={"bigger"}>
                As for technologies, I'm familiar with
              </BodyText>
              <BodyText>
                React, NextJS, jQuery, Angular, Vue, TailwindCSS, Less/Sass and{" "}
                <abbr title="Adobe Experience Manager">AEM</abbr> (just to name
                a few).
              </BodyText>
              <BodyText>
                As well as APIs, databases, data structures, accessibility, and
                even UX/UI design.
              </BodyText>
            </Card>
          </div>
          <div className="section hobbies">
            <img className="image " src={Wine} />

            <Card>
              <Heading tag="h2">Let's talk hobbies.</Heading>
              <BodyText className={"bigger"}>Pick your favorite.</BodyText>
              <BodyText>
                When I'm not busy dominating the coding world, you can find me
                tearing up the roads on my motorcycle, shredding on my guitar
                like a rockstar, or getting lost in a virtual reality game.
              </BodyText>
              <BodyText>
                But if you really want to win me over, just bring on the red
                wine. And maybe a pool table. Or a snooker table. I'm not picky,
                as long as there are balls involved.
              </BodyText>
            </Card>
          </div>
          <div className="section serious">
            <img className="image " src={Cat} />
            <Card>
              <Heading tag="h2">Let's talk business now.</Heading>
              <BodyText className={"bigger"}>My biggest project is</BodyText>
              <BodyText className="smaller">
                <a target={"_blank"} href="https://spirit-gaming.com">
                  Spirit Gaming
                </a>
              </BodyText>
              <BodyText className={"bigger"}>I have a bald cat.</BodyText>
              <BodyText className="smaller">His name is Felix</BodyText>
              <BodyText className={"bigger"}>Favorite food</BodyText>
              <BodyText className="smaller">Italian, obviously</BodyText>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
