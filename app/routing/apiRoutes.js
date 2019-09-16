var friends = require('../data/friends');

var path = require('path');




module.exports = function(app) {
    app.get('api/friends', function(req, res){
        res.json(friends);
    });






        app.post('/api/friends', function(req, res){



    var userData = req.body;
    // var userName = userData.name;
    // var userPhoto = userData.photo;
     var userScores = userData.scores;
    
        var bestMatch = {
            name: '',
            photo: '',
            friendDifference: 1000
        };

    
    for (let index = 0; index < friends.length; index++) {
        //const element = array[index]; 
        
        totalDifference = 0;

        for (let indexTwo = 0; indexTwo < userScores.length; indexTwo++) {
            //const element = array[indexTwo];

            totalDifference += Math.abs(friends[index].scores[indexTwo] - userScores[indexTwo]);

            if (totalDifference <= bestMatch.friendDifference) {

                bestMatch.name = friends[index].name;
                bestMatch.photo = friends[index].photo;
                bestMatch.friendDifference = totalDifference;

                
            }


            
        }


        
    }

    friends.push(userData);

    res.json(bestMatch);

    

});








};

   