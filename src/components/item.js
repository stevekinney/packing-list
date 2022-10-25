import clsx from 'clsx';
import { useState } from 'react';

const Item = ({ item, update, remove }) => {
  const id = 'item-' + item.id;
  const [editing, setEditing] = useState(false);

  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={item.packed}
        id={id}
        onChange={() => update(item.id, { packed: !item.packed })}
      />
      <label htmlFor={id} className={clsx({ hidden: editing })}>
        {item.name}
      </label>
      <input
        value={item.name}
        className={clsx('py-0 text-sm', { hidden: !editing })}
        onChange={(event) => update(item.id, { name: event.target.value })}
      />
      <div className="flex gap-2">
        <button
          className="py-0 px-2 text-xs"
          onClick={() => setEditing(!editing)}
        >
          {editing ? '🛑 Stop Editing' : '✍️ Edit'}
        </button>
        <button className="py-0 px-2 text-xs" onClick={() => remove(item.id)}>
          🗑 Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
