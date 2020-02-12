import React from 'react';
import './css/style.css';
export default function SkillComponent({ tool, middle, advanced,beginner }) {
  return (
    <div className='skill-component'>
      <div className='tool'>{tool}</div>
      <div className='level'>
        <div>{beginner && <span>&#10003;</span>}</div>
      </div>
      <div className='level'>
        <div>{middle && <span>&#10003;</span>}</div>
      </div>
      <div className='level'>
        {' '}
        <div>{advanced && <span>&#10003;</span>}</div>
      </div>
    </div>
  );
}
