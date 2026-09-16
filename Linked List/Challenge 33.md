## Level 2 / Linked List / Challenge 33

### Problem Description
There are a number of trees in a forest. Each of the trees has been treated with some amount of chemical. After each day, if any tree has more chemical than the tree on its left, being low energy than the left one, it dies.

You are given the starting values of the chemical in each of the trees. Determine the number of days after which no tree dies, i.e. the time after which there is no tree with more chemical content than the tree to its left.

### Constraints
- 1 <= m <= 10^5
- 1 <= t[i] <= 10^9

### Input Format
- The first line contains an integer 'm', the size of the array 't'.
- The next line contains 'm' space-separated integers t[i].

### Output Format
- Print the output in a single line contain the number of days after which no tree dies, i.e. the time after which there is no tree with more chemical content than the tree to its left.

### Test Cases

#### Test Case 1
**Input:**
```
8
4 5 8 4 7 11 5 9
```
**Expected Output:**
```
2
```

#### Test Case 2
**Input:**
```
6
5 4 8 4 7 9
```
**Expected Output:**
```
1
```

### Mandatory Keywords
- `for`
- `if`
- `else`

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 265
- NLOC: 32
