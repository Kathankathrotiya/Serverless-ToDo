'use strict';

const todosCreate = require('./todos-create.js');
const todosReadAll = require('./todos-read-all.js');
const todosReadOne = require('./todos-read-one.js');
const todosUpdate = require('./todos-update.js');
const todosDelete = require('./todos-delete.js');

const addCorsHeaders = (response) => {
  response.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
  };
  return response;
};

module.exports.create = (event, context, callback) => {
  todosCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(addCorsHeaders(response));
  });
};

module.exports.readAll = (event, context, callback) => {
  todosReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(addCorsHeaders(response));
  });
};

module.exports.readOne = (event, context, callback) => {
  todosReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(addCorsHeaders(response));
  });
};

module.exports.update = (event, context, callback) => {
  todosUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(addCorsHeaders(response));
  });
};

module.exports.delete = (event, context, callback) => {
  todosDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(addCorsHeaders(response));
  });
};
