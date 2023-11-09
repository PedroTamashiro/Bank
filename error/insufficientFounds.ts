export class insufficientFounds extends Error {
    public readonly name = 'InsufficientFounds'

    constructor() {
        super('Insufficient Founds.')
    }
}