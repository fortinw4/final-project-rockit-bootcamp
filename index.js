'use strict';

$(function(){

	var usersPath = 'http://localhost:3000/users/'
	var treePath = 'http://localhost:3000/treeImages/'

	$('form').submit(function(e){
		e.preventDefault()
		var values = {
			id: _.random(1, 10),
			treeId: _.random(1, 10),
			firstName: $('.first-name').val(),
			lastName: $('.last-name').val(),
			email: $('.email').val(),
			city: $('.city').val(),
			state: $('.region-select-secondary').val(),
			zip: $('.zip').val(),
			country: $('.region-select-primary').val()
		}

		var treeVal = {
			id: _.random(1, 10),
			image: 'images/tree-selfie-will1.jpg'
		}


		$.post(usersPath, values)
			.done(function(){
				if (values.treeId === treeVal.id) {
					console.log(values.firstName)
				} else {
					console.log('matching error')
				}
				$('.output-area').append('<p>' + values.firstName + '</p>')
				$.get(treePath, treeVal)
					.done(function(){
						$('.output-area').append('<img src=' + treeVal.image + '>')
					})
			})
			.fail(function(){
				console.log('form submission error!')
			})

	})
})




// read in all values from the form
// put them inside object literal
// console log object literal