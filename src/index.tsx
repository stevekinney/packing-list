import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';
import ItemsProvider from './context';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);

root.render(
  <React.StrictMode>
    <ItemsProvider>
      <Application />
    </ItemsProvider>
  </React.StrictMode>,
);
