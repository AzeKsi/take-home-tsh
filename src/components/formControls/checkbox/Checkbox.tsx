import React from 'react';
import clsx from 'clsx';

import { CheckboxProps } from './Checkbox.props';

export const Checkbox = ({ label, name, checked, labelClass, formControlClass, onChange }: CheckboxProps) => {
  const id = React.useId();

  return (
    <div className="flex w-full items-center gap-x-4">
      <input
        type="checkbox"
        id={id}
        name={name}
        className={clsx('checkbox', formControlClass)}
        checked={checked}
        onChange={onChange}
      />
      <>
        <label title={label} htmlFor={id} className={clsx('label mb-0', labelClass)}>
          {label && <span>{label}</span>}
        </label>
      </>
    </div>
  );
};
