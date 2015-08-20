$(function(){

	var usersPath = 'http://localhost:3000/users/'
	var imageDisplay = $('#template-user-content').html()
	var templateUser = Handlebars.compile(imageDisplay)

	$.get(usersPath)
		.done(function(users){
			users.forEach(function(user){
				var result = templateUser(user)
				$('.user-list').append(result)

			})
		})

})
