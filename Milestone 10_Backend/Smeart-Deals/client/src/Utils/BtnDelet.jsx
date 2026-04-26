import React from 'react';
import useAxiosInstant from '../Hooks/useAxiosInstant';

const BtnDelet = (_id) => {
    const axiosInstance = useAxiosInstant();

    const handleDeleteBtn = ()=>{
        axiosInstance.delete(`/products/${_id}`)
        .then(data=>{
            console.log(data.data)
        })
    }

    return (
        <button onClick={handleDeleteBtn}>
            Delete
        </button>
    );
};

export default BtnDelet;