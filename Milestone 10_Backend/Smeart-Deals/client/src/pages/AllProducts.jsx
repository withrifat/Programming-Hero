import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import useAxios from '../Hooks/useAxiosInstant';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const axiosInstance = useAxios();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/products')
    .then(data => {
      setProducts(data.data);
    })
  }, [axiosInstance]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching products:', err);
  //     });
  // }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl text-center my-6">
        All <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {products.map((products) => (
          <ProductCard key={products._id} products={products}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
