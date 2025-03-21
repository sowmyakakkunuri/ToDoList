import config from "../configs/config";

export async function getUsers() {
  try {
    const users = config.Users;
    console.log(users);
    return users;
  } catch (e) {
    throw new Error(e);
  }
}

export async function fetchUserHeaders(user) {
  try {
    if (!user) {
      return config.Headers.default;
    }
    const userHeaders = config.Headers[user];
    return userHeaders;
  } catch (e) {
    throw new Error(e);
  }
}
