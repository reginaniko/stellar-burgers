import { FC, useState } from 'react';
import { Input } from '../../Input';
import {
  Input as RawInput,
  Button,
  PasswordInput
} from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { RegisterUIProps } from './type';

const Input = RawInput as any;

export const RegisterUI: FC<RegisterUIProps> = ({
  errorText,
  email,
  setEmail,
  handleSubmit,
  password,
  setPassword,
  userName,
  setUserName
}) => (
  <main className={styles.container}>
    <div className={`pt-6 ${styles.wrapCenter}`}>
      <h3 className='pb-6 text text_type_main-medium'>Sign Up</h3>
      <form
        className={`pb-15 ${styles.form}`}
        name='register'
        onSubmit={handleSubmit}
      >
        <>
          <div className='pb-6'>
            <Input
              type='text'
              placeholder='Name'
              data-testid='register-name'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
              value={userName}
              name='name'
              error={false}
              errorText='Wrong Name'
              size='default'
            />
          </div>
          <div className='pb-6'>
            <Input
              type='email'
              placeholder='Email'
              data-testid='register-email'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
              name={'email'}
              error={false}
              errorText='Wrong Email'
              size={'default'}
            />
          </div>
          <div className='pb-6'>
            <PasswordInput
              placeholder='Password'
              data-testid='register-password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='password'
              errorText='Wrong Password'
            />
          </div>
          <div className={`pb-6 ${styles.button}`}>
            <Button
              type='primary'
              size='medium'
              htmlType='submit'
              data-testid='register-submit'
            >
              Create Account
            </Button>
          </div>
          {errorText && (
            <p className={`${styles.error} text text_type_main-default pb-6`}>
              {errorText}
            </p>
          )}
        </>
      </form>
      <div className={`${styles.question} text text_type_main-default pb-6`}>
        Already have an account?
        <Link
          to='/login'
          className={`pl-2 ${styles.link}`}
          data-testid='register-login'
        >
          Log In
        </Link>
      </div>
    </div>
  </main>
);
