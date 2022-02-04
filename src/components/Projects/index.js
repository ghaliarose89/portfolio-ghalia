import React, { useState } from 'react';
import ProCards from '../ProCards';
import project1 from "../../assets/projects/pro1.jfif"
import project2 from "../../assets/projects/pro2.JPG"
import project3 from "../../assets/projects/pro3.jpg"
import project4 from "../../assets/projects/pro4.jpg"
import project5 from "../../assets/projects/pro5.jpg"
import project6 from "../../assets/projects/pro6.jpg"

const project = [

    {
        id: 1,
        image:project1,
        name: "My Neighbors",
        description: "My Neighbors is a full-stack web application that utilizes a MYSQL in the Back-end and handelBars for Front-end . This app Tracks Neighborhood Events, News, Services, and Residents.",
        github: "https://github.com/ghaliarose89/my-neighbors",
        deployed: "https://myneighbor-app.herokuapp.com/",
    },
    
    {
        id: 3,
        image: project3,
        name: "The Missing One",
        description: "A helpful and unique App, developed to collaborate with families, friends, neighbors, and others to address missing persons and help to find them",
        github: "https://github.com/cabralwilliams/the-missing-one",
        deployed: "https://lit-scrubland-68499.herokuapp.com/",
    },
    {
        id: 2,
        image: project2,
        name: "Pet Search",
        description: "Pet Search is a Fron-end application that uses four ApI to search for a pet (Cat/Dog) for adoption          ",
        github: "https://github.com/NoahTidwell/Enterprising-Arrangements",
        deployed: "https://ghaliarose89.github.io/pet-search/",
    }
    ,
    {
        id: 4,
        image:project4,
        name: "Employee-tracker",
        description: "Tracking employee's database. A command-line application built with REST API and MySQL.",
        github: "https://github.com/ghaliarose89/employee-tracker",
        deployed: "https://youtu.be/dI9h_WXMxbE",
    },
    {
        id: 5,
        image: project5,
        name: "Readme-Generator",
        description: "This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project",
        github: "https://github.com/ghaliarose89/readme-generator",
        deployed: "https://www.youtube.com/watch?v=yRFRdbIpSvA",
    },
    {
        id: 6,
        image: project6,
        name: "Tech-Blog",
        description: "Full web stack application that uses MYSQl and handlebars. Tech-Blog is  blog page where the user can post and communitact with other bloggers.",
        github: "https://github.com/ghaliarose89/tech-blog",
        deployed: "https://tech-blogs-22.herokuapp.com/",
    },
]

function Projects(props) {
    const [projectList, setProjectList] = useState(project);


    return (
        <div >
            <section id="projects" className="container-lg mt-2">

                <div className="row">

                    <h2 className="text-center contact-me form-border  project mb-3">My Projects</h2>

                </div>
                <div className="row d-flex justify-content-center mb-5">

                    
                    {projectList.map((projects) => (
                        <ProCards
                            key={projects.id}
                            image={projects.image}
                            name={projects.name}
                            description={projects.description}
                            github={projects.github}
                            deployed={projects.deployed}
                        />
                    ))}

                </div>


            </section >
        </div>

    );
}


export default Projects;
