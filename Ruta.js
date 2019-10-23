export default class Ruta{
    constructor(objRuta){
        this._numero = objRuta.numero;
        this._matricula = objRuta.matricula;
        this._modelo = objRuta.modelo;
        this._chofer = objRuta.chofer;
        this._baseIncio = null;
        this._baseFinal = null;
        
    }

    get numero(){
        return this._numero;
    }
    get matricula(){
        return this._matricula;
    }
    get modelo(){
        return this._modelo;
    }
    get chofer(){
        return this._chofer;
    }

    set numero(newNumero){
        this._numero = newNumero;
    }
    set chofer(newChofer){
        this._chofer = newChofer;
    }



    agregarBase(base){
        if(this._baseIncio == null){
            this._baseIncio = base;
            this._baseFinal = base;
            this._baseIncio.siguiente = this._baseFinal;
            this._baseFinal.siguiente = this._baseIncio;
            console.log(this._baseIncio);
        }else{
            this._baseFinal.siguiente = base;
            this._baseFinal = base;
            this._baseFinal.siguiente = this._baseIncio;
            console.log(this._baseIncio);
        }
    }
    buscarBase(ubicacion){
        let actual = this._baseIncio;
        let termina = this._baseFinal

        while(actual.ubicacion != ubicacion && termina.codigo != ubicacion){
            actual = actual.siguiente;
        }

        return actual;
    }
    _buscarBaseAnterior(ubicacion){
        let actual = this._baseIncio;
        let termina = this._baseFinal

        if(actual.ubicacion == ubicacion){
            return termina
        }else{
            while(actual.siguiente.ubicacion != ubicacion && termina.codigo != ubicacion){
                actual = actual.siguiente;
            }
        }

        return actual;
    }
    eliminarBase(ubicacion){
        let base = this._buscarBaseAnterior(ubicacion);
        if(base == this._baseIncio && base == this._baseFinal){
            this._baseIncio = this._baseFinal = null;

        }else if(base.siguiente == this._baseIncio){
            base.siguiente = base.siguiente.siguiente;
            this._baseIncio = base.siguiente;

        }else if(base.siguiente == this._baseFinal){
            base.siguiente = base.siguiente.siguiente;
            this._baseFinal = base;

        }else{
            base.siguiente = base.siguiente.siguiente;
        }
    }

    imprimir(lienzo){
        lienzo.innerHTML == "";
        let actual = this._baseIncio;
        let final = this._baseIncio;
        let contador = 1
        if(actual != null){
            do{
                lienzo.innerHTML += `Base${contador}: ${actual.ubicacion}   Llegada: ${actual.llegada}minutos   Salida: ${actual.salida}minutos <br>`
                contador++
                actual = actual.siguiente
            }while(actual != final);    
        }
        
    }

}