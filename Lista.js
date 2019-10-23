export default class Lista{
    constructor(){
        this._primeraRuta == null;
        this._ultimaRuta == null;
    }
    get primeraRuta(){
        return this._primeraRuta;
    }
    get ultimaRuta(){
        return this._ultimaRuta;
    }

    set primeraRuta(newRuta){
        this._primeraRuta = newRuta;
    }
    set ultimaRuta(newRuta){
        this._ultimaRuta = newRuta;
    }

    agregarRuta(newRuta){
        if(this._primeraRuta == null){
            this._primeraRuta = newRuta;
            this._primeraRuta.siguienteRuta = this._ultimaRuta
            this._ultimaRuta = newRuta
        }
    }
}