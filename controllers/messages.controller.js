const path = require('path')

function getMessages(req,res){
    // res.sendFile(path.join(__dirname, '..', 'public', 'images','starfield.jpg'))
    res.render('messages', {
        title: 'Messages',
        friend: 'Danish'
    })
}

function postMessage(req,res) {
    console.log('Updating Messages....');
}

module.exports = {
    getMessages,
    postMessage
}