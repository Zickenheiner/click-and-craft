import type { ReactNode } from "react";
import BuildingProvider from "./BuildingProvider";
import ResourceProvider from "./ResourceProvider";

export default function GlobalContext({ children }: { children: ReactNode }) {
  return (
    <ResourceProvider>
      <BuildingProvider>{children}</BuildingProvider>
    </ResourceProvider>
  );
}
