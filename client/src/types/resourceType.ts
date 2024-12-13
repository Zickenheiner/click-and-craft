import type { Dispatch } from "react";

export interface ResourcesContextType {
  mainResources: MainResourcesType;
  setMainResources: Dispatch<React.SetStateAction<MainResourcesType>>;
  secondaryResources: SecondaryResourcesType;
  setSecondaryResources: Dispatch<React.SetStateAction<SecondaryResourcesType>>;
}

export interface MainResourcesType {
  wood: MainResourceType;
  stone: MainResourceType;
  iron: MainResourceType;
  [key: string]: MainResourceType;
}

export interface MainResourceType {
  name: string;
  nameOfkey: string;
  value: number;
  perClick: number;
  backgroundColor: string;
  borderColor: string;
  img: string;
}

export interface MainResourceProps {
  resource: MainResourceType;
}

export interface SecondaryResourcesType {
  coal: SecondaryResourceType;
  board: SecondaryResourceType;
  ingot: SecondaryResourceType;
  cut_stone: SecondaryResourceType;
  tool: SecondaryResourceType;
  structure: SecondaryResourceType;
  [key: string]: SecondaryResourceType;
}

export interface SecondaryResourceType {
  name: string;
  nameOfkey: string;
  value: number;
  img: string;
}

export interface SecondaryResourceProps {
  resource: SecondaryResourceType;
}
