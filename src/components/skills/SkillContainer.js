import React from 'react';
import SkillComponent from './SkillComponent';
import './css/style.css';
export default function SkillContainer({ children }) {
  return (
    <div className='skill-container'>
      <div className='skill-level'>
        <div className='level-column'>
          <div className='skill-level-title tool'>TOOLS</div>
        </div>
        <div className='level-column'>
          {' '}
          <div className='skill-level-title'>BEGINNER</div>
        </div>
        <div className='level-column'>
          {' '}
          <div className='skill-level-title'>MIDDLE</div>
        </div>
        <div className='level-column'>
          {' '}
          <div className='skill-level-title'>ADVANCED</div>
        </div>
      </div>
      <SkillComponent
        tool='React.js'
        beginner={false}
        middle={false}
        advanced={true}
      />
      <SkillComponent
        tool='JavaScript'
        beginner={false}
        middle={false}
        advanced={true}
      />
      <SkillComponent
        tool='WebRTC'
        beginner={false}
        middle={false}
        advanced={true}
      />
      <SkillComponent
        tool='MongoDB'
        beginner={false}
        middle={true}
        advanced={false}
      />
      <SkillComponent
        tool='Nodejs'
        beginner={false}
        middle={true}
        advanced={false}
      />
        <SkillComponent
        tool='Rollup js'
        beginner={false}
        middle={false}
        advanced={true}
      />
          <SkillComponent
        tool='Webpack'
        beginner={false}
        middle={true}
        advanced={false}
      />
      <SkillComponent
        tool='CSS,HTML'
        beginner={false}
        middle={true}
        advanced={false}
      />
      <SkillComponent
        tool='Testing(Jest.js,React testing library)'
        beginner={false}
        middle={true}
        advanced={false}
      />
      <SkillComponent
        tool='Websocket,socketio'
        beginner={false}
        middle={true}
        advanced={false}
      />
    </div>
  );
}
