

$(function(){

	var paraPath = 'http://localhost:3000/howToParas/'
	var paraDisplay = $('#template-para-tree').html()
	var templatePara = Handlebars.compile(paraDisplay)
	

	$('.how-to-tree').on('click', function(e){
		e.preventDefault()


		$.get(paraPath)
			.done(function(paras){
				paras.forEach(function(para){
					var result = templatePara(para)
					console.log(para.para1)

					$('.para1').append(result)
					// $('.para2').append(result)

				})	
			})
		
	})
})



$('.how-to-selfie').on('click', function(e){
	e.preventDefault()
	$('.para1').remove()
	$('.para2').append(para.paraa)
})


