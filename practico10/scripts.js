

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
