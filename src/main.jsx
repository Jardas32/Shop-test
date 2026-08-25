import { createRoot } from "react-dom/client";
import OpenCartContext from "./context/OpenCartContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <OpenCartContext>
    <App />
  </OpenCartContext>
);
