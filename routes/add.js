var data = require("../data.json");

exports.addFriend = function(req, res) {   
	// Your code goes here

	var Query = req.query.name;
	var Desc = req.query.description;
	var newFriend = {
			"name": Query,
			"description": Desc,
			"imageURL": "http://bridgesprep.org/wp-content/uploads/2013/10/Facebook-no-profile-picture-icon-620x389.jpg"
		};
	data["friends"].push(newFriend);
	res.render('add',data);
	console.log(data);
}