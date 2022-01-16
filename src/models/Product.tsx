import {v4 as uuid} from 'uuid';

export class Product{

    id: string = uuid();
    name: string;
    quantity: number;
    unit: string;
    bought: boolean = false;


    constructor(name: string, quantity: number, unit: string) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }

}
