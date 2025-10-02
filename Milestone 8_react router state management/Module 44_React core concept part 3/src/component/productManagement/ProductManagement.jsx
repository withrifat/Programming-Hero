import React, { useState } from 'react';
import Container from '../tempComp/Container';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([]);


    const handleAddProduct = (product) => {
        const newProducts = [...products, product];
        setProducts(newProducts);
    }

    return (
        <Container>
            <ProductForm handleAddProduct={handleAddProduct} />
            <ProductTable products={products} />
        </Container>
    );
};

export default ProductManagement;