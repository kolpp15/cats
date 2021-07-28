// const fs = require('fs');

// const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => { // this is asynch
//     console.log("In readFile's Callback: it has the data.");
//     if (!error) return data;
//   });
// };

// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); 

const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

// not yet done... need to define the if undefined

module.exports = breedDetailsFromFile;

