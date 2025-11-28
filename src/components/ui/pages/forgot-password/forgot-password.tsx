import { FC } from 'react';

import {
  Input as RawInput,
  Button
} from '@zlden/react-developer-burger-ui-components';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import { PageUIProps } from '../common-type';

const Input = RawInput as any;

export const ForgotPasswordUI: FC<PageUIProps> = ({
  errorText,
  email,
  setEmail,
  handleSubmit
}) => (
  <main className={styles.container}>
    <div className={`pt-6 ${styles.wrapCenter}`}>
      <h3 className='pb-6 text text_type_main-medium'>Password Reset</h3>
      <form
        className={`pb-15 ${styles.form}`}
        name='login'
        onSubmit={handleSubmit}
      >
        <div className='pb-6'>
          <Input
            type='email'
            placeholder='Enter your email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
            name='email'
            error={false}
            errorText=''
            size='default'
          />
        </div>
        <div className={`pb-6 ${styles.button}`}>
          <Button type='primary' size='medium' htmlType='submit'>
            Reset
          </Button>
        </div>
        {errorText && (
          <p className={`${styles.error} text text_type_main-default pb-6`}>
            {errorText}
          </p>
        )}
      </form>
      <div className={`${styles.question} text text_type_main-default pb-6`}>
        Remember your password?
        <Link to={'/login'} className={`pl-2 ${styles.link}`}>
          Log In
        </Link>
      </div>
    </div>
  </main>
);
