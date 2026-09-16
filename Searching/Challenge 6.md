## Level 2 / Searching / Challenge 6

### Problem Description
Ram has given an array of integers "A" to Tina, Tina need to find the maximum sum that can be obtained by picking some non-empty subset of the array. 

If there are many such non-empty subsets, choose the one with the maximum number of elements. 

Print the maximum sum and the number of elements in the chosen subset. 

### Constraints
- 1 ≤ N ≤ 10^5 
- -10^9 ≤ Ai ≤ 10^9

### Input Format
- The first line contains an integer 'N', denoting the number of elements of the array. 
- Next line contains 'N' space-separated integers, denoting the elements of the array. 

### Output Format
- Print two space-separated integers, the maximum sum that can be obtained by choosing some subset and the maximum number of elements among all such subsets which have the same maximum sum.

### Test Cases

#### Test Case 1
**Input:**
```
5
6 3 -4 -2 5
```
**Expected Output:**
```
14 3
```

#### Test Case 2
**Input:**
```
4
6 7 -2 -5
```
**Expected Output:**
```
13 2
```

### Mandatory Keywords
- `while(num)`

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 150
- NLOC: 35
