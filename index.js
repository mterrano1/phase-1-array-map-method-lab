const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
/*
const titleCased = (tutorials) => {
  return tutorials.map(function(line){
    let wordsArrays = line.split(" ")
    let cappedWordsArray = wordsArrays.map(function(words){
      return (words.charAt(0).toUpperCase() + words.slice(1));
    }).join(" ");
    return cappedWordsArray;
})
}
*/
/*
function titleCased(tutorials) {
  return tutorials.split(" ").map(function(word){
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(" ");
}

const titleCase = tutorials.map(titleCased);
*/
function titleCased(input){
  return tutorials.map(function(line){
      let wordsArrays = line.split(" ");
      let cappedWordsArray = wordsArrays.map(function(words){
        return (words.charAt(0).toUpperCase() + words.slice(1));
     }).join(" ");
     return cappedWordsArray;
  })
}

/*
const titleCased = (input) => {
  return tutorials.map( line => {
    const tokens = line.split(' ');
    const capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
    const response = capitalizedTokens.join(' ');
    return response;
  });
}
*/