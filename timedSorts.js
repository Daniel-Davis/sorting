load('sortingCode.js');

var numElements = 1000;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Elapsed time for the bubble sort on " +
 numElements + " elements is: " + elapsed + " milliseconds.");
nums.setData();
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the selection sort on " +
 numElements + " elements is: " + elapsed + " milliseconds.");
nums.setData();
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the insertion sort on " +
 numElements + " elements is: " + elapsed + " milliseconds.");

