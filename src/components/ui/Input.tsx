import React, { ComponentProps, forwardRef } from 'react';
import { Input as LibInput } from '@zlden/react-developer-burger-ui-components';

type LibInputProps = ComponentProps<typeof LibInput>;

// Fix: remove the required pointer capture props
type FixedInputProps = Omit<
  LibInputProps,
  'onPointerEnterCapture' | 'onPointerLeaveCapture'
>;

export const Input = forwardRef<HTMLInputElement, FixedInputProps>(
  (props, ref) => (
    <LibInput
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = 'Input';
