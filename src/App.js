import React from 'react';
import myImage from './my-picture.jpg';
import SocialIconContainer from './components/social-icons/social-icon-container';
import CertificateContainer from './components/certificate/certificate-container';
import CodeLabContainer from './components/codelab/CodeLabContainer';
import SkillsContainer from './components/skills/SkillContainer';
import AboutMeContainer from './components/about-me/AboutMe';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='top-bar'>
        <div className='img-decription'>
          <div className='image-container'>
            <img className='my-img' src={myImage} alt='portfolio' />
          </div>
          <div className='description'>
            <h1 className='name'>Serdar Ashirov</h1>
            <h2 className='profession'>Web Front End Developer</h2>
            <SocialIconContainer />
          </div>
        </div>
        <div className='nav'>
          <a href='#'>WHO AM I</a>
          <a href='#'>CERTIFICATES</a>
          <a href='#'>SKILLS</a>
          <a href='#'>CODELAB</a>
          <a href='#'>CONTACT ME</a>
        </div>
      </div>
      <div className='aboutme-body'>
        <AboutMeContainer title='WHO AM I' />
      </div>
      <div className='skills-body'>
        <h1>SKILLS</h1>
        <SkillsContainer />
      </div>
      <div className='certification-body'>
        <div className='container'>
          <CertificateContainer />
        </div>
      </div>

      <div className='codelab-body'>
        <h1>CODE LAB</h1>
        <CodeLabContainer />
      </div>
    </div>
  );
}

export default App;
