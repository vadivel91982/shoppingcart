var Product = require('../models/product');

var mongoose = require('mongoose');

var product = [
	new Product({
	imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
	title: 'Gothic Cdcovers cc front',
	description: 'Gothic Cdcovers cc front ',
	price: 10
	}),
	new Product({
		imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
		title: 'Gothic Cdcovers cc front',
		description: 'Gothic Cdcovers cc front ',
		price: 10
	}),
	new Product({
		imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
		title: 'Gothic Cdcovers cc front',
		description: 'Gothic Cdcovers cc front ',
		price: 10
	})
];

var done = 0;
for(var i = 0; i < product.length; i++){
	product[i].save(function(err, result){
		done++;
		if(done === product.length){
			exit();
		}
	});	
}

function exit() {
	mongoose.disconnect();	
}
