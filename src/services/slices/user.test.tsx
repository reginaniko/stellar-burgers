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

describe('Тесты User', () => {
  const stateConstructor = (action: { type: string; payload?: {} }) =>
    userSlice.reducer(initialState, action);

  test('Тесты селекторов isAuthCheckedSelector, getUser, getName, getError', () => {
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

  test('Тесты редьюсера register, проверка fulfilled', () => {
    const action = {
      type: register.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(userData);
  });

  test('Тесты редьюсера register, проверка rejected', () => {
    const newState = userSlice.reducer(
      initialState,
      register.rejected(new Error('error'), 'ошибка теста', userRegisterData)
    );
    expect(newState.error).toEqual('error');
  });

  test('Тесты редьюсера register, проверка pending', () => {
    const newState = userSlice.reducer(
      initialState,
      register.pending('', userRegisterData)
    );
    expect(newState.isAuthChecked).toEqual(false);
    expect(newState.error).toEqual('');
  });

  test('Тесты редьюсера login, проверка fulfilled', () => {
    const action = {
      type: login.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(userData);
  });

  test('Тесты редьюсера login, проверка rejected', () => {
    const newState = userSlice.reducer(
      initialState,
      login.rejected(new Error('error'), 'ошибка теста', userRegisterData)
    );
    expect(newState.error).toEqual('error');
    expect(newState.isAuthChecked).toEqual(false);
  });

  test('Тесты редьюсера login, проверка pending', () => {
    const newState = userSlice.reducer(
      initialState,
      login.pending('', userRegisterData)
    );
    expect(newState.isAuthChecked).toEqual(false);
    expect(newState.error).toEqual('');
  });

  test('Тесты редьюсера apiGetUser, проверка fulfilled', () => {
    const action = {
      type: apiGetUser.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(userData);
  });

  test('Тесты редьюсера apiGetUser, проверка rejected', () => {
    const newState = userSlice.reducer(
      initialState,
      apiGetUser.rejected(new Error('error'), 'ошибка теста')
    );
    expect(newState.error).toEqual('error');
    expect(newState.isAuthChecked).toEqual(false);
  });

  test('Тесты редьюсера updateUser, проверка fulfilled', () => {
    const action = {
      type: updateUser.fulfilled.type,
      payload: userResponseUpdated
    };
    expect(stateConstructor(action)).toEqual(userDataUpdated);
  });

  test('Тесты редьюсера updateUser, проверка rejected', () => {
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

  test('Тесты редьюсера updateUser, проверка pending', () => {
    const newState = userSlice.reducer(
      initialState,
      updateUser.pending('', userRegisterDataUpdated)
    );
    expect(newState.isAuthChecked).toEqual(false);
    expect(newState.error).toEqual('');
  });

  test('Тесты редьюсера logout, проверка fulfilled', () => {
    const action = {
      type: logout.fulfilled.type,
      payload: userResponse
    };
    expect(stateConstructor(action)).toEqual(initialState);
  });
});
