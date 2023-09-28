import React from 'react';
import './App.css';
import Button from './components/Button';
import UserList from './components/UserList/UserList';
import TimeDisplay from './components/TimeDisplay/TimeDisplay';

function App() {
  return (
    <>
      <h1>Remote app</h1>
      <TimeDisplay time={new Date()} />
      <Button onClick={() => console.log('clicked on remote')} />
      <UserList />
    </>
  );
}

export default App;
