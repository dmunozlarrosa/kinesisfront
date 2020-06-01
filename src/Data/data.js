import { examenDinamico, examenEstatico } from './pictures'

class Pacient {
    constructor (newPacient) {
        this._id = ""; 
        for(let i=0; i<10; i++) 
            this._id = this._id.concat(Math.floor( Math.random() * 36).toString(36).toString());
        this.contact = {}; 
        this.contact.name         = newPacient.contact.name         ? newPacient.contact.name           : '-'; //requeried
        this.contact.lastname     = newPacient.contact.lastname     ? newPacient.contact.lastname       : '-'; //requeried
        this.contact.age          = newPacient.contact.age          ? newPacient.contact.age            : '-'; //requeried
        this.contact.address      = newPacient.contact.address      ? newPacient.contact.address        : '-'; 
        this.contact.phone        = newPacient.contact.phone        ? newPacient.contact.phone          : '-'; //requeried
        this.contact.email        = newPacient.contact.email        ? newPacient.contact.email          : '-'; 
        this.contact.reference    = newPacient.contact.reference    ? newPacient.contact.reference      : '-';
        this.ficha = {};
        this.ficha.examenDinamico = newPacient.ficha.examenDinamico ? newPacient.ficha.examenDinamico   : '-';
        this.ficha.examenEstatico = newPacient.ficha.examenEstatico ? newPacient.ficha.examenEstatico   : '-';
        this.sports               = newPacient.sports               ? newPacient.sports                 : '-';
        this.background           = newPacient.background           ? newPacient.background             : '-';
        this.trauma               = newPacient.trauma               ? newPacient.trauma                 : '-';
        this.surgery              = newPacient.surgery              ? newPacient.surgery                : '-';
        this.disease              = newPacient.disease              ? newPacient.disease                : '-';
        this.reason               = newPacient.reason               ? newPacient.reason                 : '-';
        this.evolution            = newPacient.evolution            ? newPacient.evolution              : '-';
        this.picture              = newPacient.picture              ? newPacient.picture                : '-';
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
                email : "Email",
                reference : "Referencia"
            },
            picture : "Foto de perfil",
            sports : "Deporte",
            background : "Antecedentes",
            trauma : "Trauma",
            surgery : "Cirugia",
            disease : "Enfermedades",
            reason : "Motivo de consulta",
            evolution : "Evolucion",
            ficha : { 
                examenDinamico : "Examen Dinamico",
                examenEstatico : "Examen Estatico",
            }
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
            email : "agus_perrea@gmail.com",
            reference : "David Muñoz"
        },
        picture : "https://react.semantic-ui.com/images/avatar/large/molly.png",
        sports : "danza intergalatica",
        background : "dolor de dedo",
        trauma : "dedingitis",
        surgery : "no presenta",
        disease : "",
        reason : "golpe con puerta de auto",
        evolution : "",
        ficha : { 
            examenDinamico : examenDinamico,
            examenEstatico : examenEstatico,
        }
    },
    {
        contact : {
            name : "David",
            lastname : "Tarambana",
            age : "31",
            address : "Nogoya 392",
            phone : "0343461289584",
            email : "tarambaneitor@gmail.com",
            reference : ""
        },     
        picture : "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
        sports : "escalada espacial",
        background : "no presenta",
        trauma : "recuperacion movilidad",
        surgery : "no presenta",
        disease : "",
        reason : "mejorar movilidad",
        evolution : "",
        ficha : { 
            examenDinamico : examenDinamico,
            examenEstatico : examenEstatico,
        }
    }
]
pacientData   = pacientData.map( x => new Pacient(x)); 
const pacientLabels = new PacientLabels();

export {pacientData, pacientLabels};