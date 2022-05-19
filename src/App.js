import React from 'react';
import './App.scss';
import { About, Footer, Header, Skills, Work } from './container';
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
      <Footer/>
    </div>
  );
}

export default App;