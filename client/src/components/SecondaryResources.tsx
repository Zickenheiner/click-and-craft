import { useResources } from "../contexts/ResourceProvider";
import "../styles/SecondaryResources.css";
import SecondaryResource from "./SecondaryResource";

export default function SecondaryResources() {
  const { secondaryResources } = useResources();
  return (
    <div className="secondary-resources-page-container">
      <h2>Ressources Secondaires</h2>
      <div className="secondary-resources-container">
        {Object.entries(secondaryResources).map(([key, resource]) => (
          <SecondaryResource key={key} resource={resource} />
        ))}
      </div>
    </div>
  );
}
