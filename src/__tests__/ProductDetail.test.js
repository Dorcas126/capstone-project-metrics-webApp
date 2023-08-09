import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import '@testing-library/jest-dom';
import ProductDetail from '../Containers/ProductDetail';

const renderContents = () => render(
  <Provider store={store}>
    <ProductDetail />
  </Provider>,
);

describe('Check if loading is available in the page to avoid bad user experience', () => {
  test('Loading should be available in product detail page', () => {
    renderContents();
    const productDescription = screen.getByText('...loading');
    expect(productDescription).toBeInTheDocument();
  });
});
