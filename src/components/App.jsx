/* eslint-disable no-irregular-whitespace */
import Profile from "../components/Profile/Profile";
import FriendList from "./Friends/FriendList";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from "./Transactions/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
