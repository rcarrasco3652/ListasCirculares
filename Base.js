export default class Base{
    constructor(objBase){
        this._ubicacion = objBase.ubicacion;
        this._tiempoLlegada = objBase.tiempoLlegada;
        this._tiempoSalida = objBase.tiempoSalida;
        this._siguiente = null
        
    }
    get llegada(){
        return this._tiempoLlegada;
    }
    get salida(){
        return this._tiempoSalida;
    }
    get ubicacion(){
        return this._ubicacion;
    }

    set ubicacion(newUbicacion){
        this._ubicacion = newUbicacion;
    }
    set llegada(newLlegada){
        this._tiempoLlegada = newLlegada;
    }
    set salida(newSalida){
        this._tiempoSalida = newSalida;
    }

}