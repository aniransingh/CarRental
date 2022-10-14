import { useEffect, useState } from 'react';
import { carouselSlides } from '../data';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Hero = () => {
    const [slides, setSlides] = useState(carouselSlides);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = slides.length - 1;

        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [slides, index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);

        return () => clearInterval(slider);
    }, [index]);

    let sliderOptions = {
        desc: '',
        origin: '',
    };

    return (
        <section className='hero'>
            <div className='carousel'>
                <div className='carousel-slider'>
                    <div className='carousel-text'>
                        <h2>
                            Premium
                            <br />
                            Car Rental
                        </h2>
                        <p>
                            Don't deny yourself the pleasure of
                            <br />
                            driving the best premium cars from
                            <br />
                            around the world here and now.
                        </p>
                    </div>
                    <div className='carousel-slides'>
                        {slides.map((slide, slideIndex) => {
                            const { id, image, desc, origin } = slide;

                            let position = 'next-slide';
                            if (slideIndex === index) {
                                position = 'active-slide';
                                sliderOptions.desc = desc;
                                sliderOptions.origin = origin;
                            }
                            if (
                                slideIndex === index - 1 ||
                                (index === 0 && slideIndex === slides.length - 1)
                            )
                                position = 'last-slide';

                            return (
                                <article className={`slide ${position}`} key={id}>
                                    <img src={require(`../assets/${image}.png`)} alt={desc} />
                                </article>
                            );
                        })}
                    </div>
                </div>
                <div className={`carousel-desc ${sliderOptions.origin}-grad`}>
                    <p className='slider-desc'>{sliderOptions.desc}</p>
                </div>
                <div className='carousel-control'>
                    <div className='carousel-control-wrapper'>
                        <button
                            className='btn slide-btn slide-change-btn'
                            onClick={() => setIndex(index - 1)}
                        >
                            <BsArrowLeft />
                        </button>
                        <div className='button-group'>
                            {slides.map((slide, slideIndex) => {
                                const { name } = slide;

                                let active = false;
                                if (slideIndex === index) active = true;

                                return (
                                    <button
                                        className={
                                            active
                                                ? 'btn slide-btn slide-value-btn active-value'
                                                : 'btn slide-btn slide-value-btn'
                                        }
                                        onClick={() => setIndex(slideIndex)}
                                        key={slideIndex + 10}
                                    >
                                        <img src={require(`../assets/${name}-logo.png`)} alt='' />
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            className='btn slide-btn slide-change-btn'
                            onClick={() => setIndex(index + 1)}
                        >
                            <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
