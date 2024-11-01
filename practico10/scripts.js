

let objeto_demo = {
    uno: 1,
    dos:2,
    tres:3,
}

let uno = "tres"

//  objeto_demo["dos"] 
//en la consola dara: 2

//  objeto_demo[uno]
//en la consola dara: 3
//ya que uno es una variable que almacena el strin "tres".

let capitales = {
    Argentina: "Buenos Aires",
    Uruguay: "Montevideo"
}

let lugar = "Uruguay"

// capitales["lugar"]
// en la consola da: undefined

// capitales.lugar
// en la consola da: undefined

// capitales[lugar]
// en la consola da: 'Montevideo'

// capitales["Argentina"]
// en la consola da: 'Buenos Aires'

// capitales.Argentina
// en la consola da: 'Buenos Aires'

// capitales[Argentina]
// en la consola tira un error.


//REGISTRO:

let usuario = {
Usuario: "User.Name",
Edad: "User.Age",
Direccion: "User.Adress",
FechaDeNacimiento: "User.Birth",
Contrasena: "User.Password"
}


//MI AUTO

let miAuto = { 
}

miAuto.Marca = "Subaru"

miAuto.Anio = 2024 

miAuto.Nuevo = true

let propertyKey = "Modelo"
miAuto[propertyKey] = "Impreza"

let anotherPropertyKey = "Precio"
miAuto[anotherPropertyKey] = 70000

let nextProperty = "Color"
miAuto[nextProperty] = "Azul"

for (let key in miAuto) {
    if (miAuto.hasOwnProperty(key)) {
        console.log(`${key}: ${miAuto[key]}`);
    }
}

//  ¿Qué devuelve miAuto[propertyKey]?  Impreza
//  ¿Qué devuelve miAuto[&quot;modelo&quot;]?  Impreza  
//  ¿Qué devuelve miAuto[nextProperty] ?   Azul
//  ¿Qué devuelve miAuto[&quot;color&quot;]?  Azul

// AUMENTAR LA NOTA

Evaluacion1 = [
    {Estudiante: "Juan", nota: 6},
    {Estudiante: "Mario", nota: 8},
    {Estudiante: "Julia", nota: 10},
    {Estudiante: "sofia", nota: 2}

]   

for (let i = 0; i < Evaluacion1.length; i++) {
    if (Evaluacion1[i].nota > 5 && Evaluacion1[i].nota < 10) {
        Evaluacion1[i].nota += 2;
    } else if (Evaluacion1[i].nota === 9) {
        Evaluacion1[i].nota += 1;
    }
}   

console.log(Evaluacion1);


//BASE DE DATOS PELICULAS


let peliculas = [
    { titulo: "El Rey León", rating: 4, loHasVisto: true },
    { titulo: "Titanic", rating: 5, loHasVisto: false },
    { titulo: "La Bella y la Bestia", rating: 2, loHasVisto: true },
    { titulo: "El Pianista", rating: 4, loHasVisto: false }
];

for (let i = 0; i < peliculas.length; i++) {
    let estado = peliculas[i].loHasVisto ? "Viste" : "No viste";
    console.log(`${estado} "${peliculas[i].titulo}" - ${peliculas[i].rating} estrellas`);
}

//NUMEROS DUPLICADOS

let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

for (let i = 0; i < numeros.length; i++) {
    numeros_duplicados[numeros[i]] = numeros[i] * 2;
}

console.log(numeros_duplicados);


//+27

let personas = [
    {nombre: "Ana", edad: "28"},
    {nombre: "Maria", edad: "24"},
    {nombre: "Jose", edad: "31"}
];

let personasConMasDe27 = personas.filter(persona => parseInt(persona.edad) > 27);
console.log(personasConMasDe27);


//CAMINO A OSCAR

let actoresVocales = [];
let actoresPrincipales = ["Tom Hanks", "Johnny Depp", "Elizabeth Taylor", "Morgan Freeman", "Jennifer Aniston", "Meryl Streep", "Natalie Portman", "Ashton Kutcher"];

let peliculas2 = [];
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
};

actoresPrincipales.forEach(actor => {
    if (/^[aeiou]/i.test(actor.split(" ")[0])) {
        actoresVocales.push(actor);
    }
});

for (let pelicula in actoresPrincipalesPorPelicula) {
    actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
    peliculas2.push(pelicula);
}

let peliculaPorActor = {};

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];
    if (!peliculaPorActor[actor]) {
        peliculaPorActor[actor] = [];
    }
    peliculaPorActor[actor].push(pelicula);
}



//SOFTWARE FACTORY

function calcularValorTotal(ecommerce) {
    return ecommerce.map(producto => {
        return { [producto.nombre]: producto.precio * producto.articulos };
    });
}

let ecommerce = [
    {nombre: "Samsung TV", precio: 6000, articulos: 10},
    {nombre: "DELL notebook", precio: 4000, articulos: 30},
    {nombre: "Auriculares Sony", precio: 1500, articulos: 15},
    {nombre: "Monitor Philips", precio: 12000, articulos: 50},
    {nombre: "Teclado logitech", precio: 3000, articulos: 5},
]


let resultado = calcularValorTotal(ecommerce);
console.log(resultado);