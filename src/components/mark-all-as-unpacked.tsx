import { MouseEventHandler } from 'react';

type MarkAllAsUnpackedProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const MarkAllAsUnpacked = ({ onClick }: MarkAllAsUnpackedProps) => (
  <div className="mb-16">
    <button className="w-full" onClick={onClick}>
      🏠 Mark All As Unpacked
    </button>
  </div>
);

export default MarkAllAsUnpacked;
