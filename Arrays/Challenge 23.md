## Level 2 / Arrays / Challenge 23

### Problem Description
Pyramid's consists of an infinite number of rows of an increasing number of integers each, arranged in a triangular shape.

Let us define (a, b) as the b-th position from the left in the a-th row, with both a and b counted starting from 1. Then Pyramid's is defined by the following rules:

The r-th row contains r positions (a, 1), (a, 2), ..., (a, a).
The numbers at positions (a, 1) and (a, a) are 1, for all a.
The number at position (a, b) is the sum of the numbers at positions (a - 1, b - 1) and (a - 1, b), for all b with 2 ≤ b ≤ a - 1.

In this problem, a Pyramid run is a sequence of s positions (a1, b1), (a2, b2), ..., (as, bs) in Pyramid's that satisfy the following criteria:

- a1 = 1 and b1 = 1.
- Each subsequent position must be within the triangle and adjacent (in one of the six possible directions) to the previous position. That is, for all i ≥ 1, (ai + 1, bi + 1) must be one of the following that is within the triangle: (ai - 1, bi - 1), (ai - 1, bi), (ai, bi - 1), (ai, bi + 1), (ai + 1, bi), (ai + 1, bi + 1).
- No position may be repeated within the sequence. That is, for every i ≠ j, either ai ≠ aj or bi ≠ bj, or both.

Find any Pyramid run of R ≤ 500 positions such that the sum of the numbers in all of the positions it visits is equal to S. It is guaranteed that at least one such run exists for every S.

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ S ≤ 1000.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each consists of a single line containing a single integer S.

### Output Format
- Print the output in a separate lines contains, Pyramid run of length R ≤ 500 using R additional lines. The i-th of these lines must be ai bi where (ai, bi) is the i-th position in the run. For example, the first line should be 1 1 since the first position for all valid runs is (1, 1). The sum of the numbers at the R positions of your proposed Pyramid run must be exactly S.

### Test Cases

#### Test Case 1
**Input:**
```
3
1
4
19
```
**Expected Output:**
```
Process #1:
1 1
Process #2:
1 1
2 2
3 3
4 4
Process #3:
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
10 10
11 11
12 12
13 13
14 14
15 15
16 16
17 17
18 18
19 19
```

#### Test Case 2
**Input:**
```
3
2
6
9
```
**Expected Output:**
```
Process #1:
1 1
2 2
Process #2:
1 1
2 2
3 3
4 4
5 5
6 6
Process #3:
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
```

### Mandatory Keywords
- `for(j=row;j>=0;j--)`

### Complexity Constraints
- Cyclomatic Complexity: 10
- Token Count: 350
- NLOC: 50
