const axios = require("axios");
axios.patch('https://jsonplaceholder.typicode.com/users/1', {
  name: 'Devansh',
  username: 'devansh',
  email: 'devansh@example.com'
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));            