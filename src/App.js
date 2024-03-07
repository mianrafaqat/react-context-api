import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";


function App() {
  return (
    <div>
        <UserContextProvider>
        <h1>Hello React!!</h1>
        <Login />
        <Profile />
      </UserContextProvider>

      <Routes>
        <Route />
      </Routes>
    </div>
   
  );
}

export default App;
