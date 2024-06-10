import React from 'react';
import '../Styles/about.css';
import abgirl from './abg.png';

const About = () => {
  return (
    <div className='content'>
      <div className='home-container'>
        <div className='text-container'>
          <h1>Know Who <span>I'm</span></h1>
          <p className='info'>
            Hello everyone! I am <span>Suryanshi Sharma</span> from <span>Greater Noida.</span> I am currently<br/>
            <br/>
            in 3rd of B.Tech Computer Science. My specialisation is Full Stack Development<br/><br/>
            and I am really interested in working on Web Technologies and AI/ML.<br/><br/>
            I am pursuing my degree from Bennett University<br/>
            <br/>
            <br/>
            Here are some of my hobbies- <br/>
            1. Reading books<br/>
            2. Dancing <br/>
            3. Skating <br/>
          </p>
        </div>
        <div className='image-container'>
          <img src={abgirl} alt="Student" className="student-image" />
        </div>
      </div>
    </div>
  );
};

export default About;