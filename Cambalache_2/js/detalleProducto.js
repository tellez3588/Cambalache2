/******FUNCIONES PARA DETALLE PRODUCTO*****/

function detalleProducto(){
    let listaProductos = JSON.parse(localStorage.getItem('ProductosCambalaches'));
    let id = JSON.parse(localStorage.getItem('detalleCambalache'));

    for(p of listaProductos){
        if(p.id == id){
            let foto = `<img src="${p.url}" alt="">`

            let detalles = `<h1>${p.nombre_producto}</h1><br><br>
            <p>ofrecido por: <a href="">${p.usuario}</a></p>
            <hr/>
            <h3>DESCRIPCIÓN</h3>
            <p>${p.descripcion}</p>
            <h3>BUSCO</h3>
            <p>${p.busco}</p><br><br>
            <hr class="linea"><br>
            <button type="button" class="btn btn-secondary">AGREGAR</button>`
            document.getElementById("detalles").innerHTML = detalles; 
            document.getElementById("imagen").innerHTML = foto; 
        }
    }

}

detalleProducto();