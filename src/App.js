import React from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
function App() {
  
  return (
    
    <HashRouter>
      <Header />
      <Switch>
      <div className="container">  
      <Route exact path="/" component={About} />
      <Route path= "/About" component= {About }/>
      <Route path= "/ReachMe" component= {ContactForm }/>
      <Route path= "/Projects" component= {Projects }/>
      <Route path= "/Resume" component= {Resume }/>
      
      </div>
     
      </Switch>
      
     
      <Footer />
      </HashRouter>
   
  );
}

export default App;
