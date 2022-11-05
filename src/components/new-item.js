const NewItem = ({ newItemName, setNewItemName, addItem }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addItem(newItemName);
        setNewItemName('');
      }}
    >
      <label htmlFor="new-item" className="font-semibold">
        New Item Name
      </label>
      <div className="flex my-2">
        <input
          id="new-item"
          className="w-full"
          type="search"
          placeholder="New Item"
          value={newItemName}
          autoFocus
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          className="border-l-0 whitespace-nowrap bg-primary-300"
          aria-label={`Add ${newItemName}`}
          type="submit"
        >
          ➕ Add New Item
        </button>
      </div>
    </form>
  );
};

export default NewItem;
