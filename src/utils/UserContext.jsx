//basically prop drilling using context

import { createContext } from "react";

const UserContext =  createContext({
    loggedInUser : "Default User"
})

export default UserContext;