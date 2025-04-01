# Regisro Viajes
Sistema modular de reservas de viajes implementado con:
- **Clases ES6** para modelado de datos
- **Módulos JS** para estructura del proyecto
- **Validaciones** de disponibilidad

## Instalación y Ejecución
Sigue estos pasos para instalar y ejectuar el proyecto en tu entorno local.

**Requisitos:**
  - Node.js v16 o superior.
  - Dependencias instaladas usando `npm install`.

### 1. Clonar el respositorio
```bash
git clone https://github.com/yuleiditho/JS-Logic-Algorithms.git
```
### 2. Ruta 
```bash
cd 01-Intro/registroViajes/
```
### 3. Ejecutar aplicación
```bash
node app.js
```

## Estructura 
- app.js - Inicializar aplicación
- viajes.js - Lógica de reservas y validaciones
- destinos.js - Modelado y datos de destinos
- transportes.js - Modelado y datos de transportes

## Ejemplo de Salida

```bash
-----------Itinerario de Viajes--------------
* Destino: París
* Fecha: 2024-06-15
* Transporte: Avión
* Boletos: 5
* Costo Total: $2975
--------------------------------------
* Destino: Alemania
* Fecha: 2025-03-23
* Transporte: Crucero
* Boletos: 0
*** Error - Registro Inválido: ***
Error: La cantidad de boletos debe ser mayor a 0
--------------------------------------
```

```bash
---------Lista de Destinos Disponibles---------
Destino: París 	 Costo: 500
Transporte: Avión 	 Costo Extra: 200
Asientos Disponibles: 145 	 Asientos Ocupados: 5
----------------------------------------------------
Destino: Londres 	 Costo: 400
Transporte: Tren 	 Costo Extra: 100
Asientos Disponibles: 148 	 Asientos Ocupados: 2
----------------------------------------------------
```

```bash
---------Lista de Transportes Disponibles---------
Tipo: Avión - Costo Extra: 200
Tipo: Tren - Costo Extra: 100
Tipo: Bus - Costo Extra: 80
Tipo: Crucero - Costo Extra: 300
Tipo: Limo - Costo Extra: 500
```