

const errorHandler = (err, req, res, next) => {
    //ver si el error de codigo tiene estado definido si no, establecer codigo de estado predeterminado
    const statusCode = err.statusCode || 500;
    //construir objeto de respuesta del error 
    const errorResponse = {
        error: {
         message: err.message || "error interno del  servidor",
         code: err.code || "internal error",
        },
    };
    //enviar error formato json
    res.status(statusCode).json(errorResponse);
    
};

module.exports = errorHandler;