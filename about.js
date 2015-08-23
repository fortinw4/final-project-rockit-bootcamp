

$(function(){

	var paraPath = 'http://localhost:3000/howToParas/'

	var paraTreeDisplay = $('#template-para-tree').html()
	var templateParaTree = Handlebars.compile(paraTreeDisplay)
	
	var paraSelfieDisplay = $('#template-para-selfie').html()
	var templateParaSelfie = Handlebars.compile(paraSelfieDisplay)

	var resultTree
	var resultSelfie


		$.get(paraPath)
			.done(function(paras){
				paras.forEach(function(para){

					$('.how-to-tree').on('click', function(e){
						e.preventDefault()
						resultTree = templateParaTree(para)
						$('.para1').append(resultTree)
					})	

					$('.how-to-selfie').on('click', function(e){
						e.preventDefault()
						resultSelfie = templateParaSelfie(para)
						$('.para1').hide()
						$('.para2').append(resultSelfie)
					})
					
			})
	})
})
















// $(function(){

// 	var paraPath = 'http://localhost:3000/howToParas/'
// 	var paraDisplay = $('#template-para-tree').html()
// 	var templatePara = Handlebars.compile(paraDisplay)
	

// 	$('.how-to-tree').on('click', function(e){
// 		e.preventDefault()


// 		$.get(paraPath)
// 			.done(function(paras){
// 				paras.forEach(function(para){
// 					var result = templatePara(para)
// 					console.log(para.para1)

// 					$('.para1').append(result)
// 					// $('.para2').append(result)

// 				})	
// 			})
		
// 	})
// })



// $('.how-to-selfie').on('click', function(e){
// 	e.preventDefault()
// 	$('.para1').remove()
// 	$('.para2').append(para.paraa)
// })



