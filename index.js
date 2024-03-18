const axios = require('axios');

// Function to generate a random UUID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Function to fetch random trivia
async function fetchRandomTrivia() {
  try {
    const response = await axios.get('http://numbersapi.com/random/trivia');
    return response.data;
  } catch (error) {
    console.error('Error fetching trivia:', error.message);
    return null;
  }
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

module.exports = {
  generateUUID,
  fetchRandomTrivia,
  shuffleArray
};
