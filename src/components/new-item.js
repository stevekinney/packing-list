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
      <div className="my-2 flex">
        <input
          id="new-item"
          className="w-full"
          type="search"
          placeholder="New Item"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          className="whitespace-nowrap border-l-0 bg-primary-300"
          type="submit"
        >
          ➕ Add New Item
        </button>
      </div>
    </form>
  );
};

export default NewItem;
