//CREAR EL SLIDER
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
        draggable:true,
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
		]
	});
});


function cargarCambalachesRecientes(){
    
    let productos = JSON.parse(localStorage.getItem('ProductosCambalaches'));
    
    let size = productos.length;

    let reciente_1 = size - 4;
    let reciente_2 = size - 3;
	let reciente_3 = size - 2;
    let reciente_4 = size - 1;

	let cambalachesRecientes = `<div class="carousel__elemento">
	<img src="${productos[reciente_4].url}" alt="...">
	<h2>${productos[reciente_4].nombre_producto}</h2>
  </div>
  <div class="carousel__elemento">
	<img src="${productos[reciente_3].url}"  alt="...">
	<h2>${productos[reciente_3].nombre_producto}</h2>
  </div>
  <div class="carousel__elemento">
	<img src="${productos[reciente_2].url}"  alt="...">
	<h2>${productos[reciente_2].nombre_producto}</h2>
  </div>
  <div class="carousel__elemento">
	<img src="${productos[reciente_1].url}" alt="...">
	<h2>${productos[reciente_1].nombre_producto}</h2>
  </div>`
	document.getElementById("recientes").innerHTML = cambalachesRecientes;
    
}

cargarCambalachesRecientes();


  /***************FUNCIONES PARA EL LOGIN.HTML******************/

  
  //FUNCION PARA VALIDAR QUE EMAIL Y CORREO NO ESTEN VACIOS
function validarEspaciosCorreo(){
var correo = document.getElementById('emailUser').value;
var clave = document.getElementById('passwordUser').value;
if(correo == '' || clave == ''){
	return true;
}
}


/**
 * GUARDA EL ULTIMO NOMBRE QUE SE REGISTRO
 *  
 */
function guardarRegistroLogin(nombre){
   
    let jsonIngresos = JSON.parse(localStorage.getItem('IngresoCambalaches'));

    if (!jsonIngresos){
        jsonIngresos = [];
    }

    const nuevoIngresoCambalache = 
        {
            "nombre" : nombre
        };

    jsonIngresos.push(nuevoIngresoCambalache);

    localStorage.setItem('IngresoCambalaches',JSON.stringify(jsonIngresos));
}


/**
 * GUARDA EL ULTIMO CORREO QUE INGRESO
 *  
 */
 function guardarCorreoLogin(correo){
   
    let jsonIngresos = JSON.parse(localStorage.getItem('IngresoCorreoCambalaches'));

    if (!jsonIngresos){
        jsonIngresos = [];
    }

    const nuevoIngresoCambalache = 
        {
            "correo" : correo
        };

    jsonIngresos.push(nuevoIngresoCambalache);

    localStorage.setItem('IngresoCorreoCambalaches',JSON.stringify(jsonIngresos));
}


/*FUNCION PARA VALIDAR EL USUARIO SI YA ESTA INGRESADO ABRE SU DASHBOARD 
Y SI NO ENVIA UN MENSAJE PARA REGISTRARSE*/
function validarUsuarios(){
	let users = JSON.parse(localStorage.getItem('users'));

	for(user of users) {
	if(user.email == document.getElementById('emailUser').value && user.password == document.getElementById('passwordUser').value) { 
		guardarRegistroLogin(user.firtsName);
		guardarCorreoLogin(user.email);
		return true;
		}
	}

}

  //Funcion para crear el validar correo y usuario
function cargarLocalStorage(){
	let users = JSON.parse(localStorage.getItem('users'));
	let espacios = validarEspaciosCorreo();
	if(!users){
		alert("Primero debe registrarse para ingresar al sistema");
		window.location.href = "registro.html";
	}
	else if(espacios){
		alert("Debe de completar los campos email y password");
		limpiarCampos();
	}
	else{
		if(validarUsuarios()){
			window.location.href = "dashboard.html";
		}
		else{
			alert("Correo o contraseña incorrecta");
			limpiarCampos();
		}

	}

}

//FUNCION PARA VOLVER AL INICIO
function volverInicio(){
    window.location.href = "inicio.html";

}


//LIMPIAR CAMPOS
function limpiarCampos(){
    document.getElementById('emailUser').value = '';
    document.getElementById('passwordUser').value = '';
    document.getElementById('emailUser').focus();
}

