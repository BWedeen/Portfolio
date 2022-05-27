import React from 'react';
import './App.scss';
import { Header, About, Work, Skills, Contact } from './container';
import { Navbar } from './components';

//Credit to upklyak for vector images

const App = () => {
  return ( 
    <div className="app">
      <div class="cursor"></div>
      <Navbar/>
      <Header />
      <About />
      <Work/>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;