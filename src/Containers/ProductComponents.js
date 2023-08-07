import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import '../Styles/Products.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.products.products);
  const [q, setQ] = useState('');
  const [searchParam] = useState(['title']);

  function search(products) {
    return products.filter((product) => searchParam.some((newItem) => (
      product[newItem]
        .toString()
        .toLowerCase()
        .indexOf(q.toLowerCase()) > -1
    )));
  }

  return (
    <>
      <div>
        <h2 className="Home-header">
          Number of Products:
          {products.length}
        </h2>
      </div>
      <div className="Home-search">
        <form>
          <input type="search" placeholder="Search Product" value={q} onChange={(e) => setQ(e.target.value)} />
        </form>
      </div>
      <div className="listProducts">
        {Object.keys(products).length === 0 ? (
          <div><h3>...loading</h3></div>
        ) : (
          <div className="productPage">
            { search(products).map((product) => (
              <div key={product.id} className="productCard">
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <div className="fowardArrowSect">
                    <div className="fowardArrow"><FaArrowRight /></div>
                  </div>
                  <div className="productCard1">
                    <div>
                      <img className="products-image" src={product.image} alt={product.title} />
                    </div>
                    <div className="productTitle">{ product.title }</div>
                  </div>
                </Link>
              </div>
            ))}
            ;
          </div>
        )}
      </div>
    </>
  );
};

export default ProductComponent;
