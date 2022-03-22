const { APIError, InternalServerError } = require('rest-api-errors');
const { STATUS_CODES } = require('http');


const errorHandler = (err, req, res, next) => {
	const error = (err.status === 401 ||
		err instanceof APIError) ? err : new InternalServerError();

	if (true) {
		console.log('-----> Unknown server error...');
		// todo: comment here for production
		console.log(err);
	}

	if (err.status === 404) {
		return res.status(404).json({ message: 'Resource not found' });
	}

	return res
		.status(error.status || 500)
		.json({
			code: error.code || 500,
			message: error.message || STATUS_CODES[error.status],
		});
};

module.exports = { errorHandler };