export class Departamento{
    constructor(){
        this.listaDepartamentos = ["Lácteos", "Carnes", "Frutas y Verduras",
                                   "Panadería", "Electrodomésticos", "Jueguetes",
                                   "Mascotas", "Cuidado Personal", "Congelados",
                                   "Abarrotes", "Hogar"].sort();
    }

    departamentoValido(seccion){
        return this.listaDepartamentos.includes(seccion);
    }

    mostrarDepartamentos(){
        console.log("Departamentos disponibles:");
        this.listaDepartamentos.forEach(departamento => {
            console.log(`- ${departamento}`);
        });
    }
}