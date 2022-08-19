let peliculas = [
    {nombre:"Harry Potter",genero:"ciencia ficcion",costo:3000},
    {nombre:"Dragon Ball Super",genero:"anime",costo:3000},
    {nombre:"Wakanda Forever",genero:"ciencia ficcion",costo:5000},
    {nombre:"Django sin cadenas",genero:"ciencia ficcion",costo:1500},
    {nombre:"El viaje del chigui",genero:"anime",costo:60}
]


let filtro = peliculas.filter( pelicula => pelicula.genero=="ciencia ficcion")
console.log(filtro)

let filtro1 = peliculas.filter( pelicula => pelicula.costo>=2000)
console.log(filtro1)

let filtro2 = peliculas.filter( pelicula => pelicula.genero=="anime")
console.log(filtro2)

let buscado = filtro2.find(busco=>busco.costo==3000
    
)
console.log(buscado)


let mapa = peliculas.map(function (pelicula) {
    return(pelicula.costo=pelicula.costo/1000)
})
console.log(peliculas)

let mapa1 = peliculas.map(function (pelicula) {
    return(pelicula.nombre="Deiby")
})
console.log(peliculas)