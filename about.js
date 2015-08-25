
$(function(){

	var paraPath = 'http://localhost:3000/howToParas/'

	var paraTreeDisplay = $('#template-para-tree').html()
	var templateParaTree = Handlebars.compile(paraTreeDisplay)
	
	var paraSelfieDisplay = $('#template-para-selfie').html()
	var templateParaSelfie = Handlebars.compile(paraSelfieDisplay)

	$.get(paraPath)
		.done(function(paras){
			
			var resultTree = templateParaTree(paras[0])
			var resultSelfie = templateParaSelfie(paras[1])

			$('.how-to-tree').on('click', function(e){
				e.preventDefault()
				$('.output-about').html(resultTree)
			})	

			$('.how-to-selfie').on('click', function(e){
				e.preventDefault()
				$('.output-about').html(resultSelfie)
			})
			$('.output-about').html(resultTree)
	})
})