import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) { //this is coming from user.projects, passed in via the App component
  const renderItem = projects.map((projectItem) => { //map thru each one, assign an id
    return <ProjectItem 
              key={projectItem.id} 
              name={projectItem.name}
              about={projectItem.about}
              technologies={projectItem.technologies}
            />
    })

  return ( //render each item to the page
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderItem}</div>
    </div>
  );
}

export default ProjectList;
