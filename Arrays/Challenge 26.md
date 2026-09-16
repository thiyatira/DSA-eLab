## Level 2 / Arrays / Challenge 26

### Problem Description
vijay has just finished baking several burgers, and it's time to place them on cooling racks. vijay has exactly as many cooling racks as burgers. 

Each cooling rack can only hold one burger, and each burger may only be held by one cooling rack, but vijay isn't confident that the cooling racks can support the weight of the burgers. 

vijay knows the weight of each burger, and has assigned each cooling rack a maximum weight limit. What is the maximum number of burgers the vijay can cool on the racks?

### Constraints
- T ≤ 30
- N ≤ 30

### Input Format
- Input begins with an integer T≤30, the number of test cases. 
- Each test case consists of 3 lines. 
- The first line of each test case contains a positive integer N≤30, the number of burgers (and also the number of racks). 
- The second and third lines each contain exactly positive N integers not exceeding 100. 
- The integers on the second line are the weights of the burgers, and the integers on the third line are the weight limits of the cooling racks.

### Output Format
- Print the maximum number of burgers vijay can place on the racks.

### Test Cases

#### Test Case 1
**Input:**
```
1
5
16 34 26 5 31
37 40 32 43 12
```
**Expected Output:**
```
5
```

#### Test Case 2
**Input:**
```
1
4
87 45 3 2
56 13 4 8
```
**Expected Output:**
```
3
```

### Mandatory Keywords
- `int no[32],w[32]`

### Complexity Constraints
- Cyclomatic Complexity: 12
- Token Count: 303
- NLOC: 52
