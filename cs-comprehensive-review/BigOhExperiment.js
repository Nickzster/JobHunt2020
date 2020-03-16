let input = new Array(100000);

function allocate() {
  for (let i = 0; i < input.length; i++) {
    input[i] = i;
  }
}

function addOne() {
  let sum = 1 + input[0];
}

function addAll() {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

function findPairs() {
  let currentPair = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      currentPair[0] = input[i];
      currentPair[1] = input[j];
    }
  }
  return currentPair;
}

console.log('Assigning values to the array...');
allocate();
console.log('Adding One...');
addOne();
console.log('Adding all elements...');
addAll();
console.log('Finding all pairs...');
findPairs();
console.log('Done!');
