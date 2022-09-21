/*

function cragScore(dice)

Crag (see the Wikipedia page for the scoring table needed in this problem) is a reverse Yahtzee dice game
in which players score points by creating scoring categories using combinations of the three dice rolled.
Players repeatedly roll three dice and assign the resulting patterns to scoring categories so that once
some roll has been assigned to a category, that category is considered to have been spent and cannot be
used again for any future roll. These tactical choices between safety and risk-taking give this game a
little bit more tactical flair on top of merely relying on the favors of Lady Luck for rolling the bones.

Given the list of pips of three dice of the first roll, this function should compute and return
the highest possible score available when all categories of the scoring table are still available for
you to choose from, so that all that matters is maximizing the first roll. Note that the examples on
the Wikipedia page show the score that some dice would score in that particular category, which is not
necessarily even close to the maximum score in principle attainable with that roll. For example, the
roll [1, 1, 1] inefficiently used in the category "Ones" would indeed score only three points, whereas
that same roll would score a whopping 25 points in the more fitting category "Three of a kind".
(The problem "Optimal crag score" near the end of this collection has you distribute a slew of these
rolls into distinct categories to maximize the total score).

This problem ought to be a straightforward exercise on if-else ladders combined with simple sequence
management. Your function should be swift and sure to return the correct answer for every one of
the 6^3 = 216 possible pip combinations. However, you will surely design your if-else structures to
handle entire equivalence classes of pip combinations in a single step, so that your  entire ladder
consists of far fewer than 216 separate steps.

https://en.wikipedia.org/wiki/Crag_(dice_game)

+-----------+-----------------+
| Dice      | Expected result |
+-----------+-----------------+
| [1, 2, 3] | 20              |
+-----------+-----------------+
| [4, 5, 1] | 5               |
+-----------+-----------------+
| [3, 3, 3] | 25              |
+-----------+-----------------+
| [4, 5, 4] | 50              |
+-----------+-----------------+
| [1, 1, 1] | 25              |
+-----------+-----------------+
| [1, 1, 2] | 2               |
+-----------+-----------------+

*/
// Check if all the numbers in an array are equals
const allEqual = (arr) => arr.every((v) => v === arr[0]);

// Get the somme of element of an array
const sum = (arr) => arr.reduce((partialSum, a) => partialSum + a, 0);

// Check if an array has duplicated (pair) elements
const hasPair = (array) => {
  if (array.length !== new Set(array).size) {
    return true;
  }
  return false;
};
// check if two array are eqauls (the two arrays should be with the same length)
const straight = (array, eql) => {
  array.sort();
  eql.sort();
  if (JSON.stringify(array) != JSON.stringify(eql)) {
    return false;
  } else {
    return true;
  }
};
const HasDice = (array, dices) => {
  for (var i = 0; i < array.length ; i++) {
    var element = array[i];
    for (var j = i; j < dices.length; j++) {
      if (element === dices[j]) {
        return element;
      }
    }
  }
  return 0;
};

// check if the array has sraight numbers with the condition of the straight category
const AllStraitCondition = (array) => {
  let low = straight(array, [1, 2, 3]);
  let high = straight(array, [4, 5, 6]);
  let odd = straight(array, [1, 3, 5]);
  let even = straight(array, [2, 4, 6]);
  return low || high || odd || even;
};

const sumOfChoosenDice = (array, dice) => {
  var somme = 0;
  for (var i = 0; i < array.length - 1; i++) {
    var element = array[i];
      if (element === dice) {
        somme = somme + element;
      }
  }
  return somme;
};
/* 
 - The condition system working from the highest score to the lowest score possible
 */

function cragScore(score) {
  if (sum(score) === 13) {
    if (hasPair(score)) {
      return 50;
    } else {
      return 26;
    }
  } else if (allEqual(score)) {
    return 25;
  } else if (AllStraitCondition(score)) {
    return 20;
  } else if (HasDice(score , [1,2,3,4,5,6]) !== 0) {
    return sumOfChoosenDice(score , HasDice(score , [1,2,3,4,5,6]));
  } else {
    return 0;
  }
}
