const { friends } = require('../models/friends.model')


function getFriends(req, res) {
    res.status(200).json(friends);
}



function getFriendsById(req,res) {
    const id = req.params.id;
    const friend = friends[id-1];
    if(friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend doesn't exist"
        })
    }
}


function addFriend(req,res) {
    if(!req.body.name) {
       return res.status(400).json({
            error: "Missing Name"
        })
    }

    const newFriend = {
        id: friends.length+1,
        name: req.body.name
    }

    friends.push(newFriend);

    res.status(200).json(newFriend);
}

module.exports = {
    getFriends,
    getFriendsById,
    addFriend
}