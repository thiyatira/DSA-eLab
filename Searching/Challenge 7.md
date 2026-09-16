## Level 2 / Searching / Challenge 7

### Problem Description
All business can make use of a good accountant and, if they're not big on following the law, sometimes a bad one. Bad accountants try to make more money for their employers by fudging numbers without getting caught.

Sometimes a bad accountant wants to make a number larger, and sometimes smaller. It is widely known that tax auditors will fail to notice two digits being swapped in any given number, but any discrepancy more egregious will certainly be caught. It's also painfully obvious when a number has fewer digits than it ought to, so a bad accountant will never swap the first digit of a number with a 0.

Given a number, how small or large can it be made without being found out?

### Constraints
- 1 ≤ T ≤ 100
- 0 ≤ N ≤ 999999999
- N will never begin with a leading 0 unless N = 0

### Input Format
- Input begins with an integer T , the number of numbers that need tweaking. Each of the next T lines contains a integer N .

### Output Format
- Print the output in separate lines contains, the smallest and largest numbers that can be made from the original number N , using at most a single swap and following the rules above.

### Test Cases

#### Test Case 1
**Input:**
```
5
31524
897
123
10
5
```
**Expected Output:**
```
13524 51324
798 987
123 321
10 10
5 5
```

#### Test Case 2
**Input:**
```
5
524
97
23
10
5
```
**Expected Output:**
```
254 542
79 97
23 32
10 10
5 5
```

### Mandatory Keywords
- `while(i<=t)`

### Complexity Constraints
- Cyclomatic Complexity: 10
- Token Count: 235
- NLOC: 39
