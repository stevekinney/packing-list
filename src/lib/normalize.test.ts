import { normalize, normalizeWithSeparateLists } from './normalize';

const items = [
  { id: '1', name: 'A Thing', packed: true },
  { id: '2', name: 'Another Thing', packed: true },
  { id: '3', name: 'Still Another Thing', packed: false },
];

describe(normalize, () => {
  it('should normalize an array of items', () => {
    expect(normalize(items)).toEqual({
      ids: ['1', '2', '3'],
      items: {
        1: {
          id: '1',
          name: 'A Thing',
          packed: true,
        },
        2: {
          id: '2',
          name: 'Another Thing',
          packed: true,
        },
        3: {
          id: '3',
          name: 'Still Another Thing',
          packed: false,
        },
      },
    });
  });
});

describe(normalizeWithSeparateLists, () => {
  it('should normalize but distinguish between packed and unpacked lists', () => {
    expect(normalizeWithSeparateLists(items)).toEqual({
      ids: ['1', '2', '3'],
      items: {
        1: {
          id: '1',
          name: 'A Thing',
          packed: true,
        },
        2: {
          id: '2',
          name: 'Another Thing',
          packed: true,
        },
        3: {
          id: '3',
          name: 'Still Another Thing',
          packed: false,
        },
      },
      packedItemIds: ['1', '2'],
      unpackedItemIds: ['3'],
    });
  });
});
