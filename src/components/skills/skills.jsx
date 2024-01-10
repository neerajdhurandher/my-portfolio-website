import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./skills.scss";
//Assets
// my skill logos

import java_logo from "../../assets/skills_photos/java_logo.png";
import android_studio_logo from "../../assets/skills_photos/android_studio_logo.png";
import kotlin_logo from "../../assets/skills_photos/kotlin_logo.png";
import dsa_logo from "../../assets/skills_photos/dsa_logo.png";
import firebase_logo from "../../assets/skills_photos/firebase_logo.png";
import reactjs_logo from "../../assets/skills_photos/reactjs_logo.png";
import javascript_logo from "../../assets/skills_photos/javascript_logo.png";
import mysql_logo from "../../assets/skills_photos/my_sql_logo.png";
import spring_logo from "../../assets/skills_photos/spring.png";
import python_logo from "../../assets/skills_photos/python_logo.png";
import django_logo from "../../assets/skills_photos/django_logo.png";


//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import SkillsBox from "./skillsBox/skillsBox";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      skills: [
        {
          id: "1",
          preview: java_logo,
          title: "Java",
          tag: "Working Exp",
        },
        {
          id: "2",
          preview: android_studio_logo,
          title: "Android Studio",
          tag: "Working Exp",
        },
        {
          id: "3",
          preview: dsa_logo,
          title: "DSA",
          tag: "Intermediate",
        },
        {
          id: "7",
          preview: javascript_logo,
          title: "JavaScript",
          tag: "Beginner",
        },
        {
          id: "5",
          preview: reactjs_logo,
          title: "ReactJS",
          tag: "Working Exp",
        },
        {
          id: "10",
          preview: kotlin_logo,
          title: "Kotlin",
          tag: "Intermediate",
        },
        {
          id: "11",
          preview: mysql_logo,
          title: "MySQL",
          tag: "Intermediate",
        },
        {
          id: "9",
          preview: firebase_logo,
          title: "Firebase",
          tag: "Working Exp",
        },
        {
          id: "4",
          preview: spring_logo,
          title: "Spring Boot",
          tag: "Intermediate",
        },
        {
          id: "6",
          preview: python_logo,
          title: "Python",
          tag: "Working Exp"
        },
        {
          id: "8",
          preview: django_logo,
          title: "Django",
          tag: "Working Exp"
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
    let skillsArr = [...this.state.skills];
    let result = skillsArr.sort((a, b) => {
      return a.id - b.id;
    });

    this.setState({ filterResult: result });
  };


  render() {

    let skillsRender = null;
    if (this.state.filterResult) {
      skillsRender = this.state.filterResult.map((project) => (
        <SkillsBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
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
