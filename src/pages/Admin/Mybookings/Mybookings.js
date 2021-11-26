import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Mybookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://grisly-broomstick-47369.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    //Delete Booking
    const handleDelete = id => {
        const url = `https://grisly-broomstick-47369.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Sure to Delete this Booking?')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);

                }

            })

    }




    return (

        //Display All Confirmed Bookings
        <div>

            <div className='mx-5 px-5'>
                <h2 className='text-success mt-5'>Here is My Bookings</h2>
                <div className="offer-container">
                    {
                        bookings.map(booking => <div
                            key={booking._id}>
                            <Card className='service' style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title style={{ color: 'crimson' }}>{booking.offer}</Card.Title>
                                    <Card.Text> Booked By:
                                        {booking.name} <br />
                                        Booked For: {booking.amount} Persons <br />

                                    </Card.Text>
                                    <Button onClick={() => handleDelete(booking._id)} variant="info">Delete Booking</Button>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Mybookings;