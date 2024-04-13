import { test, describe, expect } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';

import { Header } from '@/app/(home)/components/Header';
import { Cart } from '@/app/(home)/components/Cart';

import { makeStore } from '@/config/lib/redux/store';
import { increaseItem } from '@/config/lib/redux/features/cart/cartSlice';
import { productsResponse } from '@/config/mocks/products';
import { formatCurrency } from '@/config/utils/formatCurrency';

describe('Cart', () => {
  test('click close button must hide cart component', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );

    const cart = screen.getByTestId('cart-container');
    expect(cart).toHaveStyle({ transform: 'translateX(100%) translateZ(0)' });

    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    waitFor(() => {
      expect(cart).toHaveStyle({ transform: 'translateX(0) translateZ(0)' });
    });

    const cartButton = screen.getByTestId('cart-toggle-cart');
    fireEvent.click(cartButton);

    waitFor(() => {
      expect(cart).toHaveStyle({ transform: 'translateX(100%) translateZ(0)' });
    });
  });

  test('click remove item must remove the item', () => {
    const store = makeStore();
    store.dispatch(increaseItem(productsResponse.products[0]));

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );
    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    let item = screen.queryByTestId('cart-item');
    expect(item).toBeInTheDocument();

    const removeButton = screen.getByTestId('button-remove-item');
    fireEvent.click(removeButton);

    item = screen.queryByTestId('cart-item');
    expect(item).toBeNull();
  });

  test('click plus button must increase the item by 1', () => {
    const store = makeStore();
    store.dispatch(increaseItem(productsResponse.products[0]));

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );
    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    const item = screen.getByTestId('cart-item');
    expect(item).toBeInTheDocument();

    let itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('1');

    const increaseButton = screen.getByTestId('increase-item-button');
    fireEvent.click(increaseButton);

    itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('2');
  });

  test('click minus button must decrease the item by 1', () => {
    const store = makeStore();
    store.dispatch(increaseItem(productsResponse.products[0]));
    store.dispatch(increaseItem(productsResponse.products[0]));

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );
    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    const item = screen.getByTestId('cart-item');
    expect(item).toBeInTheDocument();

    let itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('2');

    const decreaseButton = screen.getByTestId('decrease-item-button');
    fireEvent.click(decreaseButton);

    itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('1');
  });

  test('if item quantity is equal to 1 and click minus button must remove the item', () => {
    const store = makeStore();
    store.dispatch(increaseItem(productsResponse.products[0]));

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );
    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    let item = screen.queryByTestId('cart-item');
    expect(item).toBeInTheDocument();

    const itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('1');

    const decreaseButton = screen.getByTestId('decrease-item-button');
    fireEvent.click(decreaseButton);

    item = screen.queryByTestId('cart-item');
    expect(item).toBeNull();
  });

  test('if item quantity is equal to 1 and click minus button must remove the item', () => {
    const store = makeStore();
    store.dispatch(increaseItem(productsResponse.products[0]));

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );
    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    let item = screen.queryByTestId('cart-item');
    expect(item).toBeInTheDocument();

    const itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('1');

    const decreaseButton = screen.getByTestId('decrease-item-button');
    fireEvent.click(decreaseButton);

    item = screen.queryByTestId('cart-item');
    expect(item).toBeNull();
  });

  test('span price must be equal product * quantity', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );
    store.dispatch(increaseItem(productsResponse.products[0]));
    const cartItem = store.getState().cart.cartItems[0];

    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    const item = screen.queryByTestId('cart-item');
    expect(item).toBeInTheDocument();

    let itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('1');

    let itemAmountPrice = screen.getByTestId('item-amount-price');
    expect(itemAmountPrice.textContent).toBe(
      formatCurrency(
        parseInt(itemQuantity.textContent || '0') *
          parseInt(cartItem.product.price),
      ),
    );

    const increase = screen.getByTestId('increase-item-button');
    fireEvent.click(increase);

    itemQuantity = screen.getByTestId('item-quantity');
    expect(itemQuantity.textContent).toBe('2');

    itemAmountPrice = screen.getByTestId('item-amount-price');
    expect(itemAmountPrice.textContent).toBe(
      formatCurrency(
        parseInt(itemQuantity.textContent || '0') *
          parseInt(cartItem.product.price),
      ),
    );
  });

  test('Total price span must equal the sum of each product price multiplied by its quantity', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>,
    );
    store.dispatch(increaseItem(productsResponse.products[0]));
    store.dispatch(increaseItem(productsResponse.products[1]));
    store.dispatch(increaseItem(productsResponse.products[1]));
    const cartItems = store.getState().cart.cartItems;

    const headerButton = screen.getByTestId('header-cart-toggle');
    fireEvent.click(headerButton);

    const totalPrice = cartItems.reduce(
      (acc, item) => acc + parseInt(item.product.price) * item.quantity,
      0,
    );

    const spanTotalPrice = screen.getByTestId('cart-total-price');
    expect(spanTotalPrice.textContent).toBe(formatCurrency(totalPrice));
  });
});
