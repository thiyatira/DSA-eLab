## Level 2 / Sorting / Challenge 15

### Problem Description
Many years ago Berland was a small country where only 𝑛 people lived. Each person had some savings: the 𝑖-th one had 𝑎𝑖 burles.

The government considered a person as wealthy if he had at least 𝑥 burles. To increase the number of wealthy people Berland decided to carry out several reforms. Each reform looked like that:

the government chooses some subset of people (maybe all of them);
the government takes all savings from the chosen people and redistributes the savings among the chosen people equally.

A lot of data was lost from that time, so we don't know how many reforms were implemented and to whom. All we can do is ask you to calculate the maximum possible number of wealthy people after several (maybe zero) reforms.

### Constraints
- 1 ≤ 𝑇 ≤ 1000
- 1 ≤ 𝑛 ≤ 10^5, 1 ≤ 𝑥 ≤ 10^9
- 1 ≤ 𝑎𝑖 ≤ 10^9

### Input Format
- The first line contains single integer 𝑇 — the number of test cases.
- Next 2𝑇 lines contain the test cases — two lines per test case. The first line contains two integers 𝑛 and 𝑥 — the number of people and the minimum amount of money to be considered as wealthy.
- The second line contains 𝑛 integers 𝑎1,𝑎2,…,𝑎𝑛 — the initial savings of each person.

### Output Format
- Print the output in a separate lines contains the maximum possible number of wealthy people after several (maybe zero) reforms.

### Test Cases

#### Test Case 1
**Input:**
```
4
4 3
5 1 2 1
4 10
11 9 11 9
2 5
4 3
3 7
9 4 9
```
**Expected Output:**
```
2
4
0
3
```

#### Test Case 2
**Input:**
```
5
4 3
1 1 2 1
4 9
10 9 11 9
2 5
4 3
3 7
9 4 8
3 5
9 1 8
```
**Expected Output:**
```
0
4
0
3
3
```

### Mandatory Keywords
- `for(i=0;i<n;i++)`
- `for(i=n-1;i>=0;i--)`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 145
- NLOC: 23
