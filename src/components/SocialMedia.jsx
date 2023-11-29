import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://twitter.com/______anomaly">
            <BsTwitter />
        </a>
        <a href="https://github.com/BenM4k">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/benedict-makomo/">
            <FaLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia