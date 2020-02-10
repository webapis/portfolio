import React from 'react';
import './css/style.css';

export default function CertificateComponent({
  description,
  href,
  img,
  title
}) {
  return (
    <div className='certificate'>
      <div className='cert-image'>
        <img src={img} alt='freecodecamp' />
        <a className='confirmation-link' href={href} target='blank'>
          Confirmation link
        </a>
      </div>
      <div className='cert-description'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
