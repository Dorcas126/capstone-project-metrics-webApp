import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../Redux/Actions/productActions';
import '../Styles/ProductDetail.css';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description, rating,
  } = product;
  const { productid } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch((err) => {
      console.log('Err', err);
    });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productid && productid !== '') fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productid]);

  return (
    <div className="DetailsPage">
      {Object.keys(product).length === 0 ? (
        <div><h3>...loading</h3></div>
      ) : (
        <>
          <div className="Home-header">
            <div className="image">
              <img className="image" src={image} alt={title} />
            </div>
            <h2>
              {title}
            </h2>
          </div>
          <div className="productDetail">
            <div className="productDescription">
              <div className="productDescription">
                Category:
                {category}
              </div>
              <div className="productDescription">
                Product Description:
                {description}
              </div>
              <div className="productDescription">
                Price:
                $
                {price}
              </div>
              <div className="productDescription">
                Count:
                {rating.count}
              </div>
              <div className="productDescription">
                Rating:
                {rating.rate}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
