import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
  }
  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt='email' />
          <a href="mailto:bennymakomo@gmail.com" className='p-text'>bennymakomo@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt='mobile' />
          <a href="tel:+250784702911" className='p-text'>+250784702911</a>
        </div>
      </div>

      {!submitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            placeholder='Your Name'
            name='name'
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            placeholder='Your Email'
            name='email'
            value={email}
            onChange={handleChangeInput}
          />
        </div>

        <div className="">
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            onChange={handleChangeInput}
            name="message"
          />
        </div>
        <button
          type='button'
          className='p-text'
          onClick={handleSubmit}
        >
          { loading ? 'Sending' : 'Send Message' }
        </button>
      </div> :
      <div>
        <h3 className="head-text">Thank You for getting in touch</h3>
      </div>}
    </>
  )
};

export default AppWrap (
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);