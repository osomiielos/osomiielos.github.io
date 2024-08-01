//Llama a la información ingresada en un archivo de JSON
function funCargarDatos() {
    let peticion = new XMLHttpRequest();
    //Interfaz que permite realizar peticiones HTTP a servidores web

    //OPEN --> función que solicita a un archivo JSON para obtener los datos
    peticion.open("GET", "./js/datos.json");
    //peticion.open("GET", "./js/datos.json");

    //onload --> la función para cuando los datos sean recibidos
    peticion.onload = function () {
        if (peticion.status == 200) {
            let datos = JSON.parse(peticion.response);

            //Muestra los datos en el DIV
            document.getElementById("contenido").innerHTML = "Nombre: " + datos.nombre
                + " " + "<br>Apellido: " + datos.apellido
                + " " + "<br>Edad: " + datos.edad
                + " " + "<br>Telefono:" + datos.telefono
                + " " + "<br>Dirección:" + datos.direccion;

            //Muestra los datos en el formulario
            document.getElementById("formNombre").value = datos.nombre + " " + datos.apellido;
            document.getElementById("formEdad").value = datos.edad;
            document.getElementById("formTelefono").value = datos.telefono;
            document.getElementById("formDireccion").value = datos.direccion;
        }
    }//fin onload

    //send usa los datos cuando hayan sido recibidos
    peticion.send();
}