type NormalizedState = {
  items: { [key: string]: Item };
  ids: string[];
};

export const normalize = (state: Item[]): NormalizedState => {
  if (!Array.isArray(state)) {
    console.error('[normalize] Expecting an array, but received:', state);
    return state;
  }

  const ids = [];
  const items: NormalizedState['items'] = {};

  for (const item of state) {
    const { id } = item;
    ids.push(id);
    items[id] = item;
  }

  return { items, ids };
};

export const normalizeWithSeparateLists = (state: Item[] | NormalizedState) => {
  if (Array.isArray(state)) state = normalize(state);

  const { items } = state;
  const unpackedItemIds = [];
  const packedItemIds = [];

  for (const item of Object.values(items)) {
    if (item.packed) {
      packedItemIds.push(item.id);
    } else {
      unpackedItemIds.push(item.id);
    }
  }

  return {
    ...state,
    unpackedItemIds,
    packedItemIds,
  };
};
