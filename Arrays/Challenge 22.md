## Level 2 / Arrays / Challenge 22

### Problem Description
Mustafa defines the happiness score of a string as the number of indices j such that Mj≠MN−j+1 where 1≤j≤N/2 (1-indexed). For example, the string CABABC has a happiness score of 2 since M2≠M5 and M3≠M4.

Mustafa gave Bama a string M of length N, consisting of uppercase letters and asked her to convert it into a string with a happiness score of L. In one operation, Bama can change any character in the string to any uppercase letter. Could you help Bama compute the minimum number of the operations required to transform the given string into a string with happiness score equal to L?

### Constraints
- 1 ≤ T ≤ 100.
- 0 ≤ L ≤ N/2.
- 1 ≤ N ≤ 100

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow.
- The first line of each test case contains two integers N and L. The second line of each test case contains a string M of length N, consisting of uppercase letters.

### Output Format
- Print the output in a separate lines contains, compute the minimum number of the operations required to transform the given string into a string with happiness score equal to L?

### Test Cases

#### Test Case 1
**Input:**
```
2
5 1
ABCAA
4 2
ABAA
```
**Expected Output:**
```
0
1
```

#### Test Case 2
**Input:**
```
3
6 1
ABCAAC
5 2
ABAAB
3 1
ABA
```
**Expected Output:**
```
2
0
1
```

### Mandatory Keywords
- `string S;`
- `for (i = 0; i < N/2; i++)`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 140
- NLOC: 20
