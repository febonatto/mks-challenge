import { test, describe, expect } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';

import { Header } from '@/app/(home)/components/Header';
import { Cart } from '@/app/(home)/components/Cart';

import { makeStore } from '@/config/lib/redux/store';

describe('Header', () => {
  test('click cart button must display cart component', () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );

    const cart = screen.getByTestId('cart-container');
    expect(cart).toHaveStyle({ transform: 'translateX(100%) translateZ(0)' });

    const button = screen.getByTestId('header-cart-toggle');
    fireEvent.click(button);

    waitFor(() => {
      expect(cart).toHaveStyle({ transform: 'translateX(0) translateZ(0)' });
    });
  });
});
