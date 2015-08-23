

$(function(){

	var paraPath = 'http://localhost:3000/howToParas/'
	
	$.get(paraPath)
		.done(function(paras){
			paras.forEach(function(para){
				
			$('.how-to-tree').on('click', function(e){
				e.preventDefault()
				$('.para1').append('1. Dig a hole 3 to 4 times wider than the container. The hole should have sloping sides like a saucer to allow for proper root growth.')
				$('.para1').append('2. Carefully remove the tree from the container keeping the soil around the roots intact.')



			})

			$('.how-to-selfie').on('click', function(e){
				e.preventDefault()
				$('.para1').remove()
				$('.para2').append(para.pa)
			})
		})
	})
	console.log('test')
	
})






