const success = (res,data=null,message='Success') => {
    return res.status(200).json({
        status:'success',
        message:message,
        data:data
    });
}

const  errorresponse = (res,message="Something went wrong") => {
    return res.status(500).json({
        status:'error',
        message:message
    });
}

const notFound = (res,message="Resource not found") => {
    return res.status(404).json({
        status:'error',
        message:message
    });
}