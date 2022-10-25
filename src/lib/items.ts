import { v4 as id } from 'uuid';

export const createItem = (name: string): Item => {
  return {
    id: id(),
    name,
    packed: false,
  };
};

let items = [
  'Sweatshirt',
  'Running shoes',
  'AirPods',
  'MacBook',
  'iPad',
  'USB-C cable',
  'Lightning cable',
  'Wallet',
  'MagSafe cable',
  'Apple Watch charger',
  'Power brick',
  'Toothbrush',
  'Toothpaste',
  'Deorderant',
  'Backpack',
  'Vitamins',
  'Kindle',
  'Micro-USB cable',
  'Sleep mask',
  'Ear plugs',
  'Face masks',
  'Sony Walkman',
  'Emergency Vegan Bacon',
].map(createItem);

const [first, second] = items;

first.packed = true;
second.packed = true;

export const getInitialItems = (): Item[] => {
  return items;
};

export const updateItem = (
  items: Item[],
  id: string,
  updates: Partial<Item>,
) => {
  return items.map((item) => {
    if (item.id === id) return { ...item, ...updates };
    return item;
  });
};

export const removeItem = (items: Readonly<Item[]>, id: string) => {
  return items.filter((item) => {
    return item.id !== id;
  });
};

export const filterItems = (
  items: Item[] = [],
  properties: Readonly<Partial<Item>>,
) => {
  return items.filter((item) => {
    for (const [filterKey, filterValue] of Object.entries(properties)) {
      if (filterKey === 'name' && typeof filterValue === 'string') {
        return item.name.toLowerCase().startsWith(filterValue.toLowerCase());
      }

      if (filterKey === 'packed' && typeof filterValue === 'boolean') {
        return item.packed === filterValue;
      }
    }
    return false;
  });
};
