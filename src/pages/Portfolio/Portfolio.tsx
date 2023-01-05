import { BodyText, Button, Card, Heading } from "@zackyy1/vun-ui";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import React, { useEffect, useRef } from "react";
import "./Portfolio.scss";
import SpiritGaming from "assets/spiritgaming.png";
import minesweeper from "assets/minesweeper.png";
import garden from "assets/garden.png";
import tracker from "assets/tracker.png";
import relivico from "assets/relivico.png";
import wana from "assets/wana.png";
import maze from "assets/maze.png";
import spyfall from "assets/spyfall.png";
import neu from "assets/neu.png";

const projects = {
  "Spirit Gaming": {
    name: "Spirit Gaming",
    status: "Live",
    description:
      "A functional website for a gaming community. Mainly focused on Pavlov VR, competitive shooter in virtual reality. Project involves connectivity with the game server and communication between website and backend services that reflect on the gameplay in real time.",
    technologies: [
      "React",
      "scss",
      "Heroku",
      "Python",
      "express",
      "node",
      "Firebase",
      "OAuth",
      "APIs",
    ],
    image: SpiritGaming,
    link: "https://spirit-gaming.com",
  },
  Relivico: {
    name: "Relivico",
    status: "Live / In Development",
    description:
      "Huge and ambitious startup project. It's a web application for businesses of all sizes to manage their inventory, employees and workflow. It's a full-stack project, with a focus on the frontend. It's a SPA, with a lot of features, such as: inventory management, employee management, workflow management, and more. It's a project that I'm working on in my free time, and I'm planning to make it a full-time project in the future.",
    technologies: [
      "NextJS",
      "Node Backend",
      "Prisma",
      "MongoDB",
      "MySQL",
      "Docker",
      "TailwindCSS",
      "APIs",
    ],
    image: relivico,
    link: "https://relivi.co",
  },
  Spyfall: {
    name: "Spyfall",
    status: "Inactive",
    description:
      "A web-remake of a popular board game. It's an offline multiplayer game, where players are trying to guess the location, while one of them is a spy. Due to Heroku's new free usage policy, the project is currently inactive. I'm planning to migrate it to a different hosting provider in the future and refactor it to a mobile application.",
    technologies: ["React", "Firebase", "Socket.io"],
    image: spyfall,
    link: null,
  },
  "Vun UI": {
    name: "Vun UI",
    status: "Live / In Development",
    description:
      "A React component library to quickly compose apps and websites in a similar style using Neumorphic design. It's the one you're enjoying right now.",
    technologies: ["React", "Scss", "Storybook (TBD)", "npm package"],
    image: neu,
    link: "https://vun-ui.web.app/",
  },
  Minesweeper: {
    name: "Minesweeper",
    status: "Passive",
    description: "Replica of famous Minesweeper. Small, but fun project.",
    technologies: ["jQuery"],
    image: minesweeper,
    link: "https://minesweeper-c83f8.web.app/",
  },
  "Digital Garden": {
    name: "Digital Garden",
    status: "Passive",
    description:
      'A functional portfolio website that would display various projects and their "growth" over time. Not used, as I decided to go with a different approach.',
    technologies: ["Angular", "Firebase"],
    image: garden,
    link: "https://digital-garden-edb9e.web.app/",
  },
  "Issue Tracker": {
    name: "Issue Tracker",
    status: "Passive",
    description:
      "Simple To-Do list application with authentication, so you can try it out yourself. Merely a proof of concept, as I was learning Angular and Firebase.",
    technologies: ["Angular", "Firebase", "Firebase Authentication"],
    image: tracker,
    link: "https://issue-tracker-94746.firebaseapp.com/projects/all",
  },
  "Wana Wiipuri Website": {
    name: "Wana Wiipuri Website",
    status: "Passive",
    description:
      "Made a website for a restaurant I used to work at. Due to 2020, the restaurant is closed, and the website is not used.",
    technologies: ["React"],
    image: wana,
    link: "https://wanawiipuridb.firebaseapp.com/",
  },
  Maze: {
    name: "Maze",
    status: "Inactive",
    description:
      "A test task from a long time ago. Fun and interesting project. Utilizes a recursive backtracking algorithm to navigate a maze, as well as multiple ways to solve it.",
    technologies: ["jQuery", "APIs", "Express"],
    image: maze,
    link: null,
  },
};

const Portfolio = () => {
  const [activeProject, setActiveProject] = React.useState(0);

  const listWrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const listRefs = useRef<HTMLButtonElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (listWrapperRef.current && contentWrapperRef.current) {
      listRefs.current = Array.from(
        listWrapperRef.current.querySelectorAll("button")
      );
      contentRefs.current = Array.from(
        contentWrapperRef.current.querySelectorAll(".section")
      );
    }
  }, []);

  const setActive = (event) => {
    const index = listRefs.current.indexOf(event.target);
    contentWrapperRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setActiveProject(index);
  };

  useEffect(() => {
    listRefs.current.forEach((item, i) => {
      if (i === activeProject) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    contentRefs.current.forEach((item, i) => {
      if (i === activeProject) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, [activeProject]);

  return (
    <Container className="portfolio">
      <Header />
      <div className="content">
        <Card>
          <div className="scrollable" ref={listWrapperRef}>
            {Object.keys(projects).map((key, index) => (
              <Button
                inset={activeProject === index}
                key={key}
                onClick={(e) => setActive(e)}
              >
                {key}
              </Button>
            ))}
          </div>
        </Card>
        <div className="preview" ref={contentWrapperRef}>
          {Object.keys(projects).map((key) => (
            <div key={key} className="section">
              <div className="image">
                <img src={projects[key].image} alt={projects[key].name} />
              </div>
              <div className="info">
                <Heading tag="h2">{projects[key].name}</Heading>
                <Heading tag="h4">Status: {projects[key].status}</Heading>
                <BodyText>{projects[key].description}</BodyText>
                <div className="technologies">
                  <Heading tag="h4">Technologies used</Heading>
                  <BodyText>{projects[key].technologies.join(", ")}</BodyText>
                </div>
                {projects[key].link && (
                  <Heading tag="h4">
                    <a
                      href={projects[key].link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </Heading>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
