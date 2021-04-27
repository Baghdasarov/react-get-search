import cls from "classnames";

import "./itemList.scss";

const checkIsOrderActive = (curentOrder, value) => {
  return curentOrder === value;
};

export default function ItemList({
  list,
  loading,
  activeOrder,
  showPagination = true,
  renderItem,
  renderPagination,
  handleOrderChange,
}) {
  if (loading) return <h1>Searching... </h1>;

  if (!list.length) return <h1>No Items!</h1>;

  return (
    <div className={"itemList"}>
      <div className="itemList-table-grid">
        <div className="tools">
          <button
            title="Sort by asc"
            value="asc"
            className={cls("asc", {
              active: checkIsOrderActive(activeOrder, "asc"),
            })}
            onClick={handleOrderChange}
          ></button>
          <button
            title="Sort by desc"
            value="desc"
            className={cls("desc", {
              active: checkIsOrderActive(activeOrder, "desc"),
            })}
            onClick={handleOrderChange}
          ></button>
        </div>
        <div className="title"> Avatar url </div>
        <div className="title center"> Login </div>
        <div className="title last"> Type </div>
        {list.map((val, i) => renderItem(val, i))}
      </div>
      {showPagination && renderPagination()}
    </div>
  );
}
