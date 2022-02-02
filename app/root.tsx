import React from 'react';
import { Links, LiveReload, Meta, Outlet } from 'remix';
import type { MetaFunction } from 'remix';
import styles from './styles/app.css';
import { Navbar } from './components/shared';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: 'Cryptography Tools' };
};

const App: React.FC = () => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='bg-gradient-to-r from-[#0F172A] via-[#17334F] to-[#121A31]'>
        <Navbar />
        <Outlet />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
