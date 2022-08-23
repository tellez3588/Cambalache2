/*FUNCIONES PARA REGISTRO.HTML*/

//FUNCION PARA LIMPIAR LOS CAMPOS
function limpiarCampos(){
    document.getElementById('first name').value = '';
    document.getElementById('Last name').value = '';
    document.getElementById('Address').value = '';
    document.getElementById('Address 2').value = '';
    document.getElementById('Country').value = '';
    document.getElementById('city').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('first name').focus();
}

//CAPTURAR LOS DATOS DEL FORM
function capturarDatos(){
    var user = {
        firtsName: document.getElementById('first name').value,
        lastName: document.getElementById('Last name').value,
        address: document.getElementById('Address').value,
        address2: document.getElementById('Address 2').value,
        country: document.getElementById('Country').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
        
      };
    return user
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

//RETORNA UN TRUE SI EL CORREO YA EXISTE
function emailCheck(email) {

	let users = JSON.parse(localStorage.getItem('users'));
    for(user of users) {
        if(user.email == email) { 
            return true;
        }
    }	
}


//FUNCION PARA GUARDAR LA INFORMACION DEL USUARIO
function guardarUsuario(){

    let users = JSON.parse(localStorage.getItem('users'));

    if (!users){
        users = [];
        var user = capturarDatos();
        guardarRegistroLogin(document.getElementById('first name').value);
        guardarCorreoLogin(document.getElementById('email').value);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registro exitoso!!");
        window.location.href = "dashboard.html";
    }else{
        var correo = document.getElementById('email').value;
        if(emailCheck(correo)){
            alert("Correo ya existe!!");
        }else{
            var user = capturarDatos();
            guardarRegistroLogin(document.getElementById('first name').value);
            guardarCorreoLogin(document.getElementById('email').value);
            users.push(user);
            guardarRegistroLogin(document.getElementById('first name').value);
            localStorage.setItem('users', JSON.stringify(users));
            alert("Registro exitoso!!");
            window.location.href = "dashboard.html";
        }       
    }
}

//FUNCION PARA VOLVER AL INICIO
function volverInicio(){
    window.location.href = "inicio.html";

}