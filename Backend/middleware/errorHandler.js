const errorHandler=(err,req,res,next)=>{
    let statusCode=err.statusCode || 500;
    let message= err.message || 'Server Error';

    //mongoose bad object

    if(err.name==="CastError"){
        message='Resource is not Found';
        statusCode=404;
    }

    //mongoose duplicate key
    if(err.code===11000){
        const field= Object.keys(err.keyValue)[0];
        message= `${field} already exists`;
        statusCode=400;
    }

    //mongoose validation error
    if(err.name==='ValidationError'){
        message=Object.values(err.errors).map(val=>val.message).join(', ');
        statusCode=400;
    }

    //multer file size error
    if(err.code=== 'LIMIT_FILE_SIZE'){
        message='file size exceeds the maximum limit if 10mb';
        statusCode=400
    }

    //jwt error
    if(err.name==='JsonWebTokenError'){
        message:'invalid token';
        statusCode:401
    }

    if(err.name === 'TokenExpiredError'){
        message:'Token Expired';
        statusCode:401
    }

    console.error('Error:' ,{
        message:err.message,
        stack: process.env.NODE_ENV=== 'development' ? err.stack : undefined
    });

    res.status(statusCode).json({
        success:false,
        error:message,
        statusCode,
        ...(process.env.NODE_ENV=== 'development' && {stack:err.stack})
    });


}

export default errorHandler