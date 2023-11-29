import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://twitter.com/______anomaly" target="_blank">
            <BsTwitter />
        </a>
        <a href="https://github.com/BenM4k" target="_blank">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/benedict-makomo/" target="_blank">
            <FaLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia