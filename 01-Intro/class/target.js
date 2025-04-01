//Crear un generador de tarjetas de presentación

class Contact{
    constructor(name, job, enterprise, email, phone){
        this.name = name,
        this.job = job,
        this.enterprise = enterprise,
        this.email = email,
        this.phone = phone
    }
    
    showTarget() {
        console.log("***********************************");
        console.log(`*            Contact              *`);
        console.log("***********************************");
        console.log(`* Nombre   : ${this.name.padEnd(20)} *`);
        console.log(`* Puesto   : ${this.job.padEnd(20)} *`);
        console.log(`* Empresa  : ${this.enterprise.padEnd(20)} *`);
        console.log(`* Email    : ${this.email.padEnd(20)} *`);
        console.log(`* Teléfono : ${this.phone.padEnd(20)} *`);
        console.log("***********************************\n" );
    }
    
}

const contacts = [
    new Contact("Denisse Oliva", "Developer", "Tech Mx", "doliva@example.com", "555-741-41-12"),
    new Contact("Mark Salas", "Designer", "Olimpo Mx", "msalas@example.com", "555-741-81-88"),
    new Contact("Paulo Peréz", "Developer", "ABC Mx", "pperez@example.com", "555-897-74-47")
];


contacts.forEach(contact => contact.showTarget());



