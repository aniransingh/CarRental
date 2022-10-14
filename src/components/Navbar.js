import { useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { IoCarSportSharp } from 'react-icons/io5';
import { CgMenuRight } from 'react-icons/cg';

const Navbar = ({ featuresRef, catalogueRef, newsletterRef }) => {
    const [showMenu, setShowMenu] = useState(false);

    showMenu ? disableBodyScroll(document) : enableBodyScroll(document);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setShowMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [count, setCount] = useState(0);
    const [surprise, setSurprise] = useState(false);
    if (!surprise && count > 5) setSurprise(true);

    return (
        <nav className='nav'>
            <div className='nav-wrapper'>
                <div className='nav-brand'>
                    <IoCarSportSharp />
                    <h1>Unique</h1>
                </div>
                <button className='btn nav-toggle-btn' onClick={() => setShowMenu(!showMenu)}>
                    <CgMenuRight />
                </button>
                <ul className={showMenu ? 'nav-links hamburger' : 'nav-links'}>
                    <div className={showMenu ? 'hamburger-head' : 'hidden'}>
                        <button
                            className='btn nav-toggle-btn close-btn'
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <CgMenuRight />
                        </button>
                    </div>
                    <li
                        className='nav-link'
                        onClick={() => {
                            setShowMenu(false);
                            window.scrollTo({
                                top:
                                    catalogueRef.current.getBoundingClientRect().top -
                                    document.body.getBoundingClientRect().top -
                                    99,
                            });
                        }}
                    >
                        Cars
                    </li>
                    <li
                        className='nav-link'
                        onClick={() => {
                            setShowMenu(false);
                            window.scrollTo({
                                top:
                                    featuresRef.current.getBoundingClientRect().top -
                                    document.body.getBoundingClientRect().top -
                                    99,
                            });
                        }}
                    >
                        Features
                    </li>
                    <li
                        className='nav-link'
                        onClick={() => {
                            setShowMenu(false);
                            window.scrollTo({
                                top:
                                    newsletterRef.current.getBoundingClientRect().top -
                                    document.body.getBoundingClientRect().top -
                                    99,
                            });
                        }}
                    >
                        Newsletter
                    </li>
                    {surprise ? (
                        <li className='nav-link'>
                            <a
                                href='https://www.youtube.com/watch?v=nZBJnSvGAf0&ab_channel=Soul'
                                className='amongus'
                            >
                                Amongus ?
                            </a>
                        </li>
                    ) : (
                        <li className='nav-link' onClick={() => setCount(count + 1)}>
                            Help
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
