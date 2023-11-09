import { Account } from "./Account"

export class CompanyAccount extends Account {
  private debt: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    this.validateStatus()
    this.deposit(value)
    this.debt -= value
  }
  getDebt = () => {
    console.log(this.debt)
  }
}
