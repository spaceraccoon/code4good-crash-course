const axios = require('axios');

axios.get('http://pokeapi.co/api/v2/pokemon/1')
  .then(function(response) {
    console.log(response);
  });
//
//   console.log('hello');

// console.log(axios.get('http://pokeapi.co/api/v2/pokemon/1'));

console.log('hi');
