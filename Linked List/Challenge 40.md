## Level 2 / Linked List / Challenge 40

### Problem Description
Ram has given two integer arrays X and Y to Sakthi. Sakthi wants to find the Z that minimize the following equation. Print the Answer.

Answer:
$\sum_{i=1}^M |(X_i + Z) - Y_i|$

### Constraints
- 1 <= M <= 10^5
- 1 <= Xi, Yi <= 10^9

### Input Format
- First line contains M, Size of arrays
- Second line contains M integer: X1, X2, X3,...XM
- Third line contains M integer: Y1, Y2, Y3,..YM

### Output Format
- Print the output in a single line contains, The minimum value of the equation.

### Test Cases

#### Test Case 1
**Input:**
```
3
5 3 2
5 1 3
```
**Expected Output:**
```
3
```

#### Test Case 2
**Input:**
```
4
2 4 3 1
1 1 0 3
```
**Expected Output:**
```
7
```

### Mandatory Keywords
- `int answer = 0;`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 190
- NLOC: 25
