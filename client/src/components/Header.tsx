import "../styles/Header.css";
import iron from "../assets/images/fer.png";
import stone from "../assets/images/stone.png";
import wood from "../assets/images/wood.png";
import { useResources } from "../contexts/ResourceProvider";
import MainResource from "./MainResource";

export default function Header() {
  const { mainResources } = useResources();
  return (
    <div className="header-container">
      <MainResource
        img={wood}
        backgroundColor="#E59A61"
        borderColor="#94534E"
        name="Bois"
        nameOfkey="wood"
        value={mainResources.wood}
        perClick="1"
      />
      <MainResource
        img={stone}
        backgroundColor="#D9D9D9"
        borderColor="#ABAAB0"
        name="Pierre"
        nameOfkey="stone"
        value={mainResources.stone}
        perClick="0.2"
      />
      <MainResource
        img={iron}
        backgroundColor="#AAA6A6"
        borderColor="#505050"
        name="Fer"
        nameOfkey="iron"
        value={mainResources.iron}
        perClick="0.1"
      />
    </div>
  );
}
