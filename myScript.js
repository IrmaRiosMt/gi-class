/*Para la tabla clientes: funciones get(leerClientes), post(guardarCliente),
 put(editarCliente) y delete(borrarCliente).*/

function leerClientes(){
    //funcion GET
    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        //dataType: 'json',
        
        success : function(clientes){
           let mostrar=clientes.items;
           $("#listaClientes").empty();

           for(i=0; i<mostrar.length; i++) {
                $("#listaClientes").append(+mostrar[i].id+"<b>"+"  "+mostrar[i].name+"<b> "+"   "+mostrar[i].email);
                $("#listaClientes").append("      "+"<button onclick='borrarCliente("+mostrar[i].id+")'>Borrar</button><br>");
            };
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        }

    });

}

function guardarCliente(){
    //función POST
    let idCliente=$("#idCliente").val();
    let nombreCliente=$("#nombreCliente").val();
    let correoCliente=$("#correoCliente").val();
    let edadCliente=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombreCliente,
        email:correoCliente,
        age:edadCliente
    };

    let alistarData=JSON.stringify(data);
    console.log(alistarData);

    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        //dataType: 'json',
        data:alistarData,
        contentType:'application/json',
        
        success : function(json){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#correoCliente").val("");
            $("#edadCliente").val("");
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }

    });
  
}


function editarCliente(){
     //función PUT
     let idCliente=$("#idCliente").val();
     let nombreCliente=$("#nombreCliente").val();
     let correoCliente=$("#correoCliente").val();
     let edadCliente=$("#edadCliente").val();
 
     let data={
         id:idCliente,
         name:nombreCliente,
         email:correoCliente,
         age:edadCliente
     };
 
     let alistarData=JSON.stringify(data);
     console.log(alistarData);
 
     $.ajax({
         url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
         type: 'PUT',
         //dataType: 'json',
         data:alistarData,
         contentType:'application/json',
         
         success : function(json){
             $("#idCliente").val("");
             $("#nombreCliente").val("");
             $("#correoCliente").val("");
             $("#edadCliente").val("");
         },
         error: function(xhr, status){
             alert('ha sucedido un problema');
         },
         complete: function(){
             leerClientes();
         }
 
     });
   
}

function borrarCliente(idCliente){
    //función DELETE
    
    let data={
        id:idCliente
    };

    let alistarData=JSON.stringify(data);
    console.log(alistarData);

    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        //dataType: 'json',
        data:alistarData,
        contentType:'application/json',
        
        success : function(json){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#correoCliente").val("");
            $("#edadCliente").val("");
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }

    });
  
}


/*Para la tabla Cuatrimotos: funciones get(leerCuatrimoto), post(guardarMoto),
 put(editarMoto) y delete(borrarMoto).*/

function leerCuatrimoto(){
    //funcion GET
    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type: 'GET',
        //dataType: 'json',
        
        success : function(cuatrimoto){
           let ver = cuatrimoto.items;
           $("#listaMotos").empty();

           for(i=0; i < ver.length; i++) {
                $("#listaMotos").append(+ver[i].id+"   "+"<b>"+ver[i].brand+"<b>"+"   "+ver[i].model+"   "+ver[i].category_id+"   ");
                $("#listaMotos").append("<button onclick='borrarMoto("+ver[i].id+")'>Borrar</button><br>");
            };
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        }

    });

}

function guardarMoto(){
    //función POST
    let idMoto=$("#idMoto").val();
    let marcaMoto=$("#marcaMoto").val();
    let modeloMoto=$("#modeloMoto").val();
    let categoriaMoto=$("#categoriaMoto").val();
    let nombreMoto=$("#nombreMoto").val();

    let data={
        id:idMoto,
        brand:marcaMoto,
        model:modeloMoto,
        category_id:categoriaMoto,
        name:nombreMoto
    };

    let alistarData=JSON.stringify(data);
    console.log(alistarData);

    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type: 'POST',
        //dataType: 'json',
        data:alistarData,
        contentType:'application/json',
        
        success : function(json){
            $("#idMoto").val("");
            $("#marcaMoto").val("");
            $("#modeloMoto").val("");
            $("#categoriaMoto").val("");
            $("#nombreMoto").val("");
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        },
        complete: function(){
            leerCuatrimoto();
        }

    });
  
}


