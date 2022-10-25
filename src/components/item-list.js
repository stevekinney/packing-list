import { useId, useState } from 'react';
import { filterItems } from '../lib/items';
import Item from './item';

const EmptyState = ({ items, filteredItems }) => {
  const hasItems = !!items.length;
  const hasMatchingItems = !!filteredItems.length;

  if (hasMatchingItems) return null;
  if (hasItems) {
    return <p className="text-primary-400">(No items match your filter.)</p>;
  }
  return <p className="text-primary-400">(No items.)</p>;
};

const ItemList = ({ title = 'Items', items, update, remove }) => {
  const [filter, setFilter] = useState('');
  const id = useId();

  const filteredItems = filterItems(items, { name: filter });

  return (
    <section className="border-2 border-primary-200 p-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <label htmlFor={id} className="hidden"></label>
        <input
          id={id}
          placeholder="Filter"
          className="my-2 w-full py-1"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </header>
      <ul className="flex flex-col gap-2">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} update={update} remove={remove} />
        ))}
      </ul>
      <EmptyState items={items} filteredItems={filteredItems} />
    </section>
  );
};

export default ItemList;
