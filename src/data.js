class Pacient {
    constructor (newPacient) {
        this._id = ""; 
        for(let i=0; i<10; i++) 
            this._id = this._id.concat(Math.floor( Math.random() * 36).toString(36).toString());
        this.contact     = {}; 
        this.contact.name     = newPacient.contact.name     ? newPacient.contact.name     : '-'; //requeried
        this.contact.lastname = newPacient.contact.lastname ? newPacient.contact.lastname : '-'; //requeried
        this.contact.age      = newPacient.contact.age      ? newPacient.contact.age      : '-'; //requeried
        this.contact.address  = newPacient.contact.address  ? newPacient.contact.address  : '-'; 
        this.contact.phone    = newPacient.contact.phone    ? newPacient.contact.phone    : '-'; //requeried
        this.contact.email    = newPacient.contact.email    ? newPacient.contact.email    : '-'; 
        this.sports           = newPacient.sports           ? newPacient.sports           : '-';
        this.background       = newPacient.background       ? newPacient.background       : '-';
        this.trauma           = newPacient.trauma           ? newPacient.trauma           : '-';
        this.surgery          = newPacient.surgery          ? newPacient.surgery          : '-';
        this.disease          = newPacient.disease          ? newPacient.disease          : '-';
        this.reference        = newPacient.reference        ? newPacient.reference        : '-';
        this.reason           = newPacient.reason           ? newPacient.reason           : '-';
        this.evolution        = newPacient.evolution        ? newPacient.evolution        : '-';
        this.picture          = newPacient.picture          ? newPacient.picture          : '-';
    }
}

class PacientLabels extends Pacient{
    constructor(){
        super({
            contact : {
                name : "Nombre",
                lastname : "Apellido",
                age : "Edad",
                address : "Direccion",
                phone : "Telefono",
                email : "Email"
            },
            picture : "Foto de perfil",
            sports : "Deporte",
            background : "Antecedentes",
            trauma : "Trauma",
            surgery : "Cirugia",
            disease : "Enfermedades",
            reference : "Referencia",
            reason : "Motivo de consulta",
            evolution : "Evolucion"
        });
    }
}

var pacientData = [
    {
        contact : {
            name : "Agustina",
            lastname : "Buñuelos",
            age : "31",
            address : "Nogoya 392",
            phone : "0343461289584",
            email : "agus_perrea@gmail.com"
        },
        picture : "https://react.semantic-ui.com/images/avatar/large/molly.png",
        sports : "danza intergalatica",
        background : "dolor de dedo",
        trauma : "dedingitis",
        surgery : "no presenta",
        disease : "",
        reference : "David Muñoz",
        reason : "golpe con puerta de auto",
        evolution : ""
    },
    {
        contact : {
            name : "David",
            lastname : "Tarambana",
            age : "31",
            address : "Nogoya 392",
            phone : "0343461289584",
            email : "tarambaneitor@gmail.com"
        },     
        picture : "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
        sports : "escalada espacial",
        background : "no presenta",
        trauma : "recuperacion movilidad",
        surgery : "no presenta",
        disease : "",
        reference : "",
        reason : "mejorar movilidad",
        evolution : ""
    }
]
const pacientData   = pacientData.map( x => new Pacient(x)); 
const pacientLabels = new PacientLabels();

export {pacientData, pacientLabels};