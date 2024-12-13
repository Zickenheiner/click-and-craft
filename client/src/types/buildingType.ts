import type { Dispatch } from "react";

export interface BuildingContextType {
  building: Record<string, Building>;
  setBuilding: Dispatch<Record<string, Building>>;
}

export interface Building {
  name: string;
  cost: Record<string, number>;
  time: number;
  level: number;
  maxLevel: number;
  image: string;
  description: string;
}
