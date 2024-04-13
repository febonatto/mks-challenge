import { test, describe, expect } from '@jest/globals';
import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { Provider } from 'react-redux';

import { Products } from '@/app/(home)/components/Products';

import { makeStore } from '@/config/lib/redux/store';
import { QueryClientProviderComponent } from '@/config/lib/QueryClientProviderComponent';

describe('Product', () => {
  test('page home must have one or more items', () => {
    const store = makeStore();

    render(
      <QueryClientProviderComponent>
        <Provider store={store}>
          <Products />
        </Provider>
      </QueryClientProviderComponent>,
    );

    waitFor(() => {
      const homeItems = screen.getAllByTestId('home-product-item');
      homeItems.forEach((item) => {
        expect(item).toBeInTheDocument();
      });
    });
  });

  test('buy item button must add the cliecked product to cart', async () => {
    const store = makeStore();

    render(
      <QueryClientProviderComponent>
        <Provider store={store}>
          <Products />
        </Provider>
      </QueryClientProviderComponent>,
    );

    const homeItems = await waitFor(() => {
      return screen.getAllByTestId('home-product-item');
    });
    expect(homeItems.length).toBeGreaterThan(0);

    const htmlItemsName = await waitFor(() => {
      return screen.getAllByTestId('home-item-name');
    });
    const itemsName = htmlItemsName.map(
      (itemName) => itemName.textContent || '',
    );

    const buyButton = screen.getAllByTestId('buy-item-button');
    fireEvent.click(buyButton[0]);

    const cartItems = store.getState().cart.cartItems;
    expect(cartItems[0].product.name).toBe(itemsName[0]);
  });

  test('pagination button should change the page', async () => {
    const store = makeStore();

    render(
      <QueryClientProviderComponent>
        <Provider store={store}>
          <Products />
        </Provider>
      </QueryClientProviderComponent>,
    );

    const pagination = screen.getByTestId('pagination');
    const paginationButtons = pagination.querySelectorAll('button');
    const buttonPageTwo = paginationButtons[2];

    let homeItems = await waitFor(() => {
      return screen.getAllByTestId('home-product-item');
    });
    const firstItemName = homeItems[0].querySelector(
      '[data-testid=home-item-name]',
    );

    fireEvent.click(buttonPageTwo);
    homeItems = await waitFor(() => {
      return screen.getAllByTestId('home-product-item');
    });

    const firstItemNameAfterPageChange = homeItems[0].querySelector(
      '[data-testid=home-item-name]',
    );

    expect(firstItemNameAfterPageChange?.textContent).not.toBe(
      firstItemName?.textContent,
    );
  });
});
