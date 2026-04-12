import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/latest-products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        // setLoading(false);
      });
  }, []);


  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center py-20">
  //       <span className="loading loading-dots loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {
          products.map(products => (
            <ProductCard key={products._id} products={products}></ProductCard>
          ))
         }
      </div>
    </div>
  );
};

export default LatestProducts;
