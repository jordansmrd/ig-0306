import "./App.css";
import "./css/instagram.css";
import "./css/mobile.css";

import { routes } from "./routes/routes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route {...route} key={i} />
      ))}
    </Routes>
  );
}

export default App;
