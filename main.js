import Ruta from "./Ruta.js";
import Base from "./Base.js";

class Main {
    constructor() {
        let objRuta = {
            numero: 20,
            matricula: 'F5-124-G5',
            modelo: 'volkswagen-2000',
            chofer: 'Don Juan'
        };
        let ruta = new Ruta(objRuta);

        document.getElementById('agregarBase').addEventListener('click', () => {
            let objBase = {
                ubicacion: document.getElementById('ubicacionBase').value,
                tiempoLlegada: document.getElementById('llegadaBase').value,
                tiempoSalida: document.getElementById('salidaBase').value
            };
            let base = new Base(objBase);

            ruta.agregarBase(base);
        });

        document.getElementById('buscarBase').addEventListener('click', () => {
            ruta.buscarBase(document.getElementById('busacarPorUbicacion').value);
        });

        document.getElementById('eliminarBase').addEventListener('click', () => {
            ruta.eliminarBase(document.getElementById('eliminarPorUbicacion').value);
        });

        document.getElementById('imprimir').addEventListener('click', () => {
           ruta.imprimir(document.getElementById('informe'));
        });


    }
}

let m = new Main();