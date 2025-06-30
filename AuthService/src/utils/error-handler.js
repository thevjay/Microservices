const { StatusCodes } = require('http-status-codes')

class AppErrors extends Error {
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        explanation = 'Something went wrong',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super();      // Call parent Error constructor

        console.log("super key message:",explanation)
        this.message = message;
        this.explanation = explanation;
        this.name = name;
        this.statusCode = statusCode;
    }
}

module.exports = AppErrors