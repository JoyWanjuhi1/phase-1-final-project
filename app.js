const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
  params: {i: 'Gin'},
  headers: {
    'X-RapidAPI-Key': '14be323705msh2ddab2a29157963p139609jsn1955c10d0983',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

document.getElementById("menu").addEventListener("click", displayDate);
element.addEventListener("click", myFunction);

function myMenu() {
  alert ("Hello World!");
}
const menu= document.getElementById(' menu ');
function myMenu(){

}
  console.log('click buttion')
