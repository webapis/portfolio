import React from 'react';
import ToolIcons from './ToolIcon';
import './css/style.css';

export default function CodeLabComponent({ title, description, sandbox }) {
  return (
    <div className='codelab-component'>
      <ToolIcons />

      <div className='content'>
        <h3 className='title'>{title}</h3>
        <div className='codelab-description'>{description}</div>
        <div className='sandbox-link-container'>{sandbox}</div>
      </div>
    </div>
  );
}
