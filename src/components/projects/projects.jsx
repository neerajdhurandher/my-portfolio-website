import React, { useState, useRef } from 'react';
import Masonry from "react-masonry-css";
import Button from "../ui-components/button/button";

// SCSS
import "./projects.scss";
import "swiper/css/swiper.css";
import '../../style/App.scss';

// Assets

import yaarilogo from "../../assets/projects/yaari_logo.png";
import upasthitilogo from "../../assets/projects/upasthiti_logo.jpg";
import mywebsitethumbnail from "../../assets/projects/my_website_thumbnail.png";
import imageSlogo from "../../assets/projects/image_searcher_logo.jpg";
import connectionslogo from "../../assets/projects/connections.png";


// Components
import Title from "../ui-components/title/title";
import ProjectBox from "./projectsBox";
import ActionButton from "./actionButton";


function ProjectType(props) {
  if (props.prams.type == "more-projects") {
    return (
        <div className="more-project-btn">
          <ActionButton type={"github"} name={"More Projects"} link={props.prams.gihubLink} />
        </div>
    )
  } else {
    return (
      <ProjectBox data={props.prams} />
    )
  }
}

const ProjectPage = () => {

  const state = {
    // LIST ARRAY OF PROJECTS
    projectItems: [
      {
        image: yaarilogo,
        id: "1",
        title: "Yaari",
        description: "Fully Funcional Social Media App",
        uselang: "Android, Java, Firebase",
        date: "September 2020",
        type: "app",
        videoOrWebsiteLink: "",
        gihubLink: "https://github.com/neerajdhurandher/Yaari",
      },
      {
        image: connectionslogo,
        id: "2",
        title: "Connections",
        description: "This is web based Chatting App",
        uselang: "ReactJS, Firebase, Chat Engien.io",
        date: "October 2021",
        type: "website",
        videoOrWebsiteLink: "http://conections.tk",
        gihubLink: "https://github.com/neerajdhurandher/Connections",
      },
      {
        image: imageSlogo,
        id: "3",
        title: "Img Searcher",
        description: "Search and Download Images",
        uselang: "Android, Java, RestAPI",
        date: "May 2021",
        type: "app",
        videoOrWebsiteLink: "",
        gihubLink: "https://github.com/neerajdhurandher/Neeraj_Image_Search",
      },
      {
        image: upasthitilogo,
        id: "4",
        title: "Upasthiti",
        description: "Students,Teachers Manage App",
        uselang: "Android, Java, Firebase",
        date: "December 2020",
        type: "app",
        videoOrWebsiteLink: "",
        gihubLink: "https://github.com/neerajdhurandher/upasthiti",
      },
      {
        image: mywebsitethumbnail,
        id: "5",
        title: "My Portfolio",
        description: "This website is about Me.",
        uselang: "ReactJS, NPMJS, SCSS, Material UI",
        date: "July 2021",
        type: "website",
        videoOrWebsiteLink: "http://neerajdhurandher.tk",
        gihubLink: "https://github.com/neerajdhurandher/my-portfolio-website",
      },
      {
        image: "",
        id: "6",
        title: "More Projects",
        description: "",
        uselang: "",
        date: "",
        type: "more-projects",
        videoOrWebsiteLink: "",
        gihubLink: "https://github.com/neerajdhurandher?tab=repositories",
      },

    ],
  };

  let projectsRender = null;

  if (state.projectItems) {
    projectsRender = state.projectItems.map((story) => (
      <div key={story.id}>
        <ProjectType prams={story} />
      </div>
    ));
  }

  const itemBreakpoints = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <div className="projects" id="projects">
      <div className="wrapper">
        <Title title="My Projects" />
        <p className="font18 weight500 padding20">Here are my some project by using different Languages , Platforms and Tecchnologies.</p>
      </div>
      <div className="project_div">

        <Masonry breakpointCols={itemBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
          {projectsRender}
        </Masonry>

      </div>

      {/* <div className="flex-center padding30">
        <Button label="Review" target={"contact"} />
      </div> */}


    </div>
  );
}


export default ProjectPage;
