import { type ReactNode, createContext, useContext, useState } from "react";
import type { BuildingContextType } from "../types/buildingType";

const BuildingContext = createContext<BuildingContextType | null>(null);

export default function BuildingProvider({
  children,
}: { children: ReactNode }) {
  const [building, setBuilding] = useState({});
  return (
    <BuildingContext.Provider value={{ building, setBuilding }}>
      {children}
    </BuildingContext.Provider>
  );
}

export const useBuilding = () => {
  const context = useContext(BuildingContext);
  if (context === null) {
    throw new Error("useBuilding must be used within a BuildingProvider");
  }
  return context;
};
