import "./searchInput.scss";

export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <div className="searchInput">
      <img
        src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"
        alt="Icon"
      />
      <input
        placeholder={placeholder}
        autoFocus
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
