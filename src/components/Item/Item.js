import "./item.scss";

export default function Item({ item }) {
  return (
    <>
      <div className="item">
        <img src={item.avatar_url} alt="Avatar" />
      </div>
      <div className="item">{item.login}</div>
      <div className="item">{item.type}</div>
    </>
  );
}
