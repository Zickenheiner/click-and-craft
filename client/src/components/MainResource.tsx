import { useResources } from "../contexts/ResourceProvider";
import "../styles/MainResource.css";
import type { MainResourceProps, MainResourcesType } from "../types/type";

export default function MainResource({
  img,
  backgroundColor,
  borderColor,
  name,
  nameOfkey,
  value,
  perClick,
}: MainResourceProps) {
  const { setMainResources } = useResources();

  const handleClickResource = () => {
    setMainResources((prev: MainResourcesType) => {
      if (nameOfkey === "wood") {
        return {
          ...prev,
          [nameOfkey]: prev[nameOfkey] + 1,
        };
      }
      if (nameOfkey === "stone") {
        return {
          ...prev,
          [nameOfkey]: prev[nameOfkey] + 0.2,
        };
      }
      if (nameOfkey === "iron") {
        return {
          ...prev,
          [nameOfkey]: prev[nameOfkey] + 0.1,
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
      <p>{value.toFixed(0)}</p>
    </div>
  );
}
