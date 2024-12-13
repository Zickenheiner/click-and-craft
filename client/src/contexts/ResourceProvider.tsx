import { type ReactNode, createContext, useContext, useState } from "react";
import { MainResources, SecondaryResources } from "../services/resourceClass";
import type { ResourcesContextType } from "../types/resourceType";

import board from "../assets/images/board.png";
import coal from "../assets/images/coal.png";
import cut_stone from "../assets/images/cut_stone.png";
import ingot from "../assets/images/ingot.png";
import iron from "../assets/images/iron.png";
import stone from "../assets/images/stone.png";
import structure from "../assets/images/structure.png";
import tool from "../assets/images/tool.png";
import wood from "../assets/images/wood.png";

const ResourceContext = createContext<ResourcesContextType | null>(null);

export default function ResourceProvider({
  children,
}: { children: ReactNode }) {
  const [mainResources, setMainResources] = useState({
    wood: new MainResources("Bois", "wood", 0, "#E59A61", "#94534E", 1, wood),
    stone: new MainResources(
      "Pierre",
      "stone",
      0,
      "#D9D9D9",
      "#ABAAB0",
      0.2,
      stone,
    ),
    iron: new MainResources("Fer", "iron", 0, "#AAA6A6", "#505050", 0.1, iron),
  });

  const [secondaryResources, setSecondaryResources] = useState({
    coal: new SecondaryResources("Charbon", "coal", 0, coal),
    board: new SecondaryResources("Planche", "board", 0, board),
    ingot: new SecondaryResources("Lingot", "ingot", 0, ingot),
    cut_stone: new SecondaryResources(
      "Pierre taillée",
      "cut_stone",
      0,
      cut_stone,
    ),
    tool: new SecondaryResources("Outil", "tool", 0, tool),
    structure: new SecondaryResources("Structure", "structure", 0, structure),
  });

  return (
    <ResourceContext.Provider
      value={{
        mainResources,
        setMainResources,
        secondaryResources,
        setSecondaryResources,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
}

export const useResources = () => {
  const context = useContext(ResourceContext);
  if (context === null) {
    throw new Error("useResource must be used within a ResourceProvider");
  }
  return context;
};
