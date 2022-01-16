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
            I am Full Stack Web Developer In Colorado Denver area with an Associate’s Degree and five+ years professional experience in Computer Technology Teaching . I am a naturally curious person which makes me want to always learn new things, a problem-solver who questions everything, and a hard worker who doesn't take life too seriously and enjoys the little things.
            </div>
        </div>
    </div>
    )
}

export default About;
