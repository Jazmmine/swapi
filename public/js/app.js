
//LISTAR
/*var template = '<div class="col s12 m4">' +
		    '<div class="card horizontal hoverable">' +
		      	'<div class="card-stacked">' +
		        	'<div class="card-content amber white-text">' +
		          		'<p>Hi, my name is <strong>{{name}}</strong></p>' +
		        	'</div>' +
			        '<div class="card-action">' +
			          	'<a href="{{url}}">See more about me</a>' +
			        '</div>' +
			    '</div>' +
	    	'</div>' +
	  	'</div>';


var formatResponse = function(response){
		console.log(response);
		//$("#total").text(response.count);
	
			$("#total").text(response.results.length);
			var personajes = "";
			//$.each(array,callback)
			$.each(response.results, function (i,personaje){
				personajes += template.replace("{{name}}", personaje.name);
			});
			$("#people").html(personajes);
			//$("#next").atrr("href", response.next); para evitar su implicancia con el ancor, no carga jquery o evente al darle click nos va adar la url del api y eso no queremos
			$("#next").attr("data-url", response.next);		
	
		if (!response.next){
			$("#next").fadeOut();
		}
	}

//fadeIn()
/*
es el duplicado de arriba
function(response){
			// el formato de la respuesta que nos va a dar la url , nos da lo mismo de antes, pero su resultscambia
			//es mala practica xk estamos repitiendo coidgo, lo podriamos hacer en funcion
			$("#total").text(response.results.length);
			var personajes = "";
			//$.each(array,callback)
			$.each(response.results, function (i,personaje){
				personajes += template.replace("{{name}}", personaje.name);
			});
			$("#people").html(personajes);
			//$("#next").atrr("href", response.next); para evitar su implicancia con el ancor, no carga jquery o evente al darle click nos va adar la url del api y eso no queremos
			$("#next").attr("data-url", response.next)			
			});
*/
/*$(document).ready(function(){
	//peticion AJAX (ajax, get o getJSON)
	$.getJSON("http://swapi.co/api/people/", formatResponse);

	$("#next").click(function(e){
		e.preventDefault();
		//var url = $(this).attr("href");
		var url = $(this).attr("data-url");
		console.log(url);
		$.getJSON(url, formatResponse);
	});
});*/

//MOSTRAR

var template = '<div class="col s12 m4">' +
		    '<div class="card horizontal hoverable">' +
		      	'<div class="card-stacked">' +
		        	'<div class="card-content amber white-text">' +
		          		'<p>Hi, my name is <strong>{{name}}</strong></p>' +
		        	'</div>' +
			        '<div class="card-action">' +
			          	'<a data-show-url="{{url}}" class="about">See more about me</a>' +
			        '</div>' +
			    '</div>' +
	    	'</div>' +
	  	'</div>';


var formatResponse = function(response){
		console.log(response);
		//$("#total").text(response.count);
	
			$("#total").text(response.results.length);
			var personajes = "";
			//$.each(array,callback)
			$.each(response.results, function (i,personaje){
				personajes += template
					.replace("{{name}}", personaje.name)
					.replace("{{url}}", personaje.url);
			});
			$("#people").html(personajes);
			//$("#next").atrr("href", response.next); para evitar su implicancia con el ancor, no carga jquery o evente al darle click nos va adar la url del api y eso no queremos
			$("#next").attr("data-url", response.next);	
			$("#previous").attr("data-show-url", response.previous);	
	
		if (!response.next){
			$("#next").fadeOut();
		}

		if(!response.previous){
			$("#previous").fadeOut();
		}
		else if(response.previous && response.next){
			$("#previous").fadeIn();
			$("#next").fadeIn();
		}
	}
$(document).ready(function(){
	//peticion AJAX (ajax, get o getJSON)
	$.getJSON("http://swapi.co/api/people/", formatResponse);

	$("#next").click(function(e){
		e.preventDefault();
		//var url = $(this).attr("href");
		var url = $(this).attr("data-url");
		console.log(url);
		$.getJSON(url, formatResponse);
	});

	$("#people").on("click", ".about",function(e){
		e.preventDefault();
		alert("Hola");

	});

	$("#previous").click(function(e){
		e.preventDefault();
		var urls = $(this).attr("data-show-url");
		console.log(urls);
		$.getJSON(urls, formatResponse);
	});
});

