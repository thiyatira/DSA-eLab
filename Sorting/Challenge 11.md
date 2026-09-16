## Level 2 / Sorting / Challenge 11

### Problem Description
Heath ledger the Joker lives in the amazon forest and has collected M fruits for lunch. Since he has a small mouth, he eats fruits one at a time. Some fruits are tougher than others! The j-th fruit takes him Nj seconds to eat.

Heath ledger eats fruits to get power. Different stones give him different amounts of power. Furthermore, the fruits lose power over time. The j-th fruit initially contains Fj units of power and will lose Gj units of power each second. When Heath ledger starts to eat a fruit, he will receive all the power the fruit contains immediately. The fruit's power stops decreasing once it hits zero.

What is the largest amount of power Heath ledger could receive from eating his fruits?

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ M ≤ 100.
- 1 ≤ Nj ≤ 100.
- 1 ≤ Fj ≤ 10^5.
- 0 ≤ Gj ≤ 10^5.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the integer M, the number of power fruits Heath ledger has. Then, there are M more lines, the M-th of which contains the three integers Nj, Fj and Gj, as described above.

### Output Format
- Print the output in a separate lines contains, largest amount of power Heath ledger could receive from eating his fruits?

### Test Cases

#### Test Case 1
**Input:**
```
3
4
20 10 1
5 30 5
100 30 1
5 80 60
3
10 4 1000
10 3 1000
10 8 1000
2
12 300 50
5 200 0
```
**Expected Output:**
```
105
8
500
```

#### Test Case 2
**Input:**
```
2
4
15 10 1
5 30 4
90 30 1
5 80 60
2
10 4 1000
10 3 999
```
**Expected Output:**
```
110
4
```

### Mandatory Keywords
- `int m, j;`
- `for(j = 0; j < m; ++j)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 585
- NLOC: 65
