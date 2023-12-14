const request = require('request');

const args = process.argv;
const params = args.slice(2);

const breed = params[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
    if (error) {
      console.error(`Error loading the URL ${url}: ${error.message}`);
      process.exit(1);
    }
  
    const data = JSON.parse(body);

    if (data.length === 0) {
        console.log('Breed not found.');
        process.exit(1);
    }

    console.log(data[0].description);
  });