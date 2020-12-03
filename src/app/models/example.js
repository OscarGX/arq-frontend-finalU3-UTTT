class Subject {

    //Cada instancia de la clase Subject comienza con un arreglo vacío de
    //Observadores, los cuales reaccionan a un cambio de estado
    constructor() {
        this.observadores = [];
    }

    //Agrega la habilidad de suscribir a un nuevo objeto, es decir, agrega un elemento
    //al arreglo de Observadores
    suscripcion(elemento) {
        this.observadores.push(elemento);
    }

    //Permite eliminar un elemento del arreglo de Observadores
    remover_suscripcion(elemento) {
        this.observadores.filter(suscriptor => suscriptor !== elemento);
    }

    //Actualiza todos los objetos suscritos, pasándole información a cada uno de ellos
    notificacion(data) {
        this.observadores.forEach(observador => observador(data));
    }
}