## Level 2 / Sorting / Challenge 14

### Problem Description
As the Basketball coach at local college, Vivek have been tasked with picking a team of exactly R students to represent your college. There are M students for you to pick from. The j-th student has a skill rating Nj, which is a positive integer indicating how skilled they are.

Vivek have decided that a team is fair if it has exactly R students on it and they all have the same skill rating. That way, everyone plays as a team. Initially, it might not be possible to pick a fair team, so you will give some of the students one-on-one coaching. It takes one hour of coaching to increase the skill rating of any student by 1.

The competition season is starting very soon, so Vivek wants to calculate the minimum number of hours of coaching Vivek need to give before Vivek able to pick a fair team.

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ Nj ≤ 10000, for all j.
- 2 ≤ R ≤ M.
- 2 ≤ M ≤ 1000

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the two integers M and R, the number of students and the number of students Vivek need to pick, respectively. Then, another line follows containing M integers Nj; the j-th of these is the skill of the j-th student.

### Output Format
- Print the output in a separate lines contains, Calculate the minimum number of hours of coaching Vivek need to give before Vivek able to pick a fair team.

### Test Cases

#### Test Case 1
**Input:**
```
3
4 3
3 1 9 100
6 2
5 5 1 2 3 4
5 5
7 7 1 7 7
```
**Expected Output:**
```
14
0
6
```

#### Test Case 2
**Input:**
```
5
4 3
3 1 9 100
6 2
5 6 1 2 3 4
5 5
7 7 1 7 7
3 2
6 7 1
4 3
5 6 1 4
```
**Expected Output:**
```
14
1
6
1
3
```

### Mandatory Keywords
- `for(tt = 1; tt <= tc; ++tt)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 405
- NLOC: 50
