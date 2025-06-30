const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-codes');

class ValidationError extends AppError {
    constructor(error){
        let errorName = error.name;
        const explanation = error.errors.map(err => err.message);
        // console.log("inside the validation-error:",error)
        // console.log(explanation)
        
        super(
            errorName,
            'Not able to validate the data sent in the request',
            explanation,
            StatusCodes.BAD_REQUEST
        )
    }
}



module.exports = ValidationError;
 