import { type ReactNode, createContext, useContext, useState } from "react";
import type { ResourcesContextType } from "../types/type";

const ResourceContext = createContext<ResourcesContextType | null>(null);

export default function ResourceProvider({
  children,
}: { children: ReactNode }) {
  const [mainResources, setMainResources] = useState({
    wood: 0,
    stone: 0,
    iron: 0,
  });

  return (
    <ResourceContext.Provider value={{ mainResources, setMainResources }}>
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
