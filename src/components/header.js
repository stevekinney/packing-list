import { memo } from 'react';

const Header = ({ count }) => (
  <header id="page-header">
    <h1 className="text-2xl font-bold">Packing List</h1>
    <p id="number-of-items">
      {count} {count === 1 ? 'item' : 'items'}
    </p>
  </header>
);

export default memo(Header);
