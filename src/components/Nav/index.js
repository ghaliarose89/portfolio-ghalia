import React , {useState}  from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const [isActive, setIsActive] = useState(false);
   
    return (

        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className='text-center margin'>
                <ul className="flex-row">
                    <li className="mx-2 ">
                        <Link to='/About' >
                           <h3 > About me</h3>
                        </Link>
                    </li>
                    <li className= {`mx-2 ${!isActive ? "active" : ""}`} >
                        <Link to="/Projects" data-testid= 'Project' ><h3> Projects</h3> </Link>


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
