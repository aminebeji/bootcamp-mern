/*
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
const checkDuplicated = (word, pattern) => {
  const patternLetters = pattern.split("*").join("").split("");
  //const patternLetters = pattern.replace(/[*]/g, "").split("");
  for (var i = 0; i < patternLetters.length; i++) {
    var count = 0;
    var letter = patternLetters[i];
    for (var j = 0; j < word.length; j++) {
      if (word[j] == letter) {
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};

const checkLetters = (word, pattern) => {
  for (var i = 0; i < word.length; i++) {
    if (pattern[i] != "*" && pattern[i] !== word[i]) {
      return false;
    }
  }
  return true;
};
const fs = require("fs");
const possibleWord = (pattern) => {
  const file = fs.readFileSync("./words_sorted.txt", "utf-8");
  const words = file.split("\r\n");
  var newWords = words.filter((word) => {
    var sameLength = word.length === pattern.length;
    var matchPattern = checkLetters(word, pattern);
    var matchDuplicated = checkDuplicated(word, pattern);
    if (sameLength && matchPattern && matchDuplicated) {
      return word;
    }
  });
};

console.log(possibleWord("***dg*"));
