import React, { FC, memo } from 'react';
import { Tab } from '@zlden/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';
import { BurgerIngredientsUIProps } from './type';
import { IngredientsCategory } from '@components';

export const BurgerIngredientsUI: FC<BurgerIngredientsUIProps> = memo(
  ({
    currentTab,
    buns,
    mains,
    sauces,
    titleBunRef,
    titleMainRef,
    titleSaucesRef,
    bunsRef,
    mainsRef,
    saucesRef,
    onTabClick
  }) => (
    <>
      <section className={styles.burger_ingredients}>
        <nav>
          <ul className={styles.menu}>
            <Tab
              value='bun'
              active={currentTab === 'bun'}
              onClick={onTabClick}
              data-testid='tab-buns'
            >
              Buns
            </Tab>
            <Tab
              value='main'
              active={currentTab === 'main'}
              onClick={onTabClick}
              data-testid='tab-toppings'
            >
              Toppings
            </Tab>
            <Tab
              value='sauce'
              active={currentTab === 'sauce'}
              onClick={onTabClick}
              data-testid='tab-sauces'
            >
              Sauces
            </Tab>
          </ul>
        </nav>
        <div className={styles.content}>
          <IngredientsCategory
            title='Buns'
            titleRef={titleBunRef}
            ingredients={buns}
            ref={bunsRef}
            data-cy='buns'
          />
          <IngredientsCategory
            title='Toppings'
            titleRef={titleMainRef}
            ingredients={mains}
            ref={mainsRef}
            data-cy='mains'
          />
          <IngredientsCategory
            title='Sauces'
            titleRef={titleSaucesRef}
            ingredients={sauces}
            ref={saucesRef}
            data-cy='sauces'
          />
        </div>
      </section>
    </>
  )
);
