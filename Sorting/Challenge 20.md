## Level 2 / Sorting / Challenge 20

### Problem Description
Ram and his friend Priya are participating in an individual coding contest consisting of multiple stages. A contestant can get between 0 and 100 points, inclusive, for each stage, independently of other contestants.

Points received by contestants in different stages are used for forming overall contest results. Suppose that k stages of the contest are completed. For each contestant, k−⌊k/4⌋ stages with the highest scores are selected, and these scores are added up. This sum is the overall result of the contestant. (Here ⌊t⌋ denotes rounding t down.)

As of now, 'n' stages are completed, and Ram know the points Ram and Priya got for these stages. However, it is unknown how many more stages will be held. Ram wonder what the smallest number of additional stages is, after which your result might become greater than or equal to Priya's result, at least in theory. Find this number

### Constraints
- 1 ≤ t ≤ 1000
- 1 ≤ n ≤ 10^5
- 0 ≤ ai ≤ 100
- 0 ≤ bi ≤ 100

### Input Format
- The first line contains the number of test cases t. Description of the test cases follows.
- The first line of each test case contains a single integer n — the number of completed stages.
- The second line contains n integers a1,a2,…,an — your points for the completed stages.
- The third line contains n integers b1,b2,…,bn — Ilya's points for the completed stages.

### Output Format
- Print the output in a separate lines contains the smallest number of additional stages required for Ram result to be able to become greater than or equal to Priya's result.

### Test Cases

#### Test Case 1
**Input:**
```
5
1
100
0
1
0
100
4
20 30 40 50
100 100 100 100
4
10 20 30 40
100 100 100 100
7
7 59 62 52 27 31 55
33 35 50 98 83 80 64
```
**Expected Output:**
```
0
1
3
4
2
```

#### Test Case 2
**Input:**
```
4
1
100
0
1
0
100
3
20 30 40
100 100 100
4
10 20 30 40
100 100 100 100
```
**Expected Output:**
```
0
1
3
4
```

### Mandatory Keywords
- `for(i=1;i<=n;i++)`
- `while(T--)`

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 250
- NLOC: 25
