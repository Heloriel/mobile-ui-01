import { Route, Routes as ListOfRoutes } from "react-router-dom";
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

export default function Routes() {
  return (
    <ListOfRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
    </ListOfRoutes>
  );
}
