import { Account } from "./Account";

export class AccountDeposit extends Account{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    depositMore10 =  (value: number): void => {
        this.validateStatus()
        this.deposit(value + 10)
    };
}