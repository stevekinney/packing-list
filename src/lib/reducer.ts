import { createAction } from '@reduxjs/toolkit';
import { createItem, removeItem, updateItem } from './items';

export const add = createAction('items/add', (name: string) => ({
  payload: { name },
}));

export const update = createAction(
  'items/update',
  (id: string, properties: Partial<Item>) => {
    return { payload: { id, ...properties } };
  },
);

export const remove = createAction('items/remove', (id: string) => ({
  payload: { id },
}));

export const markAllAsUnpacked = createAction('items/mark-all-as-unpacked');

export type Action =
  | ReturnType<typeof add>
  | ReturnType<typeof update>
  | ReturnType<typeof remove>
  | ReturnType<typeof markAllAsUnpacked>;

export const reducer = (items: Item[] = [], action: Action) => {
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
