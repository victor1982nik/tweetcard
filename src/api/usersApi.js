import axios from "axios";

axios.defaults.baseURL = "https://6399dcce29930e2bb3e22232.mockapi.io/api";

export async function fetchUsers(page, limit, filter = "disabled") {
  let requetsStr =
    page && limit ? `/users?page=${page}&limit=${limit}` : `/users`;
  if (filter !== "disabled") requetsStr += `&isSubscribed=${filter}`;
  const result = await axios.get(requetsStr);
  return result.data;
}

export async function updateUser(user) {
  const result = await axios.put(`/users/${user.idUid}`, user);
  return result.data;
}
