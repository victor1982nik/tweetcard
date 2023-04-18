import Card from "../Card/Card";
import { List } from "./TweetsList.styled";

const TweetsList = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <li key={user.id}>
          <Card user={user} />
        </li>
      ))}
    </List>
  );
};

export default TweetsList;
