import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addoffer.css';

const Addoffer = () => {

    //Post New Added data
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://grisly-broomstick-47369.herokuapp.com/data', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New Offer Added!!!');
                    reset();
                }
            })

    }

    return (

        //Add New Offer

        <div className="add-offer">
            <h2>Add New Offer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" {...register("id")} placeholder="Id" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("detail")} placeholder="Detail" />
                <input type="number" {...register("cost")} placeholder="Cost" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addoffer;