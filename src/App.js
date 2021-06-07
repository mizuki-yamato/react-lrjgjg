import React from 'react';
import './style.css';
import { PrimaryButton } from './components/atom/button/PrimaryButton';
import { SecondaryButton } from './components/atom/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { BrowserRouter } from 'react-router-dom';

const user = {
  image: 'https://source.unsplash.com/2l0CWTpcChI',
  name: 'テスト太郎',
  email: '12345@example.com',
  phone: '03-1234-5678',
  company: {
    name: 'ああああ株式会社'
  }
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
