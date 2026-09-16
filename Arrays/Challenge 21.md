## Level 2 / Arrays / Challenge 21

### Problem Description
Vikram K Kumar has decided to give a task to his assistant directors as the part of preparation for his upcoming technological thriller film.

So he have given two arrays with distinct elements A and B.  

The task is to print the common elements of the two arrays.  

If no element is common in two arrays, then print Zero.

Can you help the assistant directors to complete their task

### Constraints
- 1 ≤ T ≤ 100
- 1 ≤ N, M ≤ 105
- 1 ≤ A[i], B[i] ≤ 105

### Input Format
- The first line of input contains an integer T denoting the number of test cases.  
- The first line of each test case is N and M, N is the size of array A and M is size of array B. 
- The second line of each test case contains N input A[i].
- The third line of each test case contains M input B[i].

### Output Format
- Print the intersecting elements sorted in ascending order.
- If no element is common in two array, then print "Zero" without quotes.

### Test Cases

#### Test Case 1
**Input:**
```
2
5 3
89 24 75 11 23
89 2 4
6 5
1 2 3 4 5 6
3 4 5 6 7
```
**Expected Output:**
```
89 
3 4 5 6 
```

#### Test Case 2
**Input:**
```
1
3 5
89 78 56
51 61 89 78 12
```
**Expected Output:**
```
89 78 
```

### Mandatory Keywords
- `int a[n],b[m];`
- `if(a[i]>b[j])`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 195
- NLOC: 35
