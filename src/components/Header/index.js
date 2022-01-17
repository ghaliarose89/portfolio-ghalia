import React from 'react'

import Nav from '../Nav';

function Header() {
    return (
        <header>
        
            <h2>
                <a data-testid="link" href="/">
                <div className="text-center"> Ghalia Sami </div>
                </a>
            </h2>
            
        
            
           <Nav/>
        
          
           
           
        </header>
    )
}

export default Header
