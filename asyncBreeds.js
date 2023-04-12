const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {

  if (!breed || !callback) return;

  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("In readFile's Callback: it has the data.");
    if (error) callback();
    if (!error) callback(data);
  });
};

const printCatBreed = breedData => {
  console.log('Return Value: ', breedData);
}

module.exports = breedDetailsFromFile;

// breedDetailsFromFile('Bombay', printCatBreed);
