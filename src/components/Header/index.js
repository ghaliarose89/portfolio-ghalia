import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../About';
import Nav from '../Nav';
import Projects from '../Projects';
import ContactForm from '../Contact';
function Header() {
    return (
        <header>
        
            <h2>
                <a data-testid="link" href="/">
                <div className="text-center"> Ghalia Sami </div>
                </a>
            </h2>
            
        
           <Router>
           <Nav/>
        
           <Routes>
          
           <Route path= "/" element= {<About />}/>
           <Route path= "/About" element= {<About />}/>
           <Route path= "/ReachMe" element= {<ContactForm />}/>
           <Route path= "/Projects" element= {<Projects />}/>

           </Routes>
           </Router>
            
           
        </header>
    )
}

export default Header
