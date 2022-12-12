import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {

    console.log("IS TRUE>>", props.repo === null)
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>

          <span>
            <a href={props.linkTo} target="blank" className="link">
              {props.heading ? props.heading : ""}
            </a>
          </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    {
      label: "Education",
      logoSrc: (
        <i
          className="fa fa-graduation-cap"
          aria-hidden="true"
          style={{ color: "white" }}
        ></i>
      ),
    },
    {
      label: "Work History",
      logoSrc: (
        <i
          className="fa fa-history"
          aria-hidden="true"
          style={{ color: "white" }}
        ></i>
      ),
    },
    {
      label: "Programming Skills",
      logoSrc: (
        <i
          className="fa fa-laptop"
          aria-hidden="true"
          style={{ color: "white" }}
        ></i>
      ),
    },
    {
      label: "Projects",
      logoSrc: (
        <i
          className="fa fa-handshake-o"
          aria-hidden="true"
          style={{ color: "white" }}
        ></i>
      ),
    },
    {
      label: "Interests",
      logoSrc: (
        <i
          className="fa fa-heart"
          aria-hidden="true"
          style={{ color: "white" }}
        ></i>
      ),
    },
  ];

  // PROGRAMMING SKILLS
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "HTML5", ratingPercentage: 80 },
    { skill: "Tailwind CSS", ratingPercentage: 80 },
  ];

  // MY PROJECTS
  const projectsDetails = [
    {
      title: "Explore Mobile App Projects",
      duration: { fromDate: "", toDate: "" },
      subHeading: "Technologies: React Native and Flutter",
      link: "https://mobileapp-olayiwola.netlify.app/",
    },
    {
      title: "Netflix Clone",
      duration: { fromDate: "", toDate: "" },
      subHeading: "Technologies: React, MongoDB, Firebase, JWT, Context API and SASS CSS.",
      link: "https://layinetflix.herokuapp.com",
    },
    {
      title: "Amazon eCommerce",
      duration: { fromDate: "", toDate: "" },
      subHeading: "Technologies: Stripe API, Firebase, React, Context API.",
      link: "https://challenge-87efa.web.app",
    },
    {
      title: "Professional Networking Website",
      duration: { fromDate: "", toDate: "" },
      subHeading: "Technologies:  React, Material UI, MongoDb, Redux.",
      link: "https://proworkapp.netlify.app",
    },
    {
      title: "Blog Website",
      duration: { fromDate: "", toDate: "" },
      subHeading: "Technologies: React, MongoDB, Context API",
      link: "https://adepojublog.herokuapp.com",
    },
  ];

  // EDUCATION
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"ClassVisa, San Diego CA, United States"}
        subHeading={"Software Engineering Flex"}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"LinkedIn Learning"}
        subHeading={"JavaScript Essentail Training"}
        fromDate={"2022"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Udemy "}
        subHeading={"Complete Web Developer Course 3.0"}
        fromDate={"2017"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"International Psychometrics Centre"}
          subHeading={"Head of ICT"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as Head of ICT at IPCentre, International
            Psychometrics Centre.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed a univerisity learning management system with over
            60,000 students.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed an online examination portal with over 60,000 students
            examined.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I drill myself to develop UI as per the given designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects" style={{marginTop: "10px"}}>
      {projectsDetails.map((projectsDetails, index) => (
        
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          linkTo={projectsDetails.link}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach what i know."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in interactive gaming sessions."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <span className="bullet-logo">{bullet.logoSrc}</span>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
