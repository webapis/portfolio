import React from 'react';

export default function TabContainer({ children,title }) {
  return <div className='tab-container'>
      <h1>{title}</h1>
      {children}</div>;
}
