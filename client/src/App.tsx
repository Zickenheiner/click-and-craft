import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Mainresources";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <div className="app-outlet-container">
        <Outlet />
      </div>
      <Nav />
    </>
  );
}

export default App;
