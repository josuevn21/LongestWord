const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const sentence = document.querySelector('#sentence').value;
  const longestWord = findLongestWord(sentence);

  result.textContent = longestWord;
});

function findLongestWord(sen) {
  // Remove all punctuation and split sentence into an array of words
  const words = sen.replace(/[^\w\s]|_/g, '').split(' ');

  // Sort words by length
  words.sort((a, b) => b.length - a.length);

  // Return the longest word
  return words[0];
}
  //Show the output:
  document.write(output)