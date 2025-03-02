document.addEventListener('DOMContentLoaded', function () {
    const frutasAcidas = ["Kiwi", "Limon", "Pomelo", "Naranja", "Manzana", "Uva", "Arandano", "Piña"];
    const frutasSemiacidas = ["Fresa", "Membrillo", "Nispero", "Ciruela", "Melocoton", "Mango", "Mandarina", "Frambuesa"];
    const frutasNeutras = ["Coco", "Aguacate", "Aceituna", "Almendra", "Avellana", "Cacahuete", "Nuez"];
    const frutasDulces = ["Platano", "Cereza", "Higo", "Melon", "Sandia", "Pera", "Granada", "Chirimoya"];

    // Objeto para almacenar la cantidad de frutas de cada tipo
    const cantidadFrutas = {
        acidas: frutasAcidas.length,
        semiacidas: frutasSemiacidas.length,
        neutras: frutasNeutras.length,
        dulces: frutasDulces.length
    };

    // Imprimir la cantidad de frutas en la consola
    console.log('Cantidad de frutas por tipo:');
    console.log(`Ácidas: ${cantidadFrutas.acidas}`);
    console.log(`Semiácidas: ${cantidadFrutas.semiacidas}`);
    console.log(`Neutras: ${cantidadFrutas.neutras}`);
    console.log(`Dulces: ${cantidadFrutas.dulces}`);

    // Función para agregar frutas a una lista en el HTML usando while
    function addToList(id, frutas) {
        const list = document.getElementById(id);
        let i = 0;
        while (i < frutas.length) {
            const li = document.createElement('li');
            li.textContent = frutas[i];
            list.appendChild(li);
            i++;
        }
    }

    // Agregar frutas a las listas correspondientes
    addToList('acidas-list', frutasAcidas);
    addToList('semiacidas-list', frutasSemiacidas);
    addToList('neutras-list', frutasNeutras);
    addToList('dulces-list', frutasDulces);
});
