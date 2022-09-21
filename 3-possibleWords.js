/*
function possibleWords(words, pattern)

Given a list of possible words and a pattern string that contains only lowercase English letters a to z
and * characters, create and return a sorted list of words that match the pattern in the sense of the word
guessing game of Hangman.

Any pattern can only match words of the exact same length. In all positions where the pattern contains
some letter, the word must contain that same letter. In positions where the pattern contains an asterisk,
the word character in that position may not be any of the letters that already occur inside the pattern.
According to the rules of Hangman, all occurrences of such a letter would have already been revealed in
the earlier round when that letter was the current guess.

For example, the words 'bridge' and 'smudge' both match the pattern '***dg*'. However, the words 'grudge'
and 'dredge' would not match that same pattern, since the first asterisk may not be matched with either of
the letters 'g' or 'd' that appear inside the pattern.

+-----------+----------------------------------------------------+
| pattern   | Expected result                                    |
+-----------+----------------------------------------------------+
| '***dg*'  | ['abedge', 'aridge', 'bludge', 'bridge', 'cledge', |
|           | 'cledgy', 'cradge', 'fledge', 'fledgy', flidge',   |
|           | 'flodge', 'fridge', 'kludge', 'pledge', 'plodge',  |
|           | 'scodgy', 'skedge', 'sledge', 'slodge', 'sludge',  |
|           | 'sludgy', 'smidge', 'smudge', 'smudgy', 'snudge',  |
|           | 'soudge', 'soudgy', 'squdge', 'squdgy', 'stodge',  |
|           | 'stodgy', 'swedge', 'swidge', 'trudge', 'unedge']  |
+-----------+----------------------------------------------------+
| '*t*t*t*' | ['statute']                                        |
+-----------+----------------------------------------------------+
| 'a**s**a' | ['acystia', 'acushla', 'anosmia']                  |
+-----------+----------------------------------------------------+
| '*ikk**'  | ['dikkop', 'likker', 'nikkud', 'tikker', 'tikkun'] |
+-----------+----------------------------------------------------+

*/
const { readFileSync } = require("fs");
const matchPattern = (word, pattern) => {
  for (var i = 0; i < pattern.length; i++) {
    if (pattern[i] !== "*" && pattern[i] !== word[i]) {
      return false;
    }
  }
  return true;
};

const DuplicatedLetter = (word, letters) => {
  for (var i = 0; i < letters.length; i++) {
    let count = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[j] === letters[i]) {
        count++;
      }
    }
    if (count > 1) {
      return true;
    }
  }
  return false;
};

function possibleWords(words, pattern) {
  /**
   * those two list you need to enter the file path instead of words to read from the file .
   */
  //   const contents = readFileSync(words, "utf-8");
  //   words = contents.split(/\r?\n/);
  let patternLenth = pattern.length;
  let correctWords = [];
  let patternLetters = pattern.split("*").join("").split("");
  correctWords = words.filter((word) => {
    if (
      word.length === patternLenth &&
      matchPattern(word, pattern) &&
      !DuplicatedLetter(word, patternLetters)
    ) {
      return word;
    }
  });
  return correctWords;
}
//  READ from file example
// console.log(possibleWords("./words_sorted.txt", "**ie"));

// Read from an array example
// console.log(possibleWords(["amie" , "beie" , "aa"  ,"eeejie" ] , "**ie"));
