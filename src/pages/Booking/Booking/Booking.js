import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css'


const Booking = () => {

    //Post Booking Confimation Data
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://grisly-broomstick-47369.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for your Booking!!!');
                    reset();
                }
            })
    }

    // Get offer data
    const { offerId } = useParams();
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch(`https://grisly-broomstick-47369.herokuapp.com/data/${offerId}`)
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])




    return (
        <div>
            {/* Display Logged in User Name & Email */}

            <div className='ms-3'>
                <h1 className='text-danger'>Confirm Your Booking</h1>
                <h2 className='text-success'>Welcome: {user?.displayName} </h2>
                <p className='text-primary fw-bolder'> Your Email is: {user.email}</p>

            </div>

            {/* Display Offer Details */}

            <div>
                <h3>Offer Details: <span className='text-primary'>{offers.name}</span> </h3>
                <img src={offers.img} alt="" />
                <p className='fw-bolder'>{offers.detail}</p>
                <h5>Price Per Person: {offers.cost} Tk.</h5>
            </div>


            {/* Form Fill-up for Booking Confirmation */}

            <div>
                <div className='booking pt-5'>
                    <h1 className='text-danger'>Fill to Book </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input type="number" {...register("contact")} placeholder="Your Contact Number" />
                        <input type="number" {...register("amount")} placeholder="Number of Persons" />
                        <input defaultValue={offers.name} {...register("offer", { required: true })} />


                        <input type="submit" />
                    </form>
                </div>

            </div>


        </div>
    );
};

export default Booking;