class Forbidden extends Error {
    constructor(message, details) {
        super(message);
        this.details = details;
        // a workaround to make `instanceof ClientError` work in ES5
        // see https://github.com/babel/babel/issues/4485
        this.constructor = Forbidden;
        this.__proto__ = Forbidden.prototype; // eslint-disable-line no-proto
    }
}

export default Forbidden;
