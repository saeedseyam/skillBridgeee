import React , {useState}from 'react'
import'./Contact.css'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import arrow from '../../assets/arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b3c1e8be-f181-450f-a320-198f5cfe5127");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className = 'contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><img src={phone} alt="" />Phone: 01557862096</li>
          <li> <img src={email} alt="" />saeedseyamweb2004@gmail.com</li>
          <li> <img src={location} alt="" />Tanta</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>your name</label>
          <input type="text"  name='name' placeholder='Enter your name' required/>
          <input type="tel"  name='phone' placeholder='Enter your phone number' required/>
          <label>Write your message here</label>
          <textarea name="message" id="" rows='6' placeholder='' required>Write your message here</textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
