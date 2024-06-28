import {Icons} from './Icons.jsx'

const Contact = () => {
  return (
    
    <section className='contact' id='contact'>
        <h2>Contact</h2>
        <p>Let&apos;s connect and create together.</p>
            <div className="socials-container">
                <a href="https://www.facebook.com/carljimroe.m.pano/" target='_blank'>
                    <Icons.facebook />
                </a>
                <a href="https://x.com/JimroeP49159" target='_blank'>
                    <Icons.twitter />
                </a>
                <a href="www.linkedin.com/in/jimroe-p-0b3959316">
                    <Icons.linkedin />
                </a>
                <a href="https://www.instagram.com/ca_rl_p/" target='_blank'>
                    <Icons.instagram />
                </a>
                <a href="https://github.com/carleoj?tab=repositories" target='_blank'>
                    <Icons.github />
                </a>
            </div>
    </section>
  )
}

export default Contact