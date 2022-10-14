import { BiTime, BiCheckShield } from 'react-icons/bi';
import { BsLightningCharge } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';

const Features = ({ featuresRef }) => {
    return (
        <section className='features' ref={featuresRef}>
            <div className='features-wrapper'>
                <div className='features-head'>
                    <h4>taking care of every client</h4>
                    <h2>Key Features</h2>
                    <p>
                        We are all about our client's comfort and safety. That's why we provide the
                        best service you can imagine.
                    </p>
                </div>
                <div className='features-cards'>
                    <article className='feature-card'>
                        <div className='icon time-icon'>
                            <BiTime />
                        </div>
                        <h3>24-hour car delivery</h3>
                    </article>
                    <article className='feature-card'>
                        <div className='icon support-icon'>
                            <MdSupportAgent />
                        </div>
                        <h3>24/7 technical support</h3>
                    </article>
                    <article className='feature-card'>
                        <div className='icon charge-icon'>
                            <BsLightningCharge />
                        </div>
                        <h3>All models have a premium package</h3>
                    </article>
                    <article className='feature-card'>
                        <div className='icon shield-icon'>
                            <BiCheckShield />
                        </div>
                        <h3>Absolute confidentiality</h3>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Features;
