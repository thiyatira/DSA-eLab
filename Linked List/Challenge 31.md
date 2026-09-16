## Level 2 / Linked List / Challenge 31

### Problem Description
Farmer Ayyanar has built a new long shelter, with S shops. The shops are located along a straight line at positions y1,...,yS.

His G goats don't like this shelter layout and become aggressive towards each other once put into a shop. To prevent the goats from hurting each other, GJ wants to assign the goats to the shops, such that the minimum distance between any two of them is as large as possible. What is the highest minimum distance?

### Constraints
- 1 <= T <= 20
- 2 <= S <= 100,000
- 0 <= yi <= 1,000,000,000
- 2 <= G <= S

### Input Format
- T – the number of test cases, then T test cases follows.
- Line 1: Two space-separated integers: S and G
- Lines 2..S+1: Line i+1 contains an integer shop location, yi

### Output Format
- Print the output in a separate lines contains the highest minimum distance.

### Test Cases

#### Test Case 1
**Input:**
```
1
6 3
1
2
7
4
8
9
```
**Expected Output:**
```
3
```

#### Test Case 2
**Input:**
```
2
5 2
1
3
4
6
7
4 3
1
5
6
7
```
**Expected Output:**
```
6
2
```

### Mandatory Keywords
- `while`
- `for`
- `if`
- `else`

### Complexity Constraints
- Cyclomatic Complexity: 6
- Token Count: 275
- NLOC: 45
