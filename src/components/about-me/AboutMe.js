import React from 'react';
import './css/style.css';
import { ToolIcon } from '../codelab/ToolIcon';

import reactIcon from '../codelab/icons/react.png';
import jsIcon from '../codelab/icons/javascript.svg';
import webrtcIcon from '../codelab/icons/webrtc.svg';
import mongodbIcon from '../codelab/icons/mongodb.svg';
import nodejsIcon from '../codelab/icons/nodejs.svg';
export default function AboutMe({ title }) {
  return (
    <div className='about-me'>
      <h1>{title} </h1>
      <p>
        I am experienced Frontend Web Developer. My programming language is
        Javascript. React.js is my preffered choice for developing client side
        application. Currently I am spending time experimenting real time
        communication applications with WebRTC.
      </p>
      <h3>Major Tools I use: </h3>
      <div className='tool-icon-container'>
        <div>
          <ToolIcon img={reactIcon} />
          <div>React.js</div>
        </div>
        <div>
          <ToolIcon img={jsIcon} />
          <div>JavaScript</div>
        </div>
        <div>
          <ToolIcon img={webrtcIcon} />
          <div>WebRTC</div>
        </div>
        <div>
          <ToolIcon img={mongodbIcon} />
          <div>MongoDB</div>
        </div>
        <div>
          <ToolIcon img={nodejsIcon} />
          <div>Node.js</div>
        </div>
      </div>
    </div>
  );
}
