import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../Redux/Actions/productActions';
import '../Styles/ProductDetail.css';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description, rating,
  } = product;
  const { productid } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = useCallback(async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((err) => {
        throw new Error('Err', err);
      });
    dispatch(selectedProduct(response.data));
  }, [productid, dispatch]);

  useEffect(() => {
    if (productid && productid !== '') {
      fetchProductDetail();
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productid, fetchProductDetail, dispatch]); // Include dispatch in the dependency array

  return (
    <div className="DetailsPage">
      {Object.keys(product).length === 0 ? (
        <div>
          <h3>...loading</h3>
        </div>
      ) : (
        <>
          <div className="Home-header">
            <div className="image">
              <img className="image" src={image} alt={title} />
            </div>
            <h2>{title}</h2>
          </div>
          <div className="productDetail">
            <div className="productDescriptions">
              <div className="productDescription">
                <div>Category:</div>
                <div>{category}</div>
              </div>
              <div className="productDescription">
                <div>Description:</div>
                <div>{description}</div>
              </div>
              <div className="productDescription">
                <div>Price: </div>
                <div>
                  $
                  {price}
                </div>
              </div>
              <div className="productDescription">
                <div>Count:</div>
                <div>{rating.count}</div>
              </div>
              <div className="productDescription">
                <div>Rating:</div>
                <div>{rating.rate}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
