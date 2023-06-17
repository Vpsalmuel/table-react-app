import React, { useEffect, useState } from "react";
import Tables from "./component/Tables";
import "./index.css";

const apiUrl = "https://jsonplaceholder.typicode.com/";

const App = () => {
  //const [loading, setloading] = useState(false);
  const [users, setusers] = useState([
    {
      name: null,
      email: null,
      street: null,
      phone: null,
    },
  ]);

  const getUsers = async () => {
    //setloading(true);
    try {
      const response = await fetch(apiUrl + "users");
      const data = await response.json();
      setusers(data);
    } catch (error) {
      console.log(error);
      // setloading(false);
    }
  };
  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);
  // const generateNum

  return (
    <div>
      <Tables users={users} />{" "}
    </div>
  );
};

export default App;
