
$(function(){

	var usersPath = 'http://localhost:3000/users/'
	var treePath = 'http://localhost:3000/treeImages/'
	var uploadedImage

	// Mimicking our file upload
	$.get(treePath)
		.done(function(treeImages){
			var randomImageId = _.random(0, treeImages.length - 1)
			uploadedImage = treeImages[randomImageId]
		})

	$('.get-involved-form').submit(function(e){
		e.preventDefault()

		var values = {
			treeImagePath: uploadedImage.path,
			treeImageLat: uploadedImage.lat,
			treeImageLng: uploadedImage.lng,
			firstName: $('.first-name').val(),
			lastName: $('.last-name').val(),
			email: $('.email').val(),
			city: $('.city').val(),
			state: $('.region-select-secondary').val(),
			zip: $('.zip').val(),
			country: $('.region-select-primary').val()
		}

		$.post(usersPath, values)
			.done(function(){
				location.href = 'members.html'
			})
			.fail(function(){
				alert('form submission error!')
			})

	})
})