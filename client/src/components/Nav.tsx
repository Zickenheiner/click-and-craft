import "../styles/Nav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [navState, setNavState] = useState(currentPath.slice(1));

  const handleActive = (type: string) => {
    setNavState(type);
    navigate(`/${type}`);
  };

  return (
    <div className="nav-container">
      <button
        type="button"
        className={
          navState === "warehouse" ? "nav-button active" : "nav-button"
        }
        onClick={() => handleActive("warehouse")}
      >
        Entrepot
      </button>
      <button
        type="button"
        className={navState === "building" ? "nav-button active" : "nav-button"}
        onClick={() => handleActive("building")}
      >
        Batiment
      </button>
    </div>
  );
}
