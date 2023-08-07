import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import '@testing-library/jest-dom';
import ProductComponent from '../Containers/ProductComponents';

const renderContents = () => render(
  <Provider store={store}>
    <ProductComponent />
  </Provider>,
);

describe('Check if loading is available in the page to avoid bad user experience', () => {
  test('Loading should be available in product detail page', () => {
    renderContents();
    const productcomponent = screen.getByText('...loading');
    expect(productcomponent).toBeInTheDocument();
  });
});
