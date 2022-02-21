import React from 'react';
import ghalia from '../../assets/Ghalia/ghalia.jpg'
function About() {
    return (
        
        <div className="container">

        <br/><br/><br/>
        <div className="row">
        <div className="text-center">
        <img src={ghalia} className="img-thumbnail" alt="ghalia" />
    </div>
            <div className="col bio"> <br/><br/>
            Full Stack Web Developer with an Associate’s Degree and five years professional
experience in programming languages teaching. Naturally, curious and always strive to
learn new technologies at a fast pace. Known among others for the patience and
hard-working with the pursued the perfection of the task.
            </div>
        </div>
    </div>
    )
}

export default About;
