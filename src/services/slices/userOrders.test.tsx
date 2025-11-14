import { describe, expect, test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import { ordersMockData } from './testData';
import {
  listOfOrders,
  initialState,
  userOrdersSlice,
  getUserOrders
} from './userOrders';

describe('Tests: Оrders', () => {
  test('Test selector: listOfOrders, ', () => {
    const store = configureStore({
      reducer: {
        orders: userOrdersSlice.reducer
      },
      preloadedState: {
        orders: ordersMockData
      }
    });
    const orderRequest = listOfOrders(store.getState());

    expect(orderRequest).toEqual(ordersMockData.orders);
  });

  test('Reducer test: getUserOrders, fulfilled check', () => {
    const newState = userOrdersSlice.reducer(
      initialState,
      getUserOrders.fulfilled(ordersMockData.orders, '')
    );
    expect(newState.orders).toEqual(ordersMockData.orders);
    expect(newState.isLoading).toEqual(false);
  });

  test('Reducer test: getUserOrders, rejected check', () => {
    const newState = userOrdersSlice.reducer(
      initialState,
      getUserOrders.rejected(new Error('error'), 'test error')
    );
    expect(newState.isLoading).toEqual(false);
  });

  test('Reducer test: getUserOrders, pending check', () => {
    const newState = userOrdersSlice.reducer(
      initialState,
      getUserOrders.pending('')
    );
    expect(newState.isLoading).toEqual(true);
  });
});
