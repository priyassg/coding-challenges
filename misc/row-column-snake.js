Please use this Google doc during your interview (your interviewer will see what you write here). To free your hands for typing, we recommend using a headset or speakerphone.


Implement the following function such that is produces output similar to the example:

snake(/* rows= */ 4, /* columns= */ 5);

1    8    9   16   17 
2    7   10   15   18 
3    6   11   14   19 
4    5   12   13   20 

1 2 3 4 5 6 7 8 9 10 

1   5   9   13   17
2   6   10   14   18

00 01 02 03
10 11 12 13
20 21 22 23
30 31 32 33

11 12 13 14
21 22 23 24
31 32 33 34 
41 42 43 44

[0-n]*m + m[1-m]

for (let i = 0; i < cols; i++) {
     let currentArray = [];
     for (let j = 0; j < rows; j++) {
       currentArray.push(currentNumber);
       currentNumber++;
     }
     if (i % 2 !== 0) {
       currentArray.reverse();
     }
     outputArray.push(currentArray);

for (let col = 0; col < numCols; col++) {
   if (col % 2 == 0) {
     for (let row = 0; row < numRows; row++) {
       grid[row][col] = n++;
     }
   } else {
     for (let row = numRows-1; row >= 0; row--) {
       grid[row][col] = n++;
     }
   }

