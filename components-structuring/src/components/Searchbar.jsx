export default function Searchbar({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) {
  return (
    <>
      <form>
        <input
          type="text"
          value={filterText}
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
          name="searchbar"
          placeholder="search..."
        />
        <label htmlFor="checkedProducts">
          <input
            type="checkbox"
            name="checkedProducts"
            checked={inStockOnly}
            onChange={(e) => {
              setInStockOnly(e.target.checked);
            }}
          />{" "}
          Only show product in stock
        </label>
      </form>
    </>
  );
}
