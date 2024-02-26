import { useEffect, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import Footer from "./components/Footer";

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
      <Header />
      <Body />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
