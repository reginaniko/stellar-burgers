import { describe, expect, test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import {
  userData,
  userDataUpdated,
  userRegisterData,
  userRegisterDataUpdated,
  userResponse,
  userResponseUpdated
} from './testData';
import {
  isAuthCheckedSelector,
  getUser,
  getName,
  getError,
  userSlice,
  initialState,
  register,
  login,
  apiGetUser,
  updateUser,
  logout
} from './user';

describe('Tests: User', () => {
  const stateConstructor = (action: { type: string; payload?: {} }) =>
    userSlice.reducer(initialState, action);

  test('Selectors tests: isAuthCheckedSelector, getUser, getName, getError', () => {
    const store = configureStore({
      reducer: {
        user: userSlice.reducer
      },
      preloadedState: {
        user: userData
      }
    });
    const isAuthChecked = isAuthCheckedSelector(store.getState());
    const user = getUser(store.getState());
    const name = getName(store.getState());
    const error = getError(store.getState());
    expect(isAuthChecked).toEqual(userData.isAuthChecked);
    expect(user).toEqual(userData.user);
    expect(name).toEqual(userData.user.name);
    expect(error).toEqual(userData.error);
  });

  test('Reducer test: register, fulfilled check', () => {
    const action = {
      type: register.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(userData);
  });

  test('Reducer test: register, rejected check', () => {
    const newState = userSlice.reducer(
      initialState,
      register.rejected(new Error('error'), 'test error', userRegisterData)
    );
    expect(newState.error).toEqual('error');
  });

  test('Reducer test: register, pending check', () => {
    const newState = userSlice.reducer(
      initialState,
      register.pending('', userRegisterData)
    );
    expect(newState.isAuthChecked).toEqual(false);
    expect(newState.error).toEqual('');
  });

  test('Reducer test: login, fulfilled check', () => {
    const action = {
      type: login.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(userData);
  });

  test('Reducer test: login, rejected check', () => {
    const newState = userSlice.reducer(
      initialState,
      login.rejected(new Error('error'), 'test error', userRegisterData)
    );
    expect(newState.error).toEqual('error');
    expect(newState.isAuthChecked).toEqual(false);
  });

  test('Reducer test: login, pending check', () => {
    const newState = userSlice.reducer(
      initialState,
      login.pending('', userRegisterData)
    );
    expect(newState.isAuthChecked).toEqual(false);
    expect(newState.error).toEqual('');
  });

  test('Reducer test: apiGetUser, fulfilled check', () => {
    const action = {
      type: apiGetUser.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(userData);
  });

  test('Reducer test: apiGetUser, rejected check', () => {
    const newState = userSlice.reducer(
      initialState,
      apiGetUser.rejected(new Error('error'), 'test error')
    );
    expect(newState.error).toEqual('error');
    expect(newState.isAuthChecked).toEqual(false);
  });

  test('Reducer test: updateUser, fulfilled check', () => {
    const action = {
      type: updateUser.fulfilled.type,
      payload: userResponseUpdated
    };
    expect(stateConstructor(action)).toEqual(userDataUpdated);
  });

  test('Reducer test: updateUser, rejected check', () => {
    const newState = userSlice.reducer(
      initialState,
      updateUser.rejected(
        new Error('error'),
        'ошибка теста',
        userRegisterDataUpdated
      )
    );
    expect(newState.error).toEqual('error');
    expect(newState.isAuthChecked).toEqual(false);
  });

  test('Reducer test: updateUser, pending check', () => {
    const newState = userSlice.reducer(
      initialState,
      updateUser.pending('', userRegisterDataUpdated)
    );
    expect(newState.isAuthChecked).toEqual(false);
    expect(newState.error).toEqual('');
  });

  test('Reducer test: logout, fulfilled check', () => {
    const action = {
      type: logout.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(initialState);
  });
});
