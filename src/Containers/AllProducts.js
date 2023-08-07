import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponents';
import { myProducts } from '../Redux/Actions/productActions';

const AllProducts = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log('Err', err);
    });
    dispatch(myProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('Products: ', products);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default AllProducts;
