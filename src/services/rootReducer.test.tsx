import { expect, test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

describe('Initialization tests: rootReducer', () => {
  test('Initialization check: rootReducer', () => {
    const store = configureStore({
      reducer: rootReducer
    });

    const action = { type: 'UNKNOWN_ACTION' };
    const testState = rootReducer(undefined, action);
    expect(testState).toEqual(store.getState());
  });
});
