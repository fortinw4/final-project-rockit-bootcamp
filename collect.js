$(function(){

	var usersPath = 'http://localhost:3000/users/'
	var treePath = 'http://localhost:3000/treeImages/'
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
					image: treeImage.image
				})

				var map = new GMaps({
				  div: '.gmap',
				  lat: -12.043333,
				  lng: -77.028333
				});

				map.addMarker({
				  lat: -12.043333,
				  lng: -77.028333,
				  title: 'Lima',
				  click: function(e) {
				    alert('You clicked in this marker');
				  }
				});


				$('.gallery-primary-section').append(endResult)
			})
		})

	// function renderImage (image, map){
	// 	return templateImage({
	// 		image: treeImage.image,
	// 		map: map
	// 	})
	// }

})