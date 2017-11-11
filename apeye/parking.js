let axios = require('axios');
require('dotenv').config()

axios.get(
  process.env.API_URL,
  {
    headers: {
      "Authorization" : `Bearer ${process.env.TOKEN}`
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.response);
  });
