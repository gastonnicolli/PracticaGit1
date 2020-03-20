const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    //Lee un archivo JSON y lo convierte en un array.
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    //Recibe un array y lo convierte a un JSON. A ese archivo JSON lo usa para sobre escribir el 
    //archivo JSON que utilizo para cargar el array
    escribirJSON: function(tareas) {
        let list = JSON.stringify(tareas,'utf-8',4);
        fs.writeFileSync(this.archivo, list);
    },

    //Recibe un objeto tarea y a travez de las funciones leerJSON y escribirJSON; carga un array
    //y al mismo lo usa para actualizar el archivo base.
    guardarTarea: function(tarea) {
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },

    //Recibe por parametro el estado a filtrar y aplicando filter(callback), filtra el array y devuelve 
    //el nuevo array.
    filtrarPorEstado: function(estado) {
        let tareas = this.leerJSON();
        let filtro = tareas.filter((tarea) => {
            return tarea.estado == estado;
        });
        return filtro;
    },

    //
    eliminarTarea: function(titBorrar){
        let tareas = this.leerJSON();
        let list=[];
        tareas.forEach(element => {
            if(element.titulo != titBorrar){
                list.push(element);
            }
        });
        this.escribirJSON(list);
    },

    actualizarTarea: function(nomViejo,nomNuevo){
        let tareas = this.leerJSON();
        let list=[];
        let estadoCons;
        tareas.forEach(element => {
            if(element.titulo != nomViejo){
                estadoCons= element.estado;
                list.push(element);
        });
        let objTarea = {
            titulo: nomNuevo,
            estado: estadoCons
        }
        list.push(objTarea);
        this.escribirJSON(list);
    },
}

module.exports = archivoTareas;