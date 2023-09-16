const express = require('express');

const messageController = require('../controllers/messages.controller');

const messageRoute = express.Router();

messageRoute.get('/', messageController.getMessages)
messageRoute.post('/', messageController.postMessage);

module.exports = messageRoute;