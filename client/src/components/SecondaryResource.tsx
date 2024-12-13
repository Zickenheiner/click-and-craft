import "../styles/SecondaryResource.css";
import type { SecondaryResourceProps } from "../types/resourceType";

export default function SecondaryResource({
  resource,
}: SecondaryResourceProps) {
  return (
    <div key={resource.nameOfkey} className="secondary-resource-container">
      <img src={resource.img} alt={resource.name} style={{ width: "30px" }} />
      <div className="secondary-resource-value-container">
        <div className="secondary-resource-name-container">
          <p>{resource.name}</p>
        </div>
        <p>{resource.value}</p>
      </div>
    </div>
  );
}
