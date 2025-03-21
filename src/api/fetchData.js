import config from "../configs/config";

export const fetchToDoList = async () => {
  try {
    const response = await fetch(config.DB_URL);
    if (!response) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    if (!data || data.length === 0) {
      throw new Error("No Data available");
    }
    return data;
  } catch (e) {
    console.log(e.message);
    throw new Error("failed to fetch");
  }
};
