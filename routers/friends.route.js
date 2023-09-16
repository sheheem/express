const express = require('express');
const friendsController = require('../controllers/friends.controller');

const friendsRoute = express.Router();

friendsRoute.get('/', friendsController.getFriends);
friendsRoute.get('/:id', friendsController.getFriendsById);
friendsRoute.post('/', friendsController.addFriend);

module.exports = friendsRoute