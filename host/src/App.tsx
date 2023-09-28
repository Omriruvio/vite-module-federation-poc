// src/App.tsx
import React, { Suspense } from 'react';
import './App.css';

import { ButtonProps, TimeDisplayProps } from '@omriruvio/remote-federated-app-test';
import { useTime } from './hooks/useTime';

const Button = React.lazy<React.FC<ButtonProps>>(() => import('remoteApp/Button'));
const UserList = React.lazy(() => import('remoteApp/UserList'));
const TimeDisplay = React.lazy<React.FC<TimeDisplayProps>>(() => import('remoteApp/TimeDisplay'));

function App() {
  const time = useTime();

  const handleClick = () => console.log('Click handler triggered on host.');
  return (
    <>
      <h1>Host app</h1>
      <Suspense fallback={<div>Loading button...</div>}>
        <Button onClick={handleClick} />
      </Suspense>
      <Suspense fallback={<div>Loading user list...</div>}>
        <UserList />
      </Suspense>
      <Suspense fallback={<div>Loading time display...</div>}>
        <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem' }}>
          <TimeDisplay time={time} />
        </div>
      </Suspense>
    </>
  );
}

export default App;
