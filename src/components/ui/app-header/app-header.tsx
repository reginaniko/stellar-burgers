import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        <>
          <Link to='/' className={styles.link} data-testid='constructor-btn'>
            <BurgerIcon type={'primary'} />
            <p className='text text_type_main-default ml-2 mr-10'>
              Constructor
            </p>
          </Link>
        </>
        <>
          <Link to='/feed' className={styles.link}>
            <ListIcon type={'primary'} />
            <p className='text text_type_main-default ml-2'>Order Queue</p>
          </Link>
        </>
      </div>
      <div className={styles.logo} data-testid='logo-btn'>
        <Link to='/' className={styles.link}>
          <Logo className='' />
        </Link>
      </div>
      <div className={styles.link_position_last}>
        <Link to='/profile' className={styles.link} data-testid='profile-btn'>
          <ProfileIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>
            {userName || 'User Profile'}
          </p>
        </Link>
      </div>
    </nav>
  </header>
);
