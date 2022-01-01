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
        type : "app",
        videoOrWebsiteLink : "",
        gihubLink: "https://github.com/neerajdhurandher/Yaari",
      },
      {
        image: connectionslogo,
        id: "2",
        title: "Connections",
        description: "This is webbased Chatting app",
        uselang: "ReactJS, Firebase, Chat Engien.io",
        date: "October 2021",
        type : "website",
        videoOrWebsiteLink : "http://conections.tk",
        gihubLink: "https://github.com/neerajdhurandher/Connections",
      },
      {
        image: mywebsitethumbnail,
        id: "3",
        title: "My Portfolio",
        description: "This website is about Me.",
        uselang: "ReactJS, HTML, CSS, Material UI",
        date: "July 2021",
        type : "website",
        videoOrWebsiteLink : "http://neerajdhurandher.tk",
        gihubLink: "https://github.com/neerajdhurandher/my-portfolio-website",
      },
      {
        image: upasthitilogo,
        id: "4",
        title: "Upasthiti",
        description: "Students,Teachers Manage App",
        uselang: "Android, Java, Firebase",
        date: "December 2020",
        type : "app",
        videoOrWebsiteLink : "",
        gihubLink: "https://github.com/neerajdhurandher/upasthiti",
      },
      {
        image: imageSlogo,
        id: "5",
        title: "Img Searcher",
        description: "Search and Download Images",
        uselang: "Android, Java, RestAPI",
        date: "May 2021",
        type : "app",
        videoOrWebsiteLink : "",
        gihubLink: "https://github.com/neerajdhurandher/Neeraj_Image_Search",
      },

    ],
  };

  let projectsRender = null;

  if (state.projectItems) {
    projectsRender = state.projectItems.map((story) => (
      <div key={story.id}>
        <ProjectBox data={story} />
      </div>
    ));
  }

  const itemBreakpoints = {
    default: 1,
    1100: 1,
    700: 1,
    500: 1,
  };

  return (
    <div className="projects" id="projects">
      <div className="wrapper">
        <Title title="My Projects" />
        <p className="font18 weight500 padding20">Here are my some project by using different Languages , Platforms and Tecchnologies.</p>

        <div className=" project_div">

          <Masonry breakpointCols={itemBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>

        </div>

        <div className="flex-center padding30">
          <Button label="Review" target={"contact"} />
        </div>

      </div>
    </div>
  );
}


export default ProjectPage;
