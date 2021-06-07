import React from 'react';
import './style.css';
import { PrimaryButton } from './components/atom/button/PrimaryButton';
import { SecondaryButton } from './components/atom/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';

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
    <HeaderOnly>
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}
