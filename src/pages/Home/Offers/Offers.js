import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import './Offers.css';

const Offers = () => {

    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('https://grisly-broomstick-47369.herokuapp.com/data')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (
        <div id='offers'>
            <h2 className='text-danger mt-5'>Our Latest Offers</h2>
            <div className="offer-container px-5">
                {
                    offers.map(offer => <Offer
                        key={offer._id}
                        offer={offer}
                    ></Offer>)
                }
            </div>

        </div>
    );
};

export default Offers;