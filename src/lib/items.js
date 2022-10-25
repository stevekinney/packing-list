import { v4 as id } from 'uuid';
import sleep from './sleep';

/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} name
 * @property {boolean} packed
 */

/**
 * Creates a new Item object with the name provided
 * @param {string} name
 * @returns {Item} The new item.
 */
export const createItem = (name) => {
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

const delay = 2000;

/**
 * Gets some default items
 * * @returns Item[]
 */
export const getInitialItems = () => {
  return items;
};

/**
 * Updates one item in the collection of items.
 * @param {Item[]} items An array of items.
 * @param {string} id The id of the item that you want to modify.
 * @param {object} updates A collection of properties to update.
 * @returns An array of items with the modified item.
 */
export const updateItem = (items, id, updates) => {
  return items.map((item) => {
    if (item.id === id) return { ...item, ...updates };
    return item;
  });
};

export const removeItem = (items, id) => {
  return items.filter((item) => {
    return item.id !== id;
  });
};

/**
 * Filters items by whether or not they have been packed.
 * @param {Item[]} items A collection of items.
 * @param {object} properties Filter criteria.
 * @returns Item[] An array of items.
 */
export const filterItems = (items = [], properties = {}) => {
  return items.filter((item) => {
    for (const [key, value] of Object.entries(properties)) {
      if (typeof value === 'string') {
        return item[key].toLowerCase().startsWith(value);
      }
      if (value !== item[key]) return false;
    }
    return true;
  });
};

/**
 * Asynchronously returns items.
 * @returns {Promise<Item[]>} An array of items.
 */
export const fetchItems = async () => {
  await sleep(delay);
  return items;
};

/**
 * Asynchronously removes an item.
 * @param {string} id
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const deleteItem = async (id) => {
  await sleep(delay);
  items = items.filter((item) => item.id !== id);
};

/**
 * Updates the `packed` status on an item.
 * @param {string} id
 * @param {boolean} packed
 * @returns {Promise<Item>} The updated item.
 */
export const patchItem = async (id, packed) => {
  await sleep(delay);

  let matchingItem;

  items.map((item) => {
    if (item.id !== id) return item;
    matchingItem = {
      ...item,
      packed,
    };
    return matchingItem;
  });

  return matchingItem;
};
