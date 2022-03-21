import { Ability } from "./ability.model";

export interface Provider {

    idProvider: number;
    userName: string;
    contact: string;
    listAbilities: Array<Ability>;

}