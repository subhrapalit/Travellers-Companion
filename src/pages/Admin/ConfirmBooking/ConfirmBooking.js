import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './ConfirmBooking.css'

const ConfirmBooking = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
    return (
        <div>
            <div className='booking pt-5'>
                <h1 className='text-danger'>Fill to Book </h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input type="number" {...register("contact")} placeholder="Your Contact Number" />
                    <input type="number" {...register("amount")} placeholder="Number of Persons" />
                    <input {...register("offer", { required: true, maxLength: 30 })} placeholder="Offer Name You Want to Book" />

                    {/* <input ref={register} type="file" name="picture" /> */}
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default ConfirmBooking;