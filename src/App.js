import { useRef } from 'react';

import Catalogue from './components/Catalogue';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

const App = () => {
    const featuresRef = useRef(null);
    const catalogueRef = useRef(null);
    const newsletterRef = useRef(null);

    return (
        <>
            <Navbar
                featuresRef={featuresRef}
                catalogueRef={catalogueRef}
                newsletterRef={newsletterRef}
            />
            <Hero />
            <Features featuresRef={featuresRef} />
            <Catalogue catalogueRef={catalogueRef} />
            <Newsletter newsletterRef={newsletterRef} />
            <Footer />
        </>
    );
};

export default App;
