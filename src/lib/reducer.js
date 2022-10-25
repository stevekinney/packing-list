import createAction from './create-action';
import { createItem, removeItem, updateItem } from './items';

export const add = createAction('items/add', (name) => ({ name }));

export const update = createAction('items/update', (id, properties) => {
  return { id, ...properties };
});

export const remove = createAction('items/remove', (id) => ({ id }));

export const markAllAsUnpacked = {
  type: 'items/mark-all-as-unpacked',
};

export const reducer = (items = [], action) => {
  if (action.type === add.type) {
    const item = createItem(action.payload.name);
    return [...items, item];
  }

  if (action.type === update.type) {
    const { id, ...properties } = action.payload;
    return updateItem(items, id, properties);
  }

  if (action.type === remove.type) {
    return removeItem(items, action.payload.id);
  }

  if (action.type === markAllAsUnpacked.type) {
    return items.map((item) => ({ ...item, packed: false }));
  }

  return items;
};
