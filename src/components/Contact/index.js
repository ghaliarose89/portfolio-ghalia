
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    function handleChange(e) {
        if (!e.target.name.length) {
            setErrorMessage(`${e.target.name} is required`);
        } else {
            setErrorMessage('')
        }
        if (e.target.name === 'email') {
            const isValid = validateEmail(email);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('your email is invalid')
            } else setErrorMessage('');
        }
       
        if (!errorMessage) { setFormState({ ...formState, [e.target.name]: e.target.value }); }
        console.log('errorMessage', errorMessage);

    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        setErrorMessage('Thank you for contacting Me! I will respond in 24h')

    }


    return (
        <section className='form-border'>
        <div className="text-center">
            <h1 className='contact-me form-border '>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Name:</label><br/>
                    <input type="text" name="name" defaultValue={name} onBlur ={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br/> <input type="email" name="email" defaultValue={email} onBlur ={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea name="message" rows="3" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                <button type="submit">Submit</button>
            </form>
            </div>
        </section>
    )
}

export default ContactForm 
