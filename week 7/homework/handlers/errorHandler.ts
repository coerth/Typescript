import { Request, Response, NextFunction } from 'express';


export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500,
    err.status = err.status  || "fail"
  
    res.status(err.statusCode).json({
        status: err.status,
    })
  }