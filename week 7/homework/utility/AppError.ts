import { Error } from "mongoose"

class AppError extends Error {

     isOperational: boolean
     message: string

    constructor(status: string, statusCode: number) {
        super(status)
        
        this.message = `${statusCode}`.startsWith("4") ? "fail" : "error"
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor)
    }
}

export default AppError