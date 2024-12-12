import type { Dispatch } from "react";

export interface ResourcesContextType {
  mainResources: MainResourcesType;
  setMainResources: Dispatch<React.SetStateAction<MainResourcesType>>;
}

export interface MainResourcesType {
  wood: number;
  stone: number;
  iron: number;
  [key: string]: number;
}

export interface MainResourceProps {
  img: string;
  backgroundColor: string;
  borderColor: string;
  name: string;
  value: number;
  nameOfkey: string;
  perClick: string;
}
