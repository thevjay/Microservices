const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-codes');

class ClientError extends AppError {
    constructor(name,message,explanation,statusCode){
        //let errorName = error.name;
        //const explanation = error.errors.map(err => err.message);
        // console.log("inside the validation-error:",error)
        // console.log(explanation)
        
        super(
            name,
            message,
            explanation,
            statusCode
        )
    }
}



module.exports = ClientError;
 