import { getIngredientsApi } from '../../utils/burger-api';
import { INGREDIENT_NAME_EN } from '../../utils/ingredient-translation';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

export const getIngredientsList = createAsyncThunk(
  'ingredients/getIngredients',
  async () => {
    const ingredients = await getIngredientsApi();

    const translated = ingredients.map((ing: TIngredient) => ({
      ...ing,
      name: INGREDIENT_NAME_EN[ing.name] ?? ing.name
    }));

    return translated;
  }
);

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  loading: boolean;
  error: string | null | undefined;
};

export const initialState: TIngredientsState = {
  ingredients: [],
  loading: false,
  error: null
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    getIngredientsState: (state) => state,
    getIngredientsLoadingState: (state) => state.loading,
    getIngredients: (state) => state.ingredients
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredientsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getIngredientsList.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      });
  }
});

export const {
  getIngredientsState,
  getIngredientsLoadingState,
  getIngredients
} = ingredientsSlice.selectors;
