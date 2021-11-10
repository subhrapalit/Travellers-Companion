import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../Home/Offers/Offers.css'

const Manageoffer = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('https://grisly-broomstick-47369.herokuapp.com/data')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])

    const handleDelete = id => {
        const url = `https://grisly-broomstick-47369.herokuapp.com/data/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Sure to Delete This Offer?')
                    const remaining = offers.filter(offer => offer._id !== id);
                    setOffers(remaining);

                }

            })

    }
    return (
        <div className='mx-5 px-5'>
            <h2 className='text-danger mt-5'>All offers</h2>
            <div className="offer-container">
                {
                    offers.map(offer => <div
                        key={offer._id}>
                        <Card className='service' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={offer.img} />
                            <Card.Body>
                                <Card.Title style={{ color: 'crimson' }}>{offer.name}</Card.Title>
                                <Card.Text>
                                    {offer.description}
                                </Card.Text>
                                <Button onClick={() => handleDelete(offer._id)} variant="info">Delete Offer</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Manageoffer;