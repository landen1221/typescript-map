/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const newUser = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(newUser);
customMap.addMarker(company);
