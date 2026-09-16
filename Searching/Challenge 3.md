## Level 2 / Searching / Challenge 3

### Problem Description
In this problem, we define "set" is a collection of distinct numbers. For two sets A and B, we define their sum set is a set S(A,B) = {a+b|a∊A, b∊B}. 

In other word, set S(A,B) contains all elements which can be represented as a sum of an element in A and an element in B. Given two sets A, C, 

your task is to find set 'B' of positive integers less than or equals 100 with maximum size such that S(A, B)=C. It is guaranteed that there is unique such set.

### Constraints
- 1 ≤ N, M ≤ 100 
- 1 ≤ ai, ci ≤ 100 

### Input Format
- The first line contains N denoting the number of elements in set A, the following line contains N space-separated integers 'ai' denoting the elements of set A. 
- The third line contains M denoting the number of elements in set C, the following line contains M space-separated integers 'ci' denoting the elements of set C 

### Output Format
- Print all elements of B in increasing order in a single line, separated by space.

### Sample Input & Output
**Sample Input:**
```
2
1 2 
3 4 5
```
**Sample Output:**
```
2 3
```

**Explanation:**
If $e$ is an element of set $B$, then $e+2$ is an element of set $C$, so we must have $e \le 3$. Clearly, $e$ cannot be $1$ because $1+1=2$ is not an element of set $C$. Therefore, $B=\{2, 3\}$.

### Test Cases

#### Test Case 1
**Input:**
```
4
3 5 2 4
7
4 5 6 7 8 9 10
```
**Expected Output:**
```
2 3 4 5
```

#### Test Case 2
**Input:**
```
2
5 3
3
6 8 10
```
**Expected Output:**
```
3 5
```

### Mandatory Keywords
- `for(int i=0;i<N;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 205
- NLOC: 35
