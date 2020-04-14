'use strict';

const uuidv4 = require('uuid/v4');

const badRequest = (e, uri) => ({
  "sid": uuidv4(),
  "errorCode": 400,
  "errorName": e.name,
  "errorMessage": e.message,
  // "uri": uri,
  "createdAt": new Date()
});

const unauthorized = (e, uri) => ({
  "sid": uuidv4(),
  "errorCode": 401,
  "errorName": e.name,
  "errorMessage": e.message,
  "uri": uri,
  "createdAt": new Date()
});

const unsupportedFile = (e, uri) => ({
  "sid": uuidv4(),
  "errorCode": 415,
  "errorName": e.name,
  "errorMessage": e.message,
  "uri": uri,
  "createdAt": new Date()
});

const paymentRequired = (e, uri) => ({
  "sid": uuidv4(),
  "errorCode": 402,
  "errorName": e.name,
  "errorMessage": e.message,
  "uri": uri,
  "createdAt": new Date()
});

const formatError = (message = 'Error response not specified.', name = null, fields = []) => {
  const response = fields.count > 0 ? fields : [{ name, message }];
  return (JSON.stringify(response));
};

function fieldsFormatError(fields) {
  this.name = 'fieldsFormatError';
  this.message = fields || 'Default Message';
  this.stack = (new Error()).stack;
}
fieldsFormatError.prototype = Object.create(Error.prototype);
fieldsFormatError.prototype.constructor = fieldsFormatError;

const Unauthorized = (message) => {
  const response = { message};
  return (JSON.stringify(response));
}

module.exports = {
  formatError,
  fieldsFormatError,
  badRequest,
  unauthorized,
  unsupportedFile,
  paymentRequired,
  Unauthorized
}
