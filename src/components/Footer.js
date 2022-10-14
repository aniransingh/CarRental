import { BsFacebook, BsInstagram, BsTwitter, BsSnapchat } from 'react-icons/bs';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-wrapper'>
                <ul className='social-links'>
                    <li className='social-link'>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <BsFacebook />
                        </a>
                    </li>
                    <li className='social-link'>
                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <BsInstagram />
                        </a>
                    </li>
                    <li className='social-link'>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <BsTwitter />
                        </a>
                    </li>
                    <li className='social-link'>
                        <a href='https://www.snapchat.com/' target='_blank' rel="noreferrer">
                            <BsSnapchat />
                        </a>
                    </li>
                </ul>
                <p className='legal'>
                    <span>©</span> Unique 2022. All rights reserved
                </p>
            </div>
        </section>
    );
};

export default Footer;
