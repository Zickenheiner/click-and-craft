import type {
  MainResourceType,
  SecondaryResourceType,
} from "../types/resourceType";

export class MainResources implements MainResourceType {
  constructor(
    public name: string,
    public nameOfkey: string,
    public value: number,
    public backgroundColor: string,
    public borderColor: string,
    public perClick: number,
    public img: string,
  ) {
    this.name = name;
    this.nameOfkey = nameOfkey;
    this.value = value;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.perClick = perClick;
    this.img = img;
  }
}

export class SecondaryResources implements SecondaryResourceType {
  constructor(
    public name: string,
    public nameOfkey: string,
    public value: number,
    public img: string,
  ) {
    this.name = name;
    this.nameOfkey = nameOfkey;
    this.value = value;
    this.img = img;
  }
}
