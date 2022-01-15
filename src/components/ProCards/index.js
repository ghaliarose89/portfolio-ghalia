import React from 'react';


function ProCards(props) {

    return (

        <div className="card rounded-2 card-shadow mt-3 m-4 mb-5" style={{ width: '24rem' }}>
            <img alt={props.name} src={props.image} className="rounded card-img-top" />
            <div className="card-body">
                <h6 className="card-title text-center">{props.name}</h6>
                <p className="card-text">{props.description}
                </p>
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