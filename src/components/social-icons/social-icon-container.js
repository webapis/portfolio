import React from 'react'

import SocialIcon from './social-icon';
import stackOverFlowImg from './icons/icons8-stack-overflow.svg';
import gitHubImage from './icons/icons8-github.svg';
import linkedInImage from './icons/icons8-linkedin.svg';
import gmailImage from './icons/icons8-gmail.svg';
import googlePlus from './icons/google-plus.svg';
import codesandbox from './icons/codesandbox.png';
export default function SocialIconContainer (){

    return (
        <div className='icons-container'>
        <SocialIcon
          href='https://stackoverflow.com/users/4469425/serdar'
          img={stackOverFlowImg}
        />
        <SocialIcon href='https://github.com/webapis' img={gitHubImage} />
        <SocialIcon
          href='https://www.linkedin.com/in/serdar-ashirov/'
          img={linkedInImage}
        />
        <SocialIcon
          href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=webapis.github@gmail.com&tf=1`}
          img={gmailImage}
        />
        <SocialIcon
          href='https://hangouts.google.com/group/3aQgX6x3KvDW1PjS7'
          img={googlePlus}
        />
        <SocialIcon
          href='https://codesandbox.io/u/webapis/sandboxes'
          img={codesandbox}
        />
      </div>
    )
}