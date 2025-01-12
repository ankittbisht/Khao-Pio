import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import Router from "./Router/Router";

function App() {
  //authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Ankit Bisht",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
