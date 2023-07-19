const axios = require("axios");
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  userId: 1,
  id: 1,
  title: 'New Title',
  body: 'New Body Text',
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });