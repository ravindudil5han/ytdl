const ytd = require('./main');
const runPythonScript = require('./non-main');


const url = 'https://youtu.be/AWItYh5hqqo?si=vS7AoYBJyoBn6vre';

ytd( url)
  .then((result) => {
    // Handle the result
    console.log('Script executed successfully:', result);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error running Python script:', error);
  });
