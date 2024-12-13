import "../styles/Header.css";

import { useResources } from "../contexts/ResourceProvider";
import MainResource from "./MainResource";

export default function Header() {
  const { mainResources } = useResources();
  return (
    <div className="header-container">
      <MainResource resource={mainResources.wood} />
      <MainResource resource={mainResources.stone} />
      <MainResource resource={mainResources.iron} />
    </div>
  );
}
