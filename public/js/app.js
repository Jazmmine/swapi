//1. crea un objeto XHR

var xhr = new XMLHttpRequest();
//2. Utiliza un Event Handler 
//xhr.onreadystatechange = function(){    };
var callback = function () {

};

//3. Abrir una conexion 
xhr.addEventListener("readystatechange", callback);

var url = "http://localhost:2222/index.html";
xhr.open("GET",url);

// Enviar la peticion
	xhr.send();
