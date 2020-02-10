import React from 'react';
export default function SocialIcon({ img, href }) {
  return (
    <div className='social-icon'>
      <a href={href} className='icon' target='blank'>
        <img className='icon-img' src={img} alt='icon-name' />
      </a>
    </div>
  );
}
