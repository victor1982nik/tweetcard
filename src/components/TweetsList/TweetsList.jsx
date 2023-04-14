import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { fetchUsers } from "../../api/usersApi";
import { Loader } from "../Loader/Loader";

const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const result = await fetchUsers(page);
        setUsers(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [page]);

  console.log(users);

  return (
    <>
      {isLoading && <Loader />}
      {users.length > 0 && (
        <ul>
          {users.map(({ id, user, tweets, followers }) => (
            <li key={id}>
              <Card tweets={tweets} followers={followers} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TweetsList;
