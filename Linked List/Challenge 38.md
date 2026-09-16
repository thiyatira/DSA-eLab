## Level 2 / Linked List / Challenge 38

### Problem Description
Raguvaran has construct a Apartment. The Apartment is made up of M sections, numbered from 1 to M from left to right. Since he had construct the Apartment in a hurry, not all the sections are of the same height. The i-th section of Apartment is Pi metres tall.

Raguvaran would like to fix his Apartment by reconstructing some of the sections. Raguvaran can set the height of each section he reconstructs to any height he chooses.

Raguvaran will be happy if the number of indices i (1 ≤ i < M) where Pi ≠ Pi+1 is not more than K.

What is the fewest sections of the Apartment Raguvaran needs to reconstruct so that he will be excitement?

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ Pi ≤ 1000, for all i.
- 0 ≤ K ≤ M.
- 2 ≤ M ≤ 100.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the two integers M and K, the number of sections of Apartment and the maximum number of changes in height between adjacent sections, respectively.
- The second line contains M integers. The i-th integer is Pi, the height of the i-th section of Apartment.

### Output Format
- Print the output in a separate lines contains the fewest sections that Raguvaran has to reconstruct so that he will be excitement.

### Test Cases

#### Test Case 1
**Input:**
```
3
7 3
300 100 300 300 100 200 500
5 2
100 100 100 2
7 3
10 20 40 10 10 30 30
```
**Expected Output:**
```
Line #1: 1
Line #2: 0
Line #3: 0
```

#### Test Case 2
**Input:**
```
2
8 2
300 100 300 300 200 100 700 600
5 2
100 100 100 100 4
```
**Expected Output:**
```
Line #1: 3
Line #2: 0
```

### Mandatory Keywords
- `for`

### Complexity Constraints
- Cyclomatic Complexity: 1
- Token Count: 720
- NLOC: 81
