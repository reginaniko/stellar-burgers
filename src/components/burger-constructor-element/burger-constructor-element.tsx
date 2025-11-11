import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../services/store';
import {
  constructorSelector,
  deleteItem,
  swapIngredient
} from '../../services/slices/constructor';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useDispatch();

    const constructorItems = useSelector(constructorSelector.selectItems);

    const handleMoveDown = () => {
      dispatch(swapIngredient({ index: index, step: 1 }));
    };

    const handleMoveUp = () => {
      dispatch(swapIngredient({ index: index, step: -1 }));
    };

    const handleClose = () => {
      dispatch(deleteItem(ingredient));
    };

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);
