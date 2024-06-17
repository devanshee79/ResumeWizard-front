import React from "react";
import "../../resources/template2.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="template2-parent">
      <div className="template2-top template2-d-flex template2-flex-column">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <br></br>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>

      <div className="template2-divider"></div>

      <div className="template2-objective template2-section">
        <h3>Objective</h3>
        <hr />
        <p>{user.carrierObjective}</p>
      </div>

      <div className="template2-divider"></div>

      <div className="template2-education template2-section">
        <h3>Education</h3>
        <hr />
        {user.education.map((education) => (
          <div className="template2-d-flex template2-align-items-center" key={education.range}>
            <h6 style={{ width: 100 }}>
              <b>{education.range}:</b>
            </h6>
            <p>
              <b>{education.qualification}</b> with <b>{education.percentage}%</b> in {education.institution}
            </p>
          </div>
        ))}
      </div>

      <div className="template2-divider"></div>

      <div className="template2-experience template2-section">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((exp) => (
          <div className="template2-d-flex template2-align-items-center" key={exp.range}>
            <h6 style={{ width: 100 }}>
              <b>{exp.range}:</b>
            </h6>
            <p>
              <b>{exp.company}</b> in <b>{exp.place}</b>
            </p>
          </div>
        ))}
      </div>

      <div className="template2-divider"></div>

      <div className="template2-projects template2-section">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((project) => (
          <div className="template2-d-flex template2-flex-column" key={project.title}>
            <h6>
              <b>{project.title} [{project.range}]</b>
            </h6>
            <p>{project.rating}</p>
          </div>
        ))}
      </div>

      <div className="template2-divider"></div>

      <div className="template2-skills template2-section">
        <h3>Skills</h3>
        <hr />
        {user.skills.map((skill, index) => (
          <p key={index}>{skill.technology}</p>
        ))}
      </div>
    </div>
  );
}

export default Template2;
