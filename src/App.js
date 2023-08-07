/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import AllProducts from './Containers/AllProducts';
import NewsCategory from './Containers/ProductDetail';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AllProducts />} />
      <Route path="/product/:productid" element={<NewsCategory />} />
      <Route>404 Not Found</Route>
    </Routes>
  </Router>
);

export default App;
