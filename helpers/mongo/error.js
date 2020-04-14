'use strict';

const errorPaths = (e) =>{
	const { errors } = e;
	let paths = [];
	for (const prop in errors) {
		const error = { name: prop, message:  `is ${errors[prop].kind}` }
	  paths.push(error);
	}
	return { isError: true, paths };
}

module.exports = {
	errorPaths
}