function countingSort(arr) {
    // Find the minimum and maximum values in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    // Create a counting array to store the frequency of each value
    const countingArray = new Array(max - min + 1).fill(0);
  
    // Count the occurrences of each value in the original array
    for (const value of arr) {
      countingArray[value - min]++;
    }
  
    // Reconstruct the sorted array
    const sortedArray = [];
    for (let i = 0; i < countingArray.length; i++) {
      for (let j = 0; j < countingArray[i]; j++) {
        sortedArray.push(i + min);
      }
    }
  
    return sortedArray;
  }
  
  // Example usage:
  const integerList = [4, 2, 2, 8, 3, 3, 1];
  const sortedArray = countingSort(integerList);
  
  console.log(sortedArray);
  