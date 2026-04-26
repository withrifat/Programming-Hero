import React from 'react';
import useAxiosInstant from '../Hooks/useAxiosInstant';
import Swal from 'sweetalert2'; 

const BtnDelet = ({ id, setProducts, products }) => {
    const axiosInstance = useAxiosInstant();

    const handleDeleteBtn = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/products/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your product has been deleted.", "success");

                            const remaining = products.filter(prod => prod._id !== id);
                            setProducts(remaining);
                        }
                    })
                    .catch(error => {
                        console.error("Delete Error:", error);
                    });
            }
        });
    };

    return (
        <button 
            onClick={handleDeleteBtn}
            className="px-3 py-1 border border-red-400 text-red-500 text-xs rounded hover:bg-red-500 hover:text-white transition-all">
            Delete
        </button>
    );
};

export default BtnDelet;