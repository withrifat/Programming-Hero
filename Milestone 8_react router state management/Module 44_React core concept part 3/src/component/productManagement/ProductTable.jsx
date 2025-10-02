import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Product List</h3>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <th>No: </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;