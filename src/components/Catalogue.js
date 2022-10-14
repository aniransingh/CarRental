import { useEffect, useState } from 'react';
import { catalogueCars } from '../data';

import { BsStarFill, BsSearch } from 'react-icons/bs';

const Catalogue = ({ catalogueRef }) => {
    const [cars, setCars] = useState(catalogueCars);
    const [search, setSearch] = useState('');

    const performSearch = () => {
        if (search === '') setCars(catalogueCars);
        else {
            setCars(
                cars.filter((car) => {
                    const match = {
                        company: car.company.toLowerCase().startsWith(search.toLowerCase()),
                        model: car.model.toLowerCase().startsWith(search.toLowerCase()),
                        color: car.color.toLowerCase().startsWith(search.toLowerCase()),
                        transmission: car.transmission
                            .toLowerCase()
                            .startsWith(search.toLowerCase()),
                    };

                    return match.company || match.model || match.color || match.transmission;
                })
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        performSearch();
    };

    useEffect(() => {
        performSearch();
    }, [search]);

    return (
        <section className='catalogue' ref={catalogueRef}>
            <div className='catalogue-wrapper'>
                <div className='catalogue-head'>
                    <h4>only the best cars</h4>
                    <h2>Our Vehicle Fleet</h2>
                    <p>
                        We provide our customers with the most incredible driving emotions. That's
                        why we have only world class cars in our fleet.
                    </p>
                </div>
                <div className='catalogue-menu'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className='input'
                            value={search}
                            placeholder='Search'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className='btn submit-btn'>
                            {' '}
                            <BsSearch />
                        </button>
                    </form>
                </div>
                <div className='catalogue-cars'>
                    {cars.map((car) => {
                        const {
                            id,
                            company,
                            model,
                            color,
                            seats,
                            rating,
                            price,
                            image,
                            transmission,
                        } = car;

                        return (
                            <article className={`car car-${color}`} key={id}>
                                <div className='row'>
                                    <div className='car-rating'>
                                        <BsStarFill />
                                        {rating}
                                    </div>
                                    <div className='car-img'>
                                        <img
                                            src={require(`../assets/${image}`)}
                                            alt={`${company} ${model}`}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='car-name'>
                                        {company} {model}
                                    </div>
                                    <div className='car-specs'>
                                        <span>{transmission}</span>
                                        <span> - {color}</span>
                                        <span> - {seats} seater</span>
                                    </div>
                                    <div className='car-price'>
                                        <span>{`$${price}`}</span>
                                        /day
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Catalogue;
