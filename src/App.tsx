import { BrowserRouter } from "react-router-dom";
import { NavigationContext } from "./contexts/NavigationContext";
import Router from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <NavigationContext>
        <Router />
      </NavigationContext>
    </BrowserRouter>
  );
}

export default App;
