import { getInitialItems } from './items';
import { sleep } from './slow-down';

const delay = 2000;
let items = getInitialItems();

export const fetchItems = async () => {
  await sleep(delay);
  return items;
};

export const deleteItem = async (id: string) => {
  await sleep(delay);
  items = items.filter((item) => item.id !== id);
  return items;
};

export const patchItem = async (id: string, packed: boolean) => {
  await sleep(delay);

  let matchingItem: Item | undefined;

  items.map((item) => {
    if (item.id !== id) return item;
    matchingItem = {
      ...item,
      packed,
    };
    return matchingItem;
  });

  if (!matchingItem) {
    throw new Error(`There is no item with the id of "${id}."`);
  }

  return matchingItem;
};
