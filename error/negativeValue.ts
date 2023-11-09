export class negativeValue extends Error {
    public readonly name = 'NegativeValue'

    constructor() {
        super('NegativeValue.')
    }
}