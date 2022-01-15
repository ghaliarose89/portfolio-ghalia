import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        
        <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to ='/About'>
                            About me
                        </Link>
                    </li>
                    <li className={"mx-2"}>
                   <Link  to="projects"> Projects</Link>
                            
                        
                    </li>
                    <li className={"mx-2"}>
                    <a data-testid="about" href="#about">
                            Resume
                        </a>
                    </li>
                    <li className={"mx-2"}>
                    <a data-testid="about" href="#about">
                            Reach Me
                        </a>
                    </li>

                </ul>
            </nav>
    )
}

export default Nav
