import React from 'react';


function ProCards(props) {

    return (

        <div className=" rounded-2 card-shadow mt-3 m-4 mb-5" style={{ width: '30rem' }}>
        
           <a href={props.deployed}> <img alt={props.name} src={props.image} className="rounded card-img-top project-image" /></a>
            
            <div className="card-body">
                <h4 className="card-title text-center project-name">{props.name}</h4>
                <div className="project-desc">
                <p className="card-text">{props.description}
                </p>
                </div>
            </div>
            <div className="card-body">
                <a href={props.deployed} rel="noopener noreferrer" className="card-link">Web
                    Deployment</a>
                <a href={props.github} rel="noopener noreferrer" className="card-link">GitHub
                    Page
                    link</a>

            </div>
        </div >



    );
}

export default ProCards;