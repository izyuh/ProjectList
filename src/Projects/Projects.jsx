import React from "react";
import Card from "./Cards/Card";

function Projects() {
    const projectData =[
        {
            title: "Project 1",
            description: "Description of project 1",
            image: 'File path'
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            image: 'File path'
        },
        {
            title: "Project 3",
            description: "Description of project 3",
            image: 'File path'
        },
        {
            title: "Project 4",
            description: "Description of project 4",
            image: 'File path'
        }
        
    ] 

    return <div className="project-container">
        {projectData.map((project, index) => (
            <Card 
            key= {index}
            title = {project.title}
            description = {project.description}
            image = {project.image}
            />
        ))}
    </div>



}

export default Projects;