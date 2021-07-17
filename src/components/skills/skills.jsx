import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./skills.scss";
//Assets
// my skill logos

import javalogo from "../../assets/skills_photos/java_logo.png";
import cpplogo from "../../assets/skills_photos/cpp_logo.png";
import android_studiologo from "../../assets/skills_photos/android_studio_logo.png";
import kotlinlogo from "../../assets/skills_photos/kotlin_logo.png";
import dsalogo from "../../assets/skills_photos/dsa_logo.png";
import firebaselogo from "../../assets/skills_photos/firebase_logo.png";
import reactjslogo from "../../assets/skills_photos/reactjs_logo.png";
import htmllogo from "../../assets/skills_photos/html_logo.png";
import csslogo from "../../assets/skills_photos/css_logo.png";
import javascriptlogo from "../../assets/skills_photos/javascript_logo.png";


//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import SkillsBox from "./skillsBox/skillsBox";
import title from "../ui-components/title/title";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: javalogo,
          title: "Java",
          tag: "Intermidiate",
        },
        {
          id: "2",
          preview: android_studiologo,
          title: "Android Studio",
          tag: "Intermidiate",
        },
        {
          id: "3",
          preview: dsalogo,
          title: "DSA",
          tag: "Intermidiate",
        },
        {
          id: "4",
          preview: cpplogo,
          title: "C++",
          tag: "Intermidiate",
        },
        {
          id: "5",
          preview: reactjslogo,
          title: "ReactJS",
          tag: "Intermidiate",
        },
        {
          id: "6",
          preview: kotlinlogo,
          title: "Kotlin",
          tag: "Beginner",
        },

        {
          id: "7",
          preview:htmllogo ,
          title: "Html",
          tag:"Intermidiate",
        },
        {
          id: "8",
          preview: javascriptlogo,
          title: "JavaScript",
          tag:"Beginner",
        },
        {
          id: "9",
          preview:csslogo ,
          title: "Css",
          tag:"Intermidiate",
        },
        {
          id: "10",
          preview: firebaselogo,
          title: "Firebase",
          tag: "Intermidiate",
        }

      ],
    
      filterResult: null,
      
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result = projectsArr;

    this.setState({ filterResult: result});
  };


  render() {

    let skillsRender = null;
    if (this.state.filterResult) {
      skillsRender = this.state.filterResult.map((project) => (
        <SkillsBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
    // SKILLS GALLERY BREAKPOINTS
    const skillsBreakpoints = {
      default: 3,
      1100: 3,
      700: 3,
      500: 2,
    };

    return (
      <div id="skills">
        <div className="wrapper">
          <Title title="SKILLS" />
          
          <Masonry breakpointCols={skillsBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {skillsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="Review" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Skills;
