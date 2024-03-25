import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img className="avatar" src={image} alt="User avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="profile-list">
        <li className="profile-list-item">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="profile-list-2nd-item">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="profile-list-item">
          <span>Likes</span> <span>{stats.likes}</span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
