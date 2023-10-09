import React from 'react';

import { Field, useField } from 'formik';
import { Input, Select } from '@nextui-org/react';

const makeField =
  (Component) =>
  ({ tooltip, input, required, children, errorFeedback, defaultValue, ...rest }) => {
    const [_, meta] = useField(rest);
    let value = input?.value || undefined || defaultValue;
    const hasError = errorFeedback ? true : meta.error ? meta.touched && meta.error : false;

    if (rest.type === 'email') {
      value = input?.value.split(' ').join('');
    }

    return (
      <>
        <Field
          errorMessage={hasError && meta.error}
          isRequired={required}
          as={Component}
          {...input}
          {...rest}
          labelPlacement='outside'
          children={children}
        />
      </>
    );
  };

export const FormInput = makeField(Input);
export const FormSelect = makeField(Select);
