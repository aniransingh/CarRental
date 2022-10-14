import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com'

import { BsArrowRight } from 'react-icons/bs';

const Newsletter = ({ newsletterRef }) => {
    const [email, setEmail] = useState('');
    const [randomColor, setRandomColor] = useState(250);
    const form = useRef();

    useEffect(() => {
        let rainbow = setInterval(() => {
            setRandomColor(Math.floor(Math.random() * 361));
        }, 1000);

        return () => clearInterval(rainbow);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kgnsywl', 'template_1qx2efs', form.current, 'B4PGZ42iv4bLrDS5A')
            .then(
                (result) => {
                    alert('Success')
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className='newsletter' ref={newsletterRef}>
            <div className='newsletter-wrapper'>
                <h2 style={{ color: `hsl(${randomColor}, 100%, 59%)` }}>
                    Subscribe to our newsletter
                </h2>
                <form className='newsletter-form' ref={form} onSubmit={sendEmail}>
                    <input
                        className='input'
                        type='text'
                        value={email}
                        name='email'
                        placeholder='Your email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='btn submit-btn'>
                        <BsArrowRight />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
