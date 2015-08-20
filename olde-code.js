$(function(){

	var usersPath = 'http://localhost:3000/users/'
	var treePath = 'http://localhost:3000/treeImages'
	var imageDisplay = $('#template-tree').html()
	var templateImage = Handlebars.compile(imageDisplay)


	$.get(usersPath)
		.done(function(users){
			users.forEach(function(user){
				// console.log(user)
			})
		})

	$.get(treePath)
		.done(function(treeImages){
			treeImages.forEach(function(treeImage){
				// console.log(treeImage.image)
				var endResult = templateImage({
					image: treeImage.image,
					id: treeImage.id
				})

				$('.gallery-primary-section').append(endResult)
			})
		})