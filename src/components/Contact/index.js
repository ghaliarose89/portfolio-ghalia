
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
            <div class="container">
            <div className="justify-content-center">
                            <h1 className='text-center'>Contact me</h1></div>
                <div class="row">
                    <div class="col">
                        <div className="justify-content-center">
                            
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name"> Name:</label><br />
                                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email address:</label>
                                    <br /> <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label><br />
                                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                                </div>
                                {errorMessage && (
                                    <div>
                                        <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col">
                        <section>
                            <ul>
                            
                           <br/><br/><br/>
                            <h3 className='contact-me'>Reach Me:</h3>
                            <li>
                            Phone Number: (832-8733889)
                            </li>
                            <li>
                            Email: <a href="mailto:ghaliarose89@gmail.com">
                            ghaliarose89@gmail.com</a>
                            </li>
                           <li>
                           LinkedIn Profile: <a
                           href="https://www.linkedin.com/in/ghalia-sami-063a6a122/">Ghalia Sami</a>
                           </li>
                            </ul>
                        </section>
                    </div>
                    </div>


                </div></div>
        </section>
    )
}

export default ContactForm 
