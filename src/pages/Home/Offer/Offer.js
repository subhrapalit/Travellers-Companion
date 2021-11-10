import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = ({ offer }) => {
    const { _id, name, description, detail, img } = offer;
    return (

        //Offer Section
        <div>
            <Card className='service' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ color: 'crimson' }}>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/booking/${_id}`}><Button variant="info">Book Now!</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Offer;