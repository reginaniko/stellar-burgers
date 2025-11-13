import React, { useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store, { AppDispatch } from './services/store';
import { getIngredientsList } from './services/slices/ingredients';

const IngredientsLoader = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);
  return null;
};

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <IngredientsLoader />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
