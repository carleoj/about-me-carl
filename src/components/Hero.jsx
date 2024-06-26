import profileImage from '../assets/carl.jpg';
import Link from './Link.jsx';

const Hero = () => {
  return (
    <section className='hero divider'>
        <div className="image">
            <img src={profileImage} alt='Photo of Carl'/> 
        </div>
        <div>
            <h1>Carl Paño</h1>
            <p>BS Computer Science Student</p>
            <p>Davao City, PH</p>
            <Link href='#projects'>Check out my projects</Link>
        </div>
    </section>
  )
}

export default Hero