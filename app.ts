import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AccountDeposit } from './class/AccountDeposit'

const Company1 = new CompanyAccount('Brastemp', 1)
const Company2 = new CompanyAccount('Renner', 2)

const people1 = new PeopleAccount(1234,'João', 101)

const depositAccount = new AccountDeposit('Lucas', 201)

const value1 = 150, value2 = 0, value3 = -50, value4 = 10//Definindo valores de teste para as funções

Company1.deposit(value1)
Company1.getBalance()

depositAccount.depositMore10(value1)
depositAccount.getBalance()

//Company2.deposit(value3) Apita o erro de "Valor Negativo"

people1.deposit(value4)
people1.getBalance()

Company1.withdraw(value4)
Company1.getBalance()
//Company1.withdraw(value1) apita o erro de "Fundos insuficientes"

Company2.getLoan(value1)
Company2.deposit(value4)
Company2.getDebt()
Company2.getBalance()
