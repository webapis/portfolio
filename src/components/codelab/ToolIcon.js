import React from 'react';
import reactIcon from './icons/react.png';
import webRTCIcon from './icons/webrtc.svg';
function ToolIcon({ img }) {
  return <img className='tool-image' src={img} alt='tool icon' />;
}

export default function ToolIcons() {
  return (
    <div className="tool-icons">
    
      <ToolIcon img={reactIcon} />
      <ToolIcon img={webRTCIcon} />
    </div>
  );
}
