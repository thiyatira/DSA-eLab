## Level 2 / Linked List / Challenge 35

### Problem Description
At NPTEL we love learning new subjects to each other! There are M workers at NPTEL, numbered from 1 to M. There are a total of S different subjects, numbered from 1 to S. Each worker knows up to 5 different subjects.

The i-th worker can guide the j-th worker if there is a subject that the i-th worker knows that the j-th worker does not know. How many ordered pairs (i, j) are there where the i-th worker can guide the j-th worker?

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ S ≤ 1000.
- 1 ≤ Di ≤ 5 for all i.
- 1 ≤ Bij ≤ S for all i and j.
- Bij ≠ Bik for all j ≠ k.
- 2 ≤ M ≤ 500.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. The first line of each test case gives the two integers M and S, which are the number of workers and the number of subjects respectively.
- The next M lines describe the subjects that each worker knows. The i-th of these lines begins with an integer Di which is the number of subjects the i-th worker knows. Then, Di integers follow on the same line. The j-th of these integers is Bij indicating that the i-th worker knows the subject Bij.

### Output Format
- Print the output in a separate lines contains the number of ordered pairs (i, j) where the i-th worker can guide the j-th worker.

### Test Cases

#### Test Case 1
**Input:**
```
5
4 100
4 70 90 100 5
1 90
1 70
3 70 90 100
3 30
4 10 11 12 13
4 10 11 12 13
5 25 26 27 28 29
3 33
4 11 12 12 13
4 10 11 12 13
5 24 25 27 28 29
4 100
4 70 90 100 5
1 80
1 70
3 80 90 100
3 32
4 10 11 12 13
4 10 11 12 13
5 25 26 27 28 29
```
**Expected Output:**
```
Line #1: 7
Line #2: 4
Line #3: 6
Line #4: 10
Line #5: 4
```

#### Test Case 2
**Input:**
```
4
4 100
4 70 90 100 5
1 90
1 70
3 70 90 100
3 30
4 10 11 12 13
4 10 11 12 13
5 25 26 27 28 29
3 33
4 11 12 12 13
4 10 11 12 13
5 24 25 27 28 29
4 100
4 70 90 100 5
1 80
1 70
3 80 90 100
```
**Expected Output:**
```
Line #1: 7
Line #2: 4
Line #3: 6
Line #4: 10
```

### Mandatory Keywords
- `for`
- `while`
- `if`

### Complexity Constraints
- Cyclomatic Complexity: 1
- Token Count: 725
- NLOC: 94
