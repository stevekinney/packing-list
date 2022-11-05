import { add, markAllAsUnpacked, reducer, remove, update } from './reducer';

jest.mock('uuid', () => ({ v4: () => '123456789' }));

const id = '1';
const name = 'Sweatshirt';

describe(reducer, () => {
  it('should add an item', () => {
    const result = reducer([], add(name));
    expect(result).toEqual([
      {
        id: '123456789',
        name,
        packed: false,
      },
    ]);
  });

  it('should update an item', () => {
    const result = reducer(
      [{ id, name, packed: false }],
      update(id, { packed: true }),
    );

    expect(result).toEqual([
      {
        id,
        name,
        packed: true,
      },
    ]);
  });

  it('should remove an item', () => {
    const items = [{ id, name, packed: false }];
    const result = reducer(items, remove(id));
    expect(result).toEqual([]);
  });

  it('should mark all items as unpacked', () => {
    const items = [
      { id: '1', name: 'Sweatshirt', packed: true },
      { id: '2', name: 'Sony Walkman', packed: true },
    ];

    const result = reducer(items, markAllAsUnpacked());

    expect(result).toEqual([
      { id: '1', name: 'Sweatshirt', packed: false },
      { id: '2', name: 'Sony Walkman', packed: false },
    ]);
  });
});
