import { useEffect, useRef, useState } from "react";
import { fetchUsers, fetchAllUsers } from "../../api/usersApi";
import { Loader } from "../Loader/Loader";
import Filter from "../../Filter/Filter";
import TweetsList from "../TweetsList/TweetsList";
import { Button } from "../Card/Card.styled";
import { Box } from "./Tweets.styled";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [tweetsPerPage, setTweetsPerPage] = useState(8);
  const [totaltweets, setTotalTweets] = useState(null);
  const [loadedTweets, setLoadedTweets] = useState(null);

  const ref = useRef(true);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setIsLoading(true);
        const result = await fetchAllUsers();
        setTotalTweets(result.length);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getAllUsers();
  }, []);

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
        setLoadedTweets((s) => s + Number(tweetsPerPage));
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
    setLoadedTweets(null);
  };
  // const handleSubscribe = (id) => {
  //   console.log(id);
  // };
  //console.log(users);
  //console.log(page);
  //console.log("totaltweets", totaltweets);
  //console.log("loadedTweets", loadedTweets);
  return (
    <>
      <Filter onChangeFilter={handleFilterChange} />
      {isLoading && <Loader />}
      {users.length > 0 && <TweetsList users={users} />}
      {users.length > 0 && totaltweets > loadedTweets && (
        <Box>
          <Button onClick={() => setPage((state) => state + 1)}>
            Load More
          </Button>
        </Box>
      )}
    </>
  );
};

export default Tweets;
