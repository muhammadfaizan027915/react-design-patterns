import "./App.css";
import { Button } from "./Components/Functional Programming in React/Comosition Component";
import PartialComponents from "./Components/Functional Programming in React/Partial Components";

function App() {
  const DangerButton = PartialComponents(Button, {
    size: "large",
    background: "red",
    border: "none",
    color: "white",
    borderRadius: "5px",
    boxShadow: "5px 5px 10px lightgray",
    display: "block",
    margin: "200px auto"
  });
  return <DangerButton text="Signup Here" />;
}

export default App;
