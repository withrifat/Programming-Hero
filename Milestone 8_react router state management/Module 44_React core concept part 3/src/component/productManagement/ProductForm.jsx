import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError] = useState('');

    const handleProductSubmit = (event) => {    
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        // validation 
        if(name.length === 0 || price.length === 0 || quantity.length === 0){
            setError('Please fill all the fields');
            return;
        } else {
            error('');
        }
        form.reset();
        // create a product object

        
        const newProduct = {
            name, 
            price,
            quantity
        }
        if(!error){
            handleAddProduct(newProduct);
        }
    }


    return (
        <div>
                <h3>add a product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' className='input w-full' /> <br />
                <input type="number" name='price' placeholder='Product Price' className='input w-full' /> <br />
                <input type="text" name='quantity' placeholder='Product Quantity' className='input w-full' /> <br />
                <input type="submit" value="Add Product" className='btn' />
            </form>
            <p className='text-red-500'>{error}</p>
        </div>
    );
};

export default ProductForm;