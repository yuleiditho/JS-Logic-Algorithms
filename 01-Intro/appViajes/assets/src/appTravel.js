import { Viajes } from './viajes.js';
import { destinos } from "./destinos.js";
import { transportes } from "./transportes.js";

let viajesRegistrados = [];

const cargarSelects = () => {
    const destinoSelect = document.getElementById('destino');
    const transporteSelect = document.getElementById('transporte');

    
    destinoSelect.innerHTML = '<option value="">Selecciona un destino</option>';
    transporteSelect.innerHTML = '<option value="">Transporte Disponible</option>';

    destinos.forEach(destino => {
        const option = document.createElement('option');
        option.value = destino.destino;
        option.textContent = `${destino.destino} ($${destino.costo})`;
        option.dataset.transporte = destino.transporte;
        destinoSelect.appendChild(option);
    });

    transportes.forEach(transporte => {
        const option = document.createElement('option');
        option.value = transporte.tipo;
        option.textContent = `${transporte.tipo} ($${transporte.costoExtra} extra)`;
        transporteSelect.appendChild(option);
    });

    destinoSelect.addEventListener('change', function() {
        const transporteAsociado = this.options[this.selectedIndex].dataset.transporte;
        const transporteSelect = document.getElementById('transporte');
        
        if (transporteAsociado) {
            for (let i = 0; i < transporteSelect.options.length; i++) {
                const option = transporteSelect.options[i];
                option.hidden = option.value !== transporteAsociado && option.value !== "";
            }
            
            transporteSelect.value = transporteAsociado;
            transporteSelect.style.backgroundColor = '#cac3f3';
            transporteSelect.title = 'Transporte asignado automáticamente según el destino';
        } else {
            for (let i = 0; i < transporteSelect.options.length; i++) {
                transporteSelect.options[i].hidden = false;
            }
            transporteSelect.style.backgroundColor = '';
            transporteSelect.title = '';
        }
    });
}

const mostrarViajes = () => {
    const listaViajes = document.getElementById('lista-viajes');
    listaViajes.innerHTML = '<h2> Historial Registros </h2>';
    
    if (viajesRegistrados.length === 0) {
        listaViajes.innerHTML += '<p> No hay viajes registrados aún. </p>';
        return;
    }
    
    const ul = document.createElement('ul');
    
    viajesRegistrados.slice().reverse().forEach(viaje => {
        const li = document.createElement('li');
        const validacion = viaje.validarViaje();
        
        if (typeof validacion === 'string') {
            li.innerHTML = `
                <strong>Destino:</strong> ${viaje.destino} <br>
                <strong>Transporte:</strong> ${viaje.transporte} <br>
                <strong>Fecha:</strong> ${viaje.fecha} <br>
                <strong>Boletos:<strong>${viaje.boletos}<br>
                <span class="error">${validacion}</span>
            `;
            li.className = 'viaje-invalido';
        } else {
            li.innerHTML = `
                <strong>Destino:</strong> ${viaje.destino} <br>
                <strong>Transporte:</strong> ${viaje.transporte} <br>
                <strong>Fecha:</strong> ${viaje.fecha} <br>
                <strong>Boletos:<strong>${viaje.boletos}<br>
                Costo total: $${viaje.costo}
            `;
            li.className = 'viaje-valido';
        }
        
        ul.appendChild(li);
    });
    
    listaViajes.appendChild(ul);
}

const mostrarDestinos = () => {
    const listaDestinos = document.getElementById('lista-destinos');
    listaDestinos.innerHTML = '<h2> Destinos Disponibles </h2>';

    if (destinos.length === 0) {
        listaDestinos.innerHTML = '<p>No hay destinos disponibles en este momento.</p>';
        return;
    }

    destinos.forEach(destino => {
        const transporte = transportes.find(t => t.tipo === destino.transporte);
        const card = document.createElement('div');
        card.className = 'destino-card';
        
        card.innerHTML = `
            <div class="destino-info">
                <h3>${destino.destino}</h3>
                <p><strong>Costo base:</strong> $${destino.costo}</p>
                <p><strong>Transporte:</strong> ${destino.transporte}</p>
                <p><strong>Costo extra transporte:</strong> $${transporte ? transporte.costoExtra : 'N/A'}</p>
                <p><strong>Asientos disponibles:</strong> ${destino.asientosDisponibles}</p>
                <p><strong>Asientos ocupados:</strong> ${destino.asientosOcupados}</p>
                <p><strong>Costo total estimado:</strong> $${destino.costo + (transporte ? transporte.costoExtra : 0)}</p>
            </div>
        `;
        
        listaDestinos.appendChild(card);
    });
}


const initializeTabs = () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const mensaje = document.getElementById('mensaje');

    const activateTab = (targetId) => {

        mensaje.textContent = '';
        mensaje.className = 'mensaje';

        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        const activeTab = document.querySelector(`[data-target="${targetId}"]`);
        const activeContent = document.getElementById(targetId);
        
        if(activeTab && activeContent) {
            activeTab.classList.add('active');
            activeContent.classList.add('active');
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.dataset.target;
            activateTab(targetId);
        });
    });

    
    const defaultTab = document.querySelector('.tab.active') || tabs[0];
    activateTab(defaultTab?.dataset.target);
};

document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    cargarSelects();

    viajesRegistrados = [
        new Viajes("París", "2024-06-15", "Avión", 5000),
        new Viajes("Londres", "2024-07-04", "Tren", 2),
        new Viajes("New York", "2025-03-23", "Metro", 3),
        new Viajes("Canadá", "2025-03-23", "Crucero", 5),
        new Viajes("Alemania", "2025-03-23", "Crucero", 0)
    ];
    mostrarViajes();
    mostrarDestinos();
    
    document.getElementById('registroViajes').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const destino = this.elements['destino'].value;
        const fecha = this.elements['date'].value;
        const transporte = this.elements['transporte'].value;
        const boletos = parseInt(this.elements['cantidad'].value);
        
        const nuevoViaje = new Viajes(destino, fecha, transporte, boletos);
        const validacion = nuevoViaje.validarViaje();
        const mensaje = document.getElementById('mensaje');
        
        if (typeof validacion === 'string') {
            mensaje.textContent = ` ${validacion}`;
            mensaje.className = 'mensaje error';
        } else {
            viajesRegistrados.push(nuevoViaje);
            mensaje.textContent = `¡Registro válido! Costo total: $${nuevoViaje.costo}`;
            mensaje.className = 'mensaje exito';
            mostrarViajes();
            mostrarDestinos();
        }

        setTimeout(() => {
            this.reset(); 
            mensaje.textContent = '';
            mensaje.className = 'mensaje';
        }, 2000); 
    });
});