import React, { useState, useEffect, useRef } from 'react';
import myImage from './my-picture.jpg';
import SocialIconContainer from './components/social-icons/social-icon-container';
import CertificateContainer from './components/certificate/certificate-container';
import CodeLabContainer from './components/codelab/CodeLabContainer';
import SkillsContainer from './components/skills/SkillContainer';
import AboutMeContainer from './components/about-me/AboutMe';
import TabContainer from './components/TabContainer';
import './App.css';

function App() {
  const appRef = useRef();
  function strollTo(x) {
    appRef.current.scroll({
      top: 500,
      left: 100,
      behavior: 'smooth'
    });
  }

  return (
    <div className='App' ref={appRef}>
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
          <a href='#/' onClick={strollTo}>
            WHO AM I
          </a>
          <a href='#/' onClick={() => strollTo(400)}>
            SKILLS
          </a>
          <a href='#/' onClick={() => strollTo(200)}>
            CERTIFICATES
          </a>

          <a href='#/'>CODELAB</a>
        </div>
      </div>
      <div className='main-content' ref={appRef}>
        <TabContainer title='WHO AM I'>
          <AboutMeContainer />
        </TabContainer>
        <TabContainer title='SKILLS'>
          <SkillsContainer />
        </TabContainer>

        <TabContainer title='CERTIFICATES'>
          <CertificateContainer />
        </TabContainer>
        <TabContainer title='CODE LAB'>
          <CodeLabContainer />
        </TabContainer>
      </div>
    </div>
  );
}

export default App;
