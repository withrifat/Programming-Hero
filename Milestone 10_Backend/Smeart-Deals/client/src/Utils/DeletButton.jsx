import React from 'react';
import Swal from 'sweetalert2';

const DeleteButton = ({ id, apiUrl, onDeleteSuccess, userEmail }) => {
    
    if (!userEmail) return null;

    const handleDelete = () => {
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
                fetch(`${apiUrl}/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        // ডিলিট সফল হওয়ার পর প্যারেন্ট কম্পোনেন্টকে জানানো
                        onDeleteSuccess(id);
                    }
                })
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: `Something went wrong: ${err.message}`
                    });
                });
            }
        });
    };

    return (
        <button 
            onClick={handleDelete} 
            className="btn btn-sm btn-outline btn-error px-4 hover:bg-error hover:text-white transition-all"
        >
            Reject
        </button>
    );
};

export default DeleteButton;