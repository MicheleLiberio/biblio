import { Copies } from './../copy';
import { User } from 'src/app/class/user/user';

export class Lend {
    copies: Copies;
    expectedReturningDate: Date;
    isLent: boolean;
    lendindDate: Date;
    readers: User;
    returningDate: Date;
}
