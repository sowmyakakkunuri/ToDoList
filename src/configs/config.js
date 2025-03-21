const config = {
  DB_URL: "https://jsonplaceholder.typicode.com/todos",

  Users: ["user1", "user2"],

  Headers: {
    user1: ["U_ID", "ID", "Task Title", "Task Status"],
    user2: ["U_ID", "Item_ID", "Title", "Status of Completion"],
    default: ["User_ID", "Item_ID", "Title", "Status"],
  },
};

export default config;
