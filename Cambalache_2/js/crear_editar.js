
/*****FUNCIONES PARA GUARDAR EL PRODUCTO NUEVO*****/

//VALIDAR LA LONGITUD DEL NOMBRE
function validarNombre(){
    var Max_Length = 50;
    var length = document.getElementById("product name").value.length;
    if (length > Max_Length) {
        var address1 = document.getElementById("product name");
        address1.parentNode.innerHTML = address1.parentNode.innerHTML + "<p style='color:red'>La longitud máxima es de "+ Max_Length + " caracteres, digitó " + length + " caracteres</p>";
    }
}


//VALIDAR LA LONGITUD DEL BUSCO
function validarBusco(){
    var Max_Length = 300;
    var length = document.getElementById("busco").value.length;
    if (length > Max_Length) {
        var address1 = document.getElementById("busco");
        address1.parentNode.innerHTML = address1.parentNode.innerHTML + "<p style='color:red'>La longitud máxima es de "+ Max_Length + " caracteres, digitó " + length + " caracteres</p>";
    }
}

//VALIDAR LA LONGITUD DEL DESCRIPCION
function validarDescripcion(){
    var Max_Length = 300;
    var length = document.getElementById("description").value.length;
    if (length > Max_Length) {
        var address1 = document.getElementById("description");
        address1.parentNode.innerHTML = address1.parentNode.innerHTML + "<p style='color:red'>La longitud máxima es de "+ Max_Length + " caracteres, digitó " + length + " caracteres</p>";
    }
}

//VALIDAR NO TENER ESPACIOS EN BLANCO
function validarCampos(){

    let nombre = document.getElementById('product name').value;
    let descripcion = document.getElementById('description').value;
    let url = document.getElementById('url').value;
    let busco = document.getElementById('busco').value;

    if (nombre == "" || descripcion == "" || url == "" || busco == "" ) {
        //window.alert("Error hay espacios vacios");
        return true;
    }
}


//CAPTURAR LA INFORMACION DEL PRODUCTO

function capturarDatos(id){

    var user = nombreUsuario();
    var correo = correoUsuario();
    var producto = {
    id: id,   
    usuario: user,
    correo: correo,
    nombre_producto: document.getElementById('product name').value,
    descripcion: document.getElementById('description').value,
    url: document.getElementById('url').value,
    busco: document.getElementById('busco').value     
    };
    return producto  
}

// MUESTRA EL NOMBRE DEL USUARIO
function nombreUsuario(){
    let ingresos = JSON.parse(localStorage.getItem('IngresoCambalaches'));

    let nombre = "";

    for (x of ingresos){
        nombre = x.nombre;
    }

    return nombre;
}


// MUESTRA EL CORREO DEL USUARIO
function correoUsuario(){
    let correos = JSON.parse(localStorage.getItem('IngresoCorreoCambalaches'));

    let email = "";

    for (x of correos){
        email = x.correo;
    }

    return email;
}

//GUARDAR PRODUCTO
function guardarProducto(){
    let nombre = document.getElementById('product name').value;
    let descripcion = document.getElementById('description').value;
    let url = document.getElementById('url').value;
    let busco = document.getElementById('busco').value;
    let editar = localStorage.getItem('editarCambalache');

    if(editar > 0){
        guardarEditarCambalache(nombre, descripcion, url, busco);
        localStorage.removeItem('editarCambalache');
        window.location.href = "dashboard.html";

    }else{
        if(!validarCampos()){
            let listaProductos = JSON.parse(localStorage.getItem('ProductosCambalaches'));
            var id = listaProductos.length + 1;
            var producto = capturarDatos(id);
            listaProductos.push(producto);
            localStorage.setItem("ProductosCambalaches", JSON.stringify(listaProductos));
            alert("Su cambalache se a guardado")
            window.location.href = "dashboard.html";
        }else{
            window.alert("Error hay espacios vacios");
        }
    }

    
    
    /*var lista = [];
    localStorage.setItem("ProductosCambalaches", JSON.stringify(lista));*/

}

//MOSTRAR LA INFORMACION DEL PRODUCTO QUE SE VA EDITAR
function editarCambalache(){
    const dbCambalache = JSON.parse(localStorage.getItem('ProductosCambalaches'));
    const idCambalache = localStorage.getItem('editarCambalache');
    let seEdita;

    dbCambalache.forEach((iterador) => {
        if (iterador.id == idCambalache){

            document.getElementById('product name').value = iterador.nombre_producto;
            document.getElementById('description').value = iterador.descripcion;
            document.getElementById('url').value = iterador.url;
            document.getElementById('busco').value = iterador.busco;
            seEdita = true;
        }
    });
    
    return seEdita;
}

//MUESTRA LOS DATOS DEL PRODUCTO A EDITAR
function editarProducto(id){
    let listaProductos = JSON.parse(localStorage.getItem('ProductosCambalaches'));

    for(p of listaProductos){
        if(p.id == id){
            document.getElementById('product name').value = p.nombre_producto;
            document.getElementById('description').value = p.descripcion;
            document.getElementById('url').value = p.url;
            document.getElementById('busco').value = p.busco;
        }
    }

}

function guardarEditarCambalache(nombre, descripcion, url, busco){
    
    let bdCambalache = JSON.parse(localStorage.getItem('ProductosCambalaches'));
    const idCambalache = localStorage.getItem('editarCambalache');

    const arregloEditado = bdCambalache.map((iterador) => {
        if (iterador.id == idCambalache){
            iterador.nombre_producto = nombre,
            iterador.url = url,
            iterador.descripcion = descripcion,
            iterador.busco = busco

        }
        return iterador;
    });

    localStorage.setItem("ProductosCambalaches", JSON.stringify(arregloEditado));
}

editarCambalache();
