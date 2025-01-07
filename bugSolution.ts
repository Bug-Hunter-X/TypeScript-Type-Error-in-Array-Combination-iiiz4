function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; //Corrected to number

const combined = combine(arr1, arr2); 

//Alternative solution using type assertion (use with caution)
function combineAlternative(arr1: number[], arr2: (number | string)[]): number[] {
  return [...arr1, ...arr2.map(num => Number(num))];
}

const arr3 = [1, 2, 3];
const arr4 = [4, 5, "6"];
const combinedAlternative = combineAlternative(arr3, arr4);
console.log(combinedAlternative); //Output: [1, 2, 3, 4, 5, 6]
//Note: The above solution may introduce runtime errors if arr2 contains non-numeric strings.