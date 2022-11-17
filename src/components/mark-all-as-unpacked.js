import { memo } from 'react';

const MarkAllAsUnpacked = ({ onClick }) => (
  <div className="mb-16">
    <button className="w-full" onClick={onClick}>
      🏠 Mark All As Unpacked
    </button>
  </div>
);

export default memo(MarkAllAsUnpacked);
