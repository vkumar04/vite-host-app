import { Suspense } from 'react'
import reactLogo from '../assets/react.svg'
// @ts-ignore
import { Button } from 'remoteApp/Button'

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <img src={reactLogo} alt="react logo" />
        <h1>Vite Federated Host</h1>
        <Suspense fallback="Loading Page">
          <Button name="Button from Remote" />
        </Suspense>
        </div>
    </div>
  );
};
