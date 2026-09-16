## Level 2 / Sorting / Challenge 17

### Problem Description
Mark has gotten very bored of winning every programming contest and farming unlimited rating. Today, he is going to farm tomatoes instead. 

Mark's garden is an infinite 2D plane. he has 'm' tomatoes to plant, and the j-th tomato must be planted at (aj, bj). Starting at the point (0,0), Mark begins walking, in one step he can travel one unit right or up (increasing his a or b coordinate by 1 respectively). At any point (A,B) during his walk he can plant some tomatoes at arbitrary points using his tomato gun, consuming max(|A−a|,|B−b|) units of energy in order to plant a tomato at (a,b). Find the minimum total energy required to plant every tomato. 

Note that Mark may plant any number of tomatoes from any point. 

### Constraints
- 1 ≤ m ≤ 700000 
- 0 ≤ aj, bj ≤ 10^9 

### Input Format
- The first line contains the integer m. 
- The next 'm' lines contain two integers aj and bj, representing the location of the j-th tomato. It is possible that some tomatoes should be planted in the same location. 

### Output Format
- Print the output in a single line contains the minimum total energy to plant all tomatoes.

### Test Cases

#### Test Case 1
**Input:**
```
2
2 0
0 1
```
**Expected Output:**
```
1
```

#### Test Case 2
**Input:**
```
3
5 5
7 7
4 9
```
**Expected Output:**
```
2
```

### Mandatory Keywords
- `int x,y;`
- `a[i]=mp(x+y,x);`

### Complexity Constraints
- Cyclomatic Complexity: 4
- Token Count: 335
- NLOC: 28
