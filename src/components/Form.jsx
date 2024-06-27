import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  useEffect(() => {
    emailjs.init('0Vg9DbUbUL2GdA73Q'); // Replace with your user ID from EmailJS
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_vqzejpe', 'template_g8fcgsw', event.target)
      .then((response) => {
        alert('Email sent successfully!');
        event.target.reset(); // Reset the form after sending
      }, (error) => {
        alert('Failed to send email. Please try again later.');
        console.error('Email send error:', error);
      });
  };

  const style = {
    marginBottom: "130px",
    height: "200px",
    display: "grid"
  };

  const boxStyle = {
    height: "100px",
    padding: "30px",
    margin: "10px",
    borderRadius: "5px"
  };

  const inp = {
    height: "30px",
    borderRadius: "5px"
  };

  return (
    <div>
      <form style={style} id="contact-form" onSubmit={handleSubmit}>
        <h2>Send me an Email</h2>
        <input type="hidden" name="contact_number" value="697483" />
        <label>Name</label>
        <input style={inp} type="text" name="user_name" />
        <label>Email</label>
        <input style={inp} type="email" name="user_email" />
        <label>Message</label>
        <textarea style={boxStyle} className='inparea' name="message" />
        
        <input className='btn2' type="submit" value="Send" />
      </form>
      <br /><br /><br /><br />
    </div>
  );
};

export default Form;
