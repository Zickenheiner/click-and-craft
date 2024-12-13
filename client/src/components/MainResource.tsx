import { useResources } from "../contexts/ResourceProvider";
import "../styles/MainResource.css";
import type {
  MainResourceProps,
  MainResourcesType,
} from "../types/resourceType";

export default function MainResource({ resource }: MainResourceProps) {
  const { setMainResources } = useResources();
  const {
    name,
    nameOfkey,
    value,
    perClick,
    backgroundColor,
    borderColor,
    img,
  } = resource;

  const handleClickResource = () => {
    setMainResources((prev: MainResourcesType) => {
      if (nameOfkey === "wood") {
        return {
          ...prev,
          [nameOfkey]: {
            ...prev[nameOfkey],
            value: prev[nameOfkey].value + 1,
          },
        };
      }
      if (nameOfkey === "stone") {
        return {
          ...prev,
          [nameOfkey]: {
            ...prev[nameOfkey],
            value: Math.round((prev[nameOfkey].value + 0.2) * 10) / 10,
          },
        };
      }
      if (nameOfkey === "iron") {
        return {
          ...prev,
          [nameOfkey]: {
            ...prev[nameOfkey],
            value: Math.round((prev[nameOfkey].value + 0.1) * 10) / 10,
          },
        };
      }
      return prev;
    });
  };

  return (
    <div className="main-resource-container">
      <div
        className="main-resource-container-img"
        style={{
          backgroundColor: `${backgroundColor}`,
          border: `3px solid ${borderColor}`,
        }}
        onClick={handleClickResource}
        onKeyDown={handleClickResource}
      >
        <img src={img} alt="wood-img" className="main-resource-img" />
        <div>
          <p>{name}</p>
          <p className="main-resource-per-click">{perClick}/click</p>
        </div>
      </div>
      <p>{Math.floor(value)}</p>
    </div>
  );
}
