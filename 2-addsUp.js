/*

function addsUp(arrayOfNumbers, selectedNumber)

You have an array of integers and a selected number. Check if there are two numbers in the array that would
add up to the selected number. Return true if there are. Return false otherwise. Find the most efficient
way to do this.

+--------------------------+-----------------+-----------------+
| Array of integers        | selected number | Expected result |
+--------------------------+-----------------+-----------------+
| [2, 5, 4, 7, 7, 1, 10]   | 8               | true            |
+--------------------------+-----------------+-----------------+
| [1, 4, 8, 9, 5, 0, 16]   | 17              | true            |
+--------------------------+-----------------+-----------------+
| [9, 20, 14, 1, 7, 23, 4] | 45              | false           |
+--------------------------+-----------------+-----------------+

*/

function addsUp(arrayOfNumbers, selectedNumber) {
  for (var i = 0; i < arrayOfNumbers.length - 1; i++) {
    let NumberToCheck = arrayOfNumbers[i];
    for (var j = i; j < arrayOfNumbers.length; j++) {
      let somme = NumberToCheck + arrayOfNumbers[j];
      if (somme === selectedNumber) {
        return true;
      }
    }
  }
  return false;
}
