import { Route, Routes as ListOfRoutes } from "react-router-dom";
import Home from "./screens/Home";

export default function Routes() {
  return (
    <ListOfRoutes>
      <Route path="/" element={<Home />} />
    </ListOfRoutes>
  );
}
