## Level 2 / Searching / Challenge 8

### Problem Description
Kapildev is a mobile phone marketer. 

For example, if someone answers this question correctly, a mobile phone will be handed to them at a 50% discount. 

The goal is to discover the three elements that are closest to each other from three sorted arrays. 

So obtain three input arrays from the user, all of which should be sorted. 

As input, take the three sorted arrays and their sizes. 

The closest element from three arrays should be the final solution.

### Constraints
- 0 < array_size < 100
- 0 < arr_elements < 1000

### Input Format
- first line represents the number of elements N in first sorted array
- second line indicates input elements according to N
- third line represents the number of elements M in second sorted array
- fourth line indicates input elements according to M
- fifth line represents the number of elements L in second sorted array
- Sixth line indicates input elements according to L

### Output Format
- Single line represents the out put that are closest to each other from three sorted arrays

### Test Cases

#### Test Case 1
**Input:**
```
3
1 4 10
3
2 15 20
2
10 12
```
**Expected Output:**
```
10 15 10
```

#### Test Case 2
**Input:**
```
3
20 24 100
5
2 19 22 79 800
5
10 12 23 24 119
```
**Expected Output:**
```
24 22 23
```

### Mandatory Keywords
- `void findClosest(int A[],int B[],int C[],int p,int q,int r)`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 375
- NLOC: 44
