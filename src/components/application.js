import { useCallback, useEffect, useReducer, useState } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import { reducer } from '../lib/reducer';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  const [items, setItems] = useState(() => getInitialItems());

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header items={items} />
      <NewItem setItems={setItems} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          setItems={setItems}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          setItems={setItems}
        />
      </section>
      <MarkAllAsUnpacked setItems={setItems} />
    </main>
  );
};

export default Application;
