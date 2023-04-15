import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { fetchUsers } from "../../api/usersApi";
import { Loader } from "../Loader/Loader";
import { List } from "./TweetsList.styled";
import Filter from "../../Filter/Filter";

const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [tweetsPerPage, setTweetsPerPage] = useState(8);

  const ref = useRef(true);
  //const ref1 = useRef(true);

  useEffect(() => {
    //debugger;
    if (ref.current) {
      ref.current = false;
      return;
    }
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const result = await fetchUsers(page, tweetsPerPage);
        setUsers((s) => [...s, ...result]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, [page, tweetsPerPage]);

  const handleFilterChange = (e) => {
    setUsers([]);
    setTweetsPerPage(e.target.value);
    setPage(1);
  };

  //console.log(users);
  //console.log(page);
  return (
    <>
      <Filter onChangeFilter={handleFilterChange} />
      {isLoading && <Loader />}
      {users.length > 0 && (
        <List>
          {users.map(({ id, avatar, tweets, followers }) => (
            <li key={id}>
              <Card tweets={tweets} followers={followers} avatar={avatar} />
            </li>
          ))}
        </List>
      )}
      {users.length > 0 && (
        <button onClick={() => setPage((state) => state + 1)}>Load More</button>
      )}
    </>
  );
};

export default TweetsList;
