import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline === true ? <p>{"Online"}</p> : <p>{"Offline"}</p>}
    </div>
  );
};

export default FriendListItem;
