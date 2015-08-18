'use strict';

$(function(){

	var usersPath = 'https://localhost:3000/users/'
	var homePath = 'https://localhost:8080/'

	$('.submit').on('click', function(){
		$.get(usersPath).done(function(users){
			users.forEach(function(user){
				$('body').append('TEST')
			})
		})
	})




})