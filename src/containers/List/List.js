import { useState } from "react";
import orderBy from "lodash.orderby";
import Pagination from "rc-pagination";

import { SearchInput, Item, ItemList } from "components";
import { searchQuery } from "api";
import { paginate } from "helpers";
import { PAGE_SIZE, ORDER_ASC } from "./constants";

import "./list.scss";

export default function List() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderedBy, setOrderedBy] = useState(ORDER_ASC);

  const handleSearchChange = (e) => {
    let { value } = e.target;
    if (value && !value.trim()) return;
    setSearchValue(value);
  };

  const handleOrderChange = (e) => {
    const { value } = e.target;
    setOrderedBy(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    try {
      const res = await searchQuery(searchValue);
      setSearchResult(res.data.items);
    } catch (err) {
      console.log("ERROR====", err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="list">
      <div className="list-head">
        <form onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button>Submit</button>
        </form>
      </div>
      <div className="list-content">
        <ItemList
          loading={isSearching}
          activeOrder={orderedBy}
          list={paginate(
            orderBy(searchResult, ["login"], [orderedBy]),
            PAGE_SIZE,
            currentPage
          )}
          handleOrderChange={handleOrderChange}
          renderItem={(val) => <Item item={val} />}
          renderPagination={() => (
            <Pagination
              locale="en_US"
              pageSize={PAGE_SIZE}
              total={searchResult.length}
              current={currentPage}
              onChange={(page) => {
                setCurrentPage(page);
              }}
            />
          )}
        />
      </div>
    </div>
  );
}
