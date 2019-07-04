const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, reponse, body) => {
  console.log('error:', error); // Print the error if one occurred
  fs.writeFile(args[1], body, error); {
    let fileSize = fs.statSync(args[1]).size;
    console.log(fileSize);
    // Print the HTML for the Google homepage.
    console.log(`Downloaded and save ${args[0]}`);
  }
});
