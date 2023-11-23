// Se crea una función que permite construir nuevos objetos.
function Person(p1,p2){
    this.forename = p1
    this.surname = p2
    this.fullname = function() {
        return this.forename + " " + this.surname;
    }
}

// Se crea las instancias de la clase Person, donde se tiene persona 1 y persona 2
let personOne = new Person("Kathy", "Sagredo");
let personTwo = new Person("Sabrina", "Silva");

console.log(personOne.fullname());
console.log(personTwo.fullname());

// Otra forma de crear una clase mediante un constructor (a partir de esta función va a construir nuevos objetos). Funciona igual que la forma anterior. 
class Persona {
    constructor(name, lastName){
        this.nombre = name;
        this.apellido = lastName;
        this.saludo = function(){
            return "Hola " + this.nombre + " " + this.apellido
        };
    }
}

// Se crea las instancias para la clase Persona
// Son dos objetos con atributos nombre y apellido y metodos de saludo, que corresponden a la clase Persona.
let personaUno = new Persona("Gonzalo","Quiroz");
let personaDos = new Persona("Romina", "Fernandez")


console.log(personaUno.saludo());
console.log(personaDos.nombre + " " + personaDos.apellido);


