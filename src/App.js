import React from 'react';
import './style.css';
import { PrimaryButton } from './components/atom/button/PrimaryButton';
import { SecondaryButton } from './components/atom/button/SecondaryButton';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <PrimaryButton children="OK" />
      <SecondaryButton children="NG" />
    </div>
  );
}
