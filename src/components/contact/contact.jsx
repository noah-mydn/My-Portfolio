import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

export default function Contact() {

    const [formData, setFormData]= React.useState({
        firstName:'',
        lastName:'',
        user_email:'',
        message:''
    });

    const contactFormData = React.useRef();

    function handleFormOnChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]:event.target.value
            };
        })
    }

    function sendEmail(e) {
        
            e.preventDefault();
        
            emailjs.sendForm('service_f8zngqe', 'noah_emailTemplate', contactFormData.current, 'aIlqBCghO9tJsXoQE')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });

             setFormData({firstName:'',lastName:'',user_email:'',message:''});
    }


  return (
    <motion.div className='contact row' id='contact'
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}>
        <h1>Get In Touch!</h1>
        <div className='contact_socials'>
            <a href='https://twitter.com/noah_mydn' target='_blank'>
                <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href='https://www.linkedin.com/in/may-yadanar-noah-8a95131bb/' target='_blank'>
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href='https://codepen.io/noah-mydn' target='_blank'>
                <i className="fa-brands fa-codepen"></i>
            </a>
            <a href='https://github.com/noah-mydn' target='_blank'>
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <form className='contactMe_form form' onSubmit={sendEmail} ref={contactFormData}>

            <div className='row name'>
                <div className='col'>
                    <label className='contact_label'>First Name</label>
                    <input type='text' name='firstName' required
                    className='form-input' 
                    value={formData.firstName} onChange={handleFormOnChange}/>
                </div>
                <div className='col'>
                    <label className='contact_label'>Last Name</label>
                    <input type='text' name='lastName' required
                    className='form-input' 
                    value={formData.lastName} onChange={handleFormOnChange}/>
                </div>
            </div>
            
            <label className='contact_label'>Email Address</label>
            <input type='email' name='user_email' required
            className='form-input'
            value={formData.user_email} onChange={handleFormOnChange}/>

            <label className='contact_label'>Your Message</label>
            <textarea name='message' value={formData.message}
            className='form-input' required
            onChange={handleFormOnChange}></textarea>

            <input type='submit' value='Send Message' className='btn form_btn'/>
        </form>
    </motion.div>
  )
}
