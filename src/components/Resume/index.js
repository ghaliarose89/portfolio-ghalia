import React from 'react'

function Resume() {
    return (
        <div className='container resume'>
            <div className='row'>  <div className='col-3'> <h2 className='contact-me'> Skills:</h2>
            <a href='../../assets/Resume/Ghalia-Sami.pdf'><h5>Download My Resume</h5></a>
            </div>
                <div className='col-3'>

                    <h5 className='contact-me'>FRONT-END:</h5><br />
                    HTML5<br />
                    React<br />
                    JavaScript (ES6)<br />
                    Bootstrap<br />
                    The DOM<br />
                    APIs<br />
                    JQuery<br />
                    JSON<br />
                    AJAX<br />CSS3

                </div>
                <div className='col-3'>
                <h5 className='contact-me'>  BACK-End:</h5><br />Node<br />
                    ES6<br />
                    Object-oriented<br />

                    Express<br />
                    MySQL<br />
                    MVC paradigm<br />
                    Sequelize<br />
                    Testing<br />
                    programming<br />

                </div>
            </div>
            
        </div>
    )
}

export default Resume
