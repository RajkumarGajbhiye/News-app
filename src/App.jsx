
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {


  return (
    <div className={"rrr"} style={{ padding: "100px" }}>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
