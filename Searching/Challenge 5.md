## Level 2 / Searching / Challenge 5

### Problem Description
Sania Mirza likes many more activities. She likes silambam, kumbham, archery, art, and many more. She joined a club that offers several classes. Each class has a time interval in every week. Sania Mirza wants to sign up for many classes, but since they overlap in time, she looks for a subset of non-overlapping classes to attend. A subset is non-overlapping if it does not contain two classes that overlap in time. If a class starts at the time another class ends, this is not considered overlapping.
Sania Mirza decided to list all the non-overlapping non-empty subsets of classes. Then she will choose the subset she likes best. In order to predict the amount of paper needed to write the list, she wants you to calculate how many of these subsets there are.

### Constraints
- 1 ≤ N ≤ 10^5 
- 1 ≤ S < E ≤ 10^9

### Input Format
- The first line contains an integer N indicating the number of classes the club offers. 
- Each of the next N lines describes a class using two integers S and E that represent the starting and ending times of the class, respectively.
- The end of input is indicated with a line containing a single −1.

### Output Format
- Print the output in separate lines contains, the number of non-overlapping non-empty subsets of classes. To make your life easier, output only the last 8 digits of the result. If the result has less than 8 digits, write it with leading zeros to complete 8 digits.

### Test Cases

#### Test Case 1
**Input:**
```
5
2 3
3 4
4 5
2 4
1 6
3
500 100
1 500
1 500
1
999 100
-1
```
**Expected Output:**
```
00000010
00000007
00000001
```

#### Test Case 2
**Input:**
```
4
3 4
4 5
2 4
1 6
2
500 100
1 500
1
999 100
-1
```
**Expected Output:**
```
00000006
00000004
00000001
```

### Mandatory Keywords
- `void add(int &a,int b)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 335
- NLOC: 48
