## Level 2 / Searching / Challenge 10

### Problem Description
Reliance group processes thousands of transactions daily amounting to millions of dollars. 

They also have a daily target that they must achieve. 

Given a list of transactions done by Reliance group and a daily target your task is to determine at which transaction does Reliance group achieve the same. 

### Constraints
- 1 <= T <= 100000 
- 1 <= Ai <= 1000 
- 1 <= Target <= 10^9 
- 1 <= Q <= 1000000 

### Input Format
- First line contains T, number of transactions done by Reliance group in a day. 
- The following line contains T integers, the worth of each transaction. 
- Next line contains Q, the no of queries. 
- Next Q lines contain an integer each representing the daily target. 

### Output Format
- Print the transaction number where the daily limit is achieved, or -1 if the target can't be achieved. 

### Test Cases

#### Test Case 1
**Input:**
```
5
1 2 1 3 4
5
3
4
8
```
**Expected Output:**
```
2
3
5
5
5
```

#### Test Case 2
**Input:**
```
5
1 2 1 3 4
3
3
4
7
```
**Expected Output:**
```
2
3
4
```

### Mandatory Keywords
- `int fun(int mid)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 270
- NLOC: 60
