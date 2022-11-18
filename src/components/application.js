import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { ItemsContext } from '../context';
import { useItems } from '../hooks';
import { filterItems } from '../lib/items';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  const items = useItems();

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header items={items} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Unpacked Items" items={unpackedItems} />
        <ItemList title="Packed Items" items={packedItems} />
      </section>
    </main>
  );
};

export default Application;
