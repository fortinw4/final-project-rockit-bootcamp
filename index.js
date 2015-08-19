'use strict';

$(function(){

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

		$.post('http://localhost:3000/users', values)
			.done(function(){
				console.log(values.image)
				if (values.id === values.treeId) {
					console.log(values.image)
				} else {
					console.log('matching error')
				}
				$('body').append('<p>' + values.firstName + '</p>')
			})
			.fail(function(){
				console.log('form submission error!')
			})
	})
})




// read in all values from the form
// put them inside object literal
// console log object literal