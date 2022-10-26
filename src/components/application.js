import { useCallback, useMemo, useReducer, useState } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import { reducer } from '../lib/reducer';
import ItemList from './item-list';
import NewItem from './new-item';

// useMemo => for values
// useCallback => for functions

const Application = () => {
  const [items, dispatch] = useReducer(reducer, getInitialItems());

  const unpackedItems = useMemo(
    () => filterItems(items, { packed: false }),
    [items],
  );

  const packedItems = useMemo(
    () => filterItems(items, { packed: true }),
    [items],
  );

  const markAllAsUnpacked = () => {
    // return setItems(items.map((item) => ({ ...item, packed: false })));
  };

  return (
    <main className="mx-auto my-20 flex max-w-xl flex-col gap-8">
      <header>
        <h1 className="text-2xl font-extrabold">Packing List</h1>
      </header>
      <NewItem dispatch={dispatch} />
      <ItemList
        title="Unpacked Items"
        items={unpackedItems}
        dispatch={dispatch}
      />
      <ItemList title="Packed Items" items={packedItems} dispatch={dispatch} />
      <div>
        <button className="w-full" onClick={markAllAsUnpacked}>
          🏠 Mark All As Unpacked
        </button>
      </div>
    </main>
  );
};

export default Application;
