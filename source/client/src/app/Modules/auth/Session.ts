import { UserDetails } from 'src/app/Interfaces/user.details';

export class Session {

    private inactivityTimeout: number = 0;
    private requestAttemptsCounter: number = 0;
    private visitTimestamp: number = new Date().getMilliseconds();
    private token: string = '';

    constructor(
        public userDetails: UserDetails | null
    ) {

    }
}