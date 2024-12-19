import * as React from 'react';

const Search = ({ search, setSearch, filter, setFilter }) => {
  const [searchValue, setSearchValue] = React.useState(search);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.target.id === 'searchBtn') {
      setSearch(searchValue);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.name);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search"
          type="search"
          className="validate"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={handleEnterKey}
        />
        <button id="searchBtn" className="btn search_btn indigo darken-1" onClick={handleEnterKey}>
          Search
        </button>
        <div>
          <label>
            <input
              name="all"
              type="radio"
              checked={filter === 'all'}
              onChange={handleFilterChange}
              className="radio_btn with-gap"
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="movie"
              type="radio"
              checked={filter === 'movie'}
              onChange={handleFilterChange}
              className="radio_btn with-gap"
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="series"
              type="radio"
              checked={filter === 'series'}
              onChange={handleFilterChange}
              className="radio_btn with-gap"
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
