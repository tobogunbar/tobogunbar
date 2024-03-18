# Tobogunbar

A collection of quantum-powered utility functions for Node.js.

## Installation

You can install this module via npm: `npm install tobogunbar`

## Usage
```javascript
const quantumUtils = require('quantum-utils');

// Generate a random UUID
const uuid = quantumUtils.generateUUID();
console.log(uuid);

// Fetch random trivia
quantumUtils.fetchRandomTrivia()
  .then(trivia => console.log(trivia))
  .catch(err => console.error(err));

// Shuffle an array
const array = [1, 2, 3, 4, 5];
const shuffledArray = quantumUtils.shuffleArray(array);
console.log(shuffledArray);
```

