import { filterItems, removeItem, updateItem } from './items';

const items: Item[] = [
  { id: '1', name: 'Phone', packed: true },
  { id: '2', name: 'Wallet', packed: false },
  { id: '3', name: 'Keys', packed: false },
];

describe('updateItem', () => {
  it('should change the name of an item', () => {
    const expected = 'iPhone';
    const results = updateItem(items, '1', { name: expected });
    expect(results).toEqual([
      { id: '1', name: expected, packed: true },
      { id: '2', name: 'Wallet', packed: false },
      { id: '3', name: 'Keys', packed: false },
    ]);
  });

  it('should change the status of an item', () => {
    const expected = true;
    const results = updateItem(items, '2', { packed: expected });
    expect(results).toEqual([
      { id: '1', name: 'Phone', packed: true },
      { id: '2', name: 'Wallet', packed: expected },
      { id: '3', name: 'Keys', packed: false },
    ]);
  });

  it('should change multiple properties of an item', () => {
    const expected = { packed: true, name: 'Hoodie' };
    const results = updateItem(items, '2', { ...expected });
    expect(results).toEqual([
      { id: '1', name: 'Phone', packed: true },
      { id: '2', name: expected.name, packed: expected.packed },
      { id: '3', name: 'Keys', packed: false },
    ]);
  });
});

describe('removeItems', () => {
  it('should remove an item by its ID', () => {
    expect(removeItem(items, '2')).toEqual([
      { id: '1', name: 'Phone', packed: true },
      { id: '3', name: 'Keys', packed: false },
    ]);
  });
});

describe('filterItems', () => {
  it('should filter by name', () => {
    const filter = { name: 'P' };
    const result = filterItems(items, filter);
    expect(result).toEqual([{ id: '1', name: 'Phone', packed: true }]);
  });

  it('should filter by status', () => {
    const filter = { packed: true };
    const result = filterItems(items, filter);
    expect(result).toEqual([{ id: '1', name: 'Phone', packed: true }]);
  });

  it('should filter by name and status', () => {
    const filter = { name: 'W', packed: false };
    const result = filterItems(items, filter);
    expect(result).toEqual([{ id: '2', name: 'Wallet', packed: false }]);
  });
});
