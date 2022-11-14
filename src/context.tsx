import { useState, createContext, PropsWithChildren } from 'react';
// import {
//   createItem,
//   filterItems,
//   getInitialItems,
//   removeItem,
//   updateItem,
// } from './lib/items';

const ItemsContext = createContext(null);

const ItemsProvider = ({ children }: PropsWithChildren) => {
  // eslint-disable-next-line
  const [items, setItems] = useState<Item[]>([]);

  return <ItemsContext.Provider value={null}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
