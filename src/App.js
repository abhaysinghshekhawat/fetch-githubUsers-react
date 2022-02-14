import "./styles.css";
import { useState, useEffect } from "react";
import Article from "./Article.js";
export default function App() {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const usersApi = await response.json();
    setUsers(usersApi);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <header>
        <h1>GitHub Users</h1>
      </header>
      <div className="App">
        {users.map((user) => {
          return <Article user={user} />;
        })}
      </div>
    </>
  );
}
