import { Route, Routes as ListOfRoutes } from "react-router-dom";
import Home from "./screens/Home";
import Index from "./screens/Index";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";

export default function Routes() {
  return (
    <ListOfRoutes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
    </ListOfRoutes>
  );
}
