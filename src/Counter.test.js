import React from 'react';
import { render } from '@testing-library/react';
import Counter from './Counter';

test('<Counter />', () => {
  // const wrapper = render(<Counter />);
  const { debug, getByText } = render(<Counter />);
  // debug();
  // console.log(wrapper.getByText('0').tagName);
  expect(getByText('0').tagName).toBe('BUTTON')
})