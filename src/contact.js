import React from 'react'
// import emailjs from "emailjs-com"

import './contact.css'
function Contact() {
    return (
        <div className='contact component__space' id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                            <p className="hire__text__white">I am available for freelance work. Connect with me via phone:</p>
                            <p className="hire__text__white"><strong>+99893 428 4744</strong> or email <strong>fazliddinmurabiddinovich@gmail.com  & </strong><strong>dasturchiiio8o7@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact__name" placeholder='Your name *' />
                            <input type="text" className="contact__email" placeholder='Your email *' />
                            <input type="text" className="contact__subject" placeholder="Write a subject" />
                            <textarea name="massage" id="massage" placeholder='Write your massage' ></textarea>
                            <button className='btn contact pointer' type='Submit'>Submit</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
