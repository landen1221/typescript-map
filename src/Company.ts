import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    color: string = 'red';
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
        <div>
        <h2>Location of ${this.name}</h2>
        <h3><strong>${this.catchPhrase}</strong></h3>
        </div>
        `;
    }
}
