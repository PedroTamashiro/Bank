import { insufficientFounds } from "../error/insufficientFounds"
import { inactiveAccount } from "../error/inactiveAccount"
import { PeopleAccount } from "./PeopleAccount"
import { negativeValue } from "../error/negativeValue"

export abstract class Account {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (value: number): void => {
    this.validateStatus()
    if(value < 0){
      throw new negativeValue()
    }
      this.balance += value
  }

  withdraw = (value: number): void => {
    this.validateStatus()
    if(value > this.balance){
      throw new insufficientFounds()
    }else if(value < 0){
      throw new negativeValue()
    }
      this.balance -= value
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): void => {
    if(!this.status){
      throw new inactiveAccount()
    }
  }
}
