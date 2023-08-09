import React from 'react';
import { FaChevronLeft, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-bar">
      <button onClick={() => navigate(-1)} type="button">
        <div><FaChevronLeft /></div>
      </button>
      <h1>UDorcy Store</h1>
      <div><FaCog /></div>
    </div>
  );
};

export default Header;
