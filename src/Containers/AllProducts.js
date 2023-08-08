import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponents';
import { myProducts } from '../Redux/Actions/productActions';

const AllProducts = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(myProducts(response.data));
    } catch (error) {
      throw new Error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default AllProducts;
