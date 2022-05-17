import { ICoordinate } from "./coordinate.interface";

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: ICoordinate;
}
