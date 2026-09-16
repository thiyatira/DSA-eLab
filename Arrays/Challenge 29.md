## Level 2 / Arrays / Challenge 29

### Problem Description
Everyday morning, the frog would jump from out his pool and go to see his friend who resided in a tree hole.

At noon, he'd come home. In the meanwhile, these two individuals will engage in a game. 

It will be a technical game.

today task for solving the technical program is,

There is a collection of N strings ( There can be multiple occurrences of a particular string ). 

Each string's length is no more than 20 characters. 

There are also Q queries. For each query, you are given a string, and you need to find out how many times this string occurs in the given collection of N strings.

### Constraints
- 1 < N < 1000
- 1 < Q < 1000

### Input Format
- The first line contains N, the number of strings.
- The next N lines each contain a string.
- The N+2nd line contains , Q the number of queries.
- The following Q lines each contain a query string.             

### Output Format
- print the results that the number of times the string present in the given strings.

### Test Cases

#### Test Case 1
**Input:**
```
4
abacd
babacd
abacd
xzxb
3
abacd
xzxb
abc
```
**Expected Output:**
```
2
1
0
```

#### Test Case 2
**Input:**
```
4
ertyu
babacd
edcfrvt
xzxb
3
abacd
ertyu
abc
```
**Expected Output:**
```
0
1
0
```

### Mandatory Keywords
- `int cnt[N]`
- `string x[N];`
- `int query(string s)`
- `void add(string s)`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 250
- NLOC: 44
