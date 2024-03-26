import css from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span> <span>{stats.likes}</span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
