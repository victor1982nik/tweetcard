import axios from "axios";

axios.defaults.baseURL = "https://6399dcce29930e2bb3e22232.mockapi.io/api";

export async function fetchUsers(page = 1, limit = 8) {
  const result = await axios.get(`/users?page=${page}&limit=${limit}`);
  return result.data;
}

export async function patchUser(obj) {
  const result = await axios.patch("/users", obj);
  return result.data;
}
