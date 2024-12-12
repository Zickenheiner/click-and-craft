import type { ReactNode } from "react";
import ResourceProvider from "./ResourceProvider";

export default function GlobalContext({ children }: { children: ReactNode }) {
  return <ResourceProvider>{children}</ResourceProvider>;
}
