// src/App.tsx
import React, { Suspense } from 'react';
import './App.css';

import { ButtonProps } from '@omriruvio/remote-federated-app-test/dist/components/Button';

const Button = React.lazy<React.FC<ButtonProps>>(() => import('remoteApp/Button'));
const UserList = React.lazy(() => import('remoteApp/UserList'));

function App() {
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
    </>
  );
}

export default App;
