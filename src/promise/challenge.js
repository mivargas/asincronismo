import fetch from "node-fetch"; // agregar en el package.json "type": "module" para que se reconozca como modulo.

const API = 'https://api.escuelajs.co/api/v1';

function fetchDAta(urlApi){
    return fetch(urlApi);
}

/* fetchDAta(`${API}/products`) //no hay necesidar de de delcarar la estructura de promesa "new Promise()" porque fetch() ya es una promesa por defecto.
    .then(response => response.json())
    .then(producs => {
        console.log(producs)
    })
    .then(() => {
        console.log('hola')
    })
    .catch(error => console.log(error)); */


fetchDAta(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchDAta(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchDAta(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));
    