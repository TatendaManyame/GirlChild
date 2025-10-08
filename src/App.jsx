// App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Challenges from './components/Challenges';
import Solution from './components/Solution';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Growth from './components/Growth';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Vision />
      <Challenges />
      <Solution />
      <Impact />
      <Roadmap />
      <Team />
      <Growth />
      <Footer />
    </div>
  );
}

export default App;