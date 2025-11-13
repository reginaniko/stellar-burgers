import React from 'react';
import styles from './order-details.module.css';
import doneImg from '../../../images/done.svg';
import { OrderDetailsUIProps } from './type';

export const OrderDetailsUI: React.FC<OrderDetailsUIProps> = ({
  orderNumber
}) => (
  <>
    <h2 className={`${styles.title} text text_type_digits-large mt-2 mb-4`}>
      {orderNumber}
    </h2>
    <p className='text text_type_main-medium'>Order ID</p>
    <img className={styles.img} src={doneImg} alt='order status image.' />
    <p className='text text_type_main-default mb-1'>
      Your order is being prepared
    </p>
    <p className={`${styles.text} text text_type_main-default`}>
      Please wait at the orbital station
    </p>
  </>
);
