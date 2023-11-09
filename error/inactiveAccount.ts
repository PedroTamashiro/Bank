export class inactiveAccount extends Error {
    public readonly name = 'InactiveAccount'

    constructor() {
        super('Inactive Account.')
    }
}