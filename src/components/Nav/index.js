import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <nav className="navbar navbar-expand-lg  mb-2">
            <div className='text-center margin'>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to='/About'>
                           <h3> About me</h3>
                        </Link>
                    </li>
                    <li className={"mx-2"}>
                        <Link to="/Projects"><h3> Projects</h3> </Link>


                    </li>
                    <li className={"mx-2"}>
                        <Link to="/Resume">
                        <h3> Resume</h3> 
                        </Link>
                    </li>
                    <li className={"mx-2"}>
                        <Link to="/ReachMe">
                        <h3> Reach Me</h3> 
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav
