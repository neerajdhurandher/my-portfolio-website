import React from "react";
import Swiper from "react-id-swiper";
import { Row, Col } from "react-flexbox-grid";
import Button from "../ui-components/button/button";

// SCSS
import "./projects.scss";
import "swiper/css/swiper.css";

// Assets

import yaarilogo from "../../assets/projects/yaari_logo.png";
import upasthitilogo from "../../assets/projects/upasthiti_logo.jpg";
import mywebsitethumbnail from "../../assets/projects/my_website_thumbnail.png";
import imageSlogo from "../../assets/projects/image_searcher_logo.jpg";




// Components
import Title from "../ui-components/title/title";
import ProjectBox from "./projectsBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF PROJECTS
    stories: [
      {
        image: yaarilogo,
        id: "1",
        title: "Yaari",
        description: "Fully Funcional Social Media App",
        uselang : "Android, Java, Firebase",
        date: "September 2020",
        gihubLink:"https://github.com/neerajdhurandher/Yaari/tree/master",
      },
      {
        image: upasthitilogo,
        id: "2",
        title: "Upasthiti",
        description: "Students,Teachers Manage App",
        uselang : "Android, Java, Firebase",
        date: "December 2020",
        gihubLink:"https://github.com/neerajdhurandher/upasthiti",
      },
      {
        image: mywebsitethumbnail,
        id: "3",
        title: "My Portfolio",
        description: "This website is about Me.",
        uselang : "ReactJS, HTML, CSS, Bootstrap",
        date: "July 2021",
        gihubLink:"https://github.com/neerajdhurandher/my-portfolio-website/tree/master",
      },
      {
        image: imageSlogo,
        id: "4",
        title: "Img Searcher",
        description: "Search and Download Images",
        uselang : "Android, Java, RestAPI",
        date: "May 2021",
        gihubLink:"https://github.com/neerajdhurandher/Neeraj_Image_Search",
      },
      
    ],
  };

  render() {
   
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <ProjectBox article={story} />
        </div>
      ));
    }
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 1.6,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1.6,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="projects" id="projects">
        <div className="wrapper">
          <Title title="My Projects" />
          <p className="font18 weight500 padding20">Here are my some project by using different Languages , Platforms and Tecchnologies.</p>
          <div className=" swiper_div padding20">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
          <div className="flex-center padding30">
            <Button label="Review" target={"contact"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
