import React from 'react';
import logo from './logo.svg';
import './App.css';
import { add } from './add';

export const Total = (shipping, subTotal) => {
  return '$$' + add(shipping, subTotal);
}
