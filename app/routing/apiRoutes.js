var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get('api/friends', function(req, res){
        res.json(friends);
    });


app.post('/apifriends', function(req, res){
    var totalDiference = 0;
    var bestMatch = {
        name: '',
        photo: '',
        friendDifference: 1000
    };
});

};