## Level 2 / Sorting / Challenge 12

### Problem Description
Spiderman has 'm' friends. They stand in a row from left to right, and the j-th friend from the left wears a Jersey with a number xj written on it. Each friend has a direction (left or right). In the beginning, the direction of each friend is right.

Spiderman can make some operations on friends. On each operation, Spiderman can choose two adjacent friends and swap their positions. After each operation, the direction of both chosen friends will also be flipped: left to right and vice versa.

Spiderman hopes that after some operations, the numbers written on the Jersey of 'm' friends in the row, read from left to right, become non-decreasing. Also he wants, that all friends will have a direction of right at the end. Please find if it is possible.

### Constraints
- 1 ≤ T ≤ 50
- 1 ≤ m ≤ 10^5
- 1 ≤ xj ≤ 10^5

### Input Format
- The input consists of multiple test cases. The first line contains a single integer T (1≤ T ≤ 50) — the number of test cases.
- The first line of each test case contains a single integer m (1 ≤ m ≤ 10^5) — the number of Spidermans friends.
- The second line contains 'm' integers x1,x2,…,xm (1 ≤ xj ≤ 10^5) — the numbers, written on the Jersey.

### Output Format
- Print the output in a separate lines contains, a possible sequence of operations, print YES ; otherwise, print NO.

### Test Cases

#### Test Case 1
**Input:**
```
3
4
4 3 2 5
4
3 3 2 2
5
1 2 3 5 4
```
**Expected Output:**
```
Yes
Yes
No
```

#### Test Case 2
**Input:**
```
4
5
1 4 2 5
3
1 3 3
4
2 3 5 4
2
3 5
```
**Expected Output:**
```
No
Yes
No
No
```

### Mandatory Keywords
- `for(j=0;j<m;j++)`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 155
- NLOC: 20
