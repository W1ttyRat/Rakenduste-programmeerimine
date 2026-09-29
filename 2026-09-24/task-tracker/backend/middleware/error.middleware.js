const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    console.error(err.stack || err);

    if (statusCode === 404) {
        return res.status(404).json({
            error: 'Task not found',
        });
    }
    try {
        if (statusCode === 400) {
            return res.status(400).json({
                error: err.message || 'Invalid request',
            });
        }
    } catch (error) {
        console.error('Error in error handling:', error);
    }

    return res.status(500).json({
        error: 'Internal server error',
    });
};

module.exports = errorHandler;