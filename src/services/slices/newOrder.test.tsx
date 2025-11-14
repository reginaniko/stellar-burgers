import { describe, expect, test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import { orderMockData, orderReceivedMockData } from './testData';
import {
  getOrderModalData,
  getOrderRequest,
  newOrderSlice,
  placeNewOrder,
  initialState,
  resetOrder
} from './newOrder';

describe('Tests: Order', () => {
  test('Selector tests: getOrderRequest, getOrderModalData', () => {
    const store = configureStore({
      reducer: {
        newOrder: newOrderSlice.reducer
      },
      preloadedState: {
        newOrder: orderMockData
      }
    });
    const orderRequest = getOrderRequest(store.getState());
    const modal = getOrderModalData(store.getState());

    expect(orderRequest).toEqual(orderMockData.orderRequest);
    expect(modal).toEqual(orderMockData.orderModalData);
  });

  test('resetOrder reducer test', () => {
    const state = {
      orderRequest: true,
      orderModalData: orderReceivedMockData.order,
      error: 'undefined'
    };
    const stateReceived = newOrderSlice.reducer(state, resetOrder());
    expect(stateReceived).toEqual(initialState);
  });

  test('Reducer test: placeNewOrder, fulfilled check', () => {
    const newState = newOrderSlice.reducer(
      initialState,
      placeNewOrder.fulfilled(orderReceivedMockData, '', [''])
    );
    expect(newState.orderRequest).toEqual(false);
    expect(newState.orderModalData).toEqual(orderReceivedMockData.order);
  });

  test('Reducer test: placeNewOrder, rejected check', () => {
    const newState = newOrderSlice.reducer(
      initialState,
      placeNewOrder.rejected(new Error('error'), 'test error', [''])
    );
    expect(newState.error).toEqual('error');
  });

  test('Reducer test: placeNewOrder, pending check', () => {
    const newState = newOrderSlice.reducer(
      initialState,
      placeNewOrder.pending('', [])
    );
    expect(newState.orderRequest).toEqual(true);
  });
});