function editarMoto(){
     //función PUT
    let idMoto=$("#idMoto").val();
    let marcaMoto=$("#marcaMoto").val();
    let modeloMoto=$("#modeloMoto").val();
    let categoriaMoto=$("#categoriaMoto").val();
    let nombreMoto=$("#nombreMoto").val();
 
     let data={
        id:idMoto,
        brand:marcaMoto,
        model:modeloMoto,
        category_id:categoriaMoto,
        name:nombreMoto
     };
 
     let alistarData=JSON.stringify(data);
     console.log(alistarData);
 
     $.ajax({
         url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
         type: 'PUT',
         //dataType: 'json',
         data:alistarData,
         contentType:'application/json',
         
         success : function(json){
            $("#idMoto").val("");
            $("#marcaMoto").val("");
            $("#modeloMoto").val("");
            $("#categoriaMoto").val("");
            $("#nombreMoto").val("");
         },
         error: function(xhr, status){
             alert('ha sucedido un problema');
         },
         complete: function(){
            leerCuatrimoto();
         }
 
     });
   
}

function borrarMoto(idMoto){
    //función DELETE
    
    let data={
        id:idMoto
    };

    let alistarData=JSON.stringify(data);
    console.log(alistarData);

    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type: 'DELETE',
        //dataType: 'json',
        data:alistarData,
        contentType:'application/json',
        
        success : function(json){
            $("#idMoto").val("");
            $("#marcaMoto").val("");
            $("#modeloMoto").val("");
            $("#categoriaMoto").val("");
            $("#nombreMoto").val("");
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        },
        complete: function(){
            leerCuatrimoto();
        }

    });
  
}


/*Para la tabla Message: funciones get(leerCuatrimoto), post(guardarMoto),
 y delete(borrarMoto).*/

 function leerMensaje(){
    //funcion GET
    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        //dataType: 'json',
        
        success : function(mensajes){
           let ver=mensajes.items;
           $("#listaMensajes").empty();

           for(i=0; i<ver.length; i++) {
                $("#listaMensajes").append(+ver[i].id+"   "+ver[i].messagetext+"   ");
                $("#listaMensajes").append("<button onclick='borrarMensaje("+ver[i].id+")'>Borrar</button><br>");
            };
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        }

    });

}

function guardarMensaje(){
    //función POST
    let idMensaje=$("#idMensaje").val();
    let mensajeTexto=$("#mensajeTexto").val();
    
    let data={
        id:idMensaje,
        messagetext:mensajeTexto
    };

    let alistarData=JSON.stringify(data);
    console.log(alistarData);

    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        //dataType: 'json',
        data:alistarData,
        contentType:'application/json',
        
        success : function(json){
            $("#idMensaje").val("");
            $("#mensajeTexto").val("");
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        },
        complete: function(){
            leerMensaje();
        }

    });
  
}


function borrarMensaje(idMensaje){
    //función DELETE
    
    let data={
        id:idMensaje
    };

    let alistarData=JSON.stringify(data);
    console.log(alistarData);

    $.ajax({
        url: 'https://ge60600a3042155-tsipsddbp9b9tog9.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'DELETE',
        //dataType: 'json',
        data:alistarData,
        contentType:'application/json',
        
        success : function(json){
            $("#idMensaje").val("");
            $("#mensajeTexto").val("");
        },
        error: function(xhr, status){
            alert('ha sucedido un problema');
        },
        complete: function(){
            leerMensaje();
        }

    });
  
}

