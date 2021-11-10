import React from 'react';
import { useHistory } from 'react-router';

const Admin = () => {
    const history = useHistory();

    const handleAddoffer = () => {

        history.push('/addoffer');
    }
    const handleManageOffer = () => {

        history.push('/manageoffer');
    }
    const handleMyBookings = () => {

        history.push('/mybookings');
    }
    return (

        //Admin Dashboard Section
        <div id='admin' className='p-5 m-5'>
            <h3>Admin Dashboard</h3>

            <button onClick={handleAddoffer} className="btn-success p-2 m-3">Add New Offer</button>
            <button onClick={handleManageOffer} className="btn-warning p-2 m-3">Manage Offers</button>
            <button onClick={handleMyBookings} className="btn-danger p-2 m-3">My Bookings</button>





        </div>
    );
};

export default Admin;