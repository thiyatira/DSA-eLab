## Level 2 / Searching / Challenge 2

### Problem Description
For Engineering first-year students, the instructor is organising a surprise test. 

He's given you an array of n integers to work with.

By adding +1 or -1 to the preceding entry, all the elements in the array are acquired. 

For this issue, the professor stipulated that the difference between any two successive components must be 1.

The problem's anticipated outcome is to search an element index with the minimum number of comparisons possible. 

If the element appears more than once, display the smallest index. If the element is missing, print -1.

### Constraints
- 0 < n < 1000

### Input Format
- First line indicates the size of an array
- Second line indicates the array elements 
- Third line indicates the number to be find.

### Output Format
- Single line represents the 1 for number is present or -1 for number is not present.

### Test Cases

#### Test Case 1
**Input:**
```
8
5 4 5 6 5 4 3 2
4
```
**Expected Output:**
```
1
```

#### Test Case 2
**Input:**
```
8
5 4 5 6 4 3 2 3
9
```
**Expected Output:**
```
-1
```

### Mandatory Keywords
- `int search(int arr[],int n,int x)`
- `int arr[20]`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 165
- NLOC: 30
