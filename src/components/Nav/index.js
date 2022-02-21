import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const [isActive, setIsActive] = useState(false);

    return (

        <nav className="navbar navbar-expand-lg navbar-dark " aria-label="Fifth navbar example">
            <div className="container-fluid">
            <div>
            <h2>
                <a data-testid="link" href="/">
                    <div className="text-center a"> Ghalia Sami </div>
                </a>
            </h2>
            </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center " id="navbarsExample05">
               
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center justify-content-lg-between my-md-0 text-small">
                        <div>
                        <li className="nav-item ">
                            <Link className="nav-link a" to='/About' >
                                <h3 > About me</h3>
                            </Link>
                        </li>
                        </div>
                        <div>
                        <li className="nav-item ">
                            <Link className="nav-link a" to='/Projects' >
                                <h3 > Projects</h3>
                            </Link>
                        </li>
                        </div>
                        <li className="nav-item ">
                            <Link className="nav-link a" to='/Resume' >
                                <h3 > Resume</h3>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link a" to="/ReachMe">
                                <h3> Reach Me</h3>
                            </Link>
                        </li>





                    </ul>
                </div>

            </div>
        </nav >
    )
}

export default Nav
