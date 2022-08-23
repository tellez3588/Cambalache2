
/*******FUNCIONES PARA EL DASHBOARD*******/

function NuevoProducto(){
    window.location.href = "crear_editar_producto.html";
}


// MUESTRA EL NOMBRE DEL USUARIO
 function nombreUsuario(){
    let jsonIngresos = JSON.parse(localStorage.getItem('IngresoCambalaches'));

    let nombre = "";

    for (x of jsonIngresos){
        nombre = x.nombre;
    }

    let nombreUsuario = document.getElementById("nombreUsuario");

    nombreUsuario.innerText = nombre;

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

function cargarSusCambalaches(){

    let productos = JSON.parse(localStorage.getItem('ProductosCambalaches'));
    let usuariosProductos = [];
    let correo = correoUsuario();
    let contador = 0;

    for(p of productos){
        if(p.correo == correo){
            usuariosProductos.push(p);
        }
    }

    if(usuariosProductos.length <=3){
        let camba = `<img class = "img" src="${usuariosProductos[0].url}" alt="">`
        let camba1 = `<a href="javascript:verDetalles(${usuariosProductos[0].id})">${usuariosProductos[0].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[0].id});">Editar</button>
                    <button type="button" class=" btn btn-danger" onclick = "eliminarProducto(${usuariosProductos[0].id});">Eliminar</button>`
        document.getElementById("p1").innerHTML = camba;  
        document.getElementById("t1").innerHTML = camba1;

        let camba2 = `<img class = "img" src="${usuariosProductos[1].url}" alt="">`
        let camba3 = `<a href="javascript:verDetalles(${usuariosProductos[1].id})">${usuariosProductos[1].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[1].id});">Editar</button>
                    <button type="button" class=" btn btn-danger" onclick = "eliminarProducto(${usuariosProductos[1].id});">Eliminar</button>`
        document.getElementById("p2").innerHTML = camba2;  
        document.getElementById("t2").innerHTML = camba3;

        let camba4 = `<img class = "img" src="${usuariosProductos[2].url}" alt="">`
        let camba5 = `<a href="javascript:verDetalles(${usuariosProductos[2].id})">${usuariosProductos[2].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[2].id});">Editar</button>
                    <button type="button" class=" btn btn-danger" onclick = "eliminarProducto(${usuariosProductos[2].id});">Eliminar</button>`
        document.getElementById("p3").innerHTML = camba4;  
        document.getElementById("t3").innerHTML = camba5;

    }else if(usuariosProductos.length <=6){
        let camba = `<img class = "img" src="${usuariosProductos[0].url}" alt="">`
        let camba1 = `<a href="javascript:verDetalles(${usuariosProductos[0].id})">${usuariosProductos[0].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[0].id});">Editar</button>
                    <button type="button" class=" btn btn-danger">Eliminar</button>`
        document.getElementById("p1").innerHTML = camba;  
        document.getElementById("t1").innerHTML = camba1;

        let camba2 = `<img class = "img" src="${usuariosProductos[1].url}" alt="">`
        let camba3 = `<a href="javascript:verDetalles(${usuariosProductos[1].id})">${usuariosProductos[1].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[1].id});">Editar</button>
                    <button type="button" class=" btn btn-danger">Eliminar</button>`
        document.getElementById("p2").innerHTML = camba2;  
        document.getElementById("t2").innerHTML = camba3;

        let camba4 = `<img class = "img" src="${usuariosProductos[2].url}" alt="">`
        let camba5 = `<a href="javascript:verDetalles(${usuariosProductos[2].id})">${usuariosProductos[2].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[2].id});">Editar</button>
                    <button type="button" class=" btn btn-danger">Eliminar</button>`
        document.getElementById("p3").innerHTML = camba4;  
        document.getElementById("t3").innerHTML = camba5;

        let camba6 = `<img class = "img" src="${usuariosProductos[3].url}" alt="">`
        let camba7 = `<a href="javascript:verDetalles(${usuariosProductos[3].id})">${usuariosProductos[3].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[3].id});">Editar</button>
                    <button type="button" class=" btn btn-danger">Eliminar</button>`
        document.getElementById("p4").innerHTML = camba6;  
        document.getElementById("t4").innerHTML = camba7;

        let camba8 = `<img class = "img" src="${usuariosProductos[4].url}" alt="">`
        let camba9 = `<a href="javascript:verDetalles(${usuariosProductos[4].id})">${usuariosProductos[4].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[4].id});">Editar</button>
                    <button type="button" class=" btn btn-danger">Eliminar</button>`
        document.getElementById("p5").innerHTML = camba8;  
        document.getElementById("t5").innerHTML = camba9;

        let camba10 = `<img class = "img" src="${usuariosProductos[5].url}" alt="">`
        let camba11 = `<a href="javascript:verDetalles(${usuariosProductos[5].id})">${usuariosProductos[5].nombre_producto}</a>
                    <button type="button" class="btn btn-success" onclick = "editar(${usuariosProductos[5].id});">Editar</button>
                    <button type="button" class=" btn btn-danger">Eliminar</button>`
        document.getElementById("p6").innerHTML = camba10;  
        document.getElementById("t6").innerHTML = camba11;

    }
             
}

//ELIMINAR PRODUCTOS
function eliminarProducto(id){
    let productos = JSON.parse(localStorage.getItem('ProductosCambalaches'));

    let guardarCambalaches = [];

    for(p of productos){
        if(p.id != id){
            guardarCambalaches.push(p);
        }
    }

    localStorage.setItem('ProductosCambalaches', JSON.stringify(guardarCambalaches));
    cargarSusCambalaches();

}

function editar(id){
    localStorage.setItem('editarCambalache', id);
    window.location.href = "crear_editar_producto.html";
}

function verDetalles(id){
    localStorage.setItem('detalleCambalache', id);
    window.location.href = "detalleProducto.html";
}


nombreUsuario();
cargarSusCambalaches();