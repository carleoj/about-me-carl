import React from 'react';
import Link from './Link.jsx';

const About = () => {
  return (
    <section id="about" className="about divider">
        <h2>About Me</h2>
        <p>
        I am an undergraduate student at South Philippine Adventist College in Davao Del Sur, Philippines, pursuing a Bachelor of Science in Computer Science. I have some practical expertise with React in web development and am driven by passion. I take pleasure in discovering new things and learning about them.
        </p>
        <p>
        As an aspiring full stack web developer, I am eager to empower my skills and creativity through continuous learning experience. I am excited to showcase my talents and share my aspirations with everyone especially to the web dev community. I believe that I have the power  to change things for the better.
        </p>
        <Link href='#'>Download my Resume</Link>
    </section>
  )
}

export default About