import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../About';
import Nav from '../Nav';
import Projects from '../Projects';
function Header() {
    return (
        <header>
        
            <h2>
                <a data-testid="link" href="/">
                <div class="text-center"> Ghalia Sami </div>
                </a>
            </h2>
            
        
           <Router>
           <Nav/>
           <Routes>
           <Route path= "/projects" element= {Projects}/>
           <Route path= "/About" element= {About}/>
           
           </Routes>
           </Router>
            
           
        </header>
    )
}

export default Header
