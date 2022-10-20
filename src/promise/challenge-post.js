import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response; 
}


const data = {
    "title": "New Product Course 2",
    "price": 8888,
    "description": "new description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }


  postData(`${API}/products`, data) //este data es el valor del objeto declarado arriba
    .then(data => console.log(data)); //este data es del then de la promesa para ser usado en este caso    .then(response => response.json())
