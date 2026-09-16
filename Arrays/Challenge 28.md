## Level 2 / Arrays / Challenge 28

### Problem Description
Selvam and Lakshmi's daughter is almost 3 years old! However, even though the daughter is more independent now, scheduling daughter activities and domestic necessities is still a challenge for the couple.

Selvam and Lakshmi have a list of B activities to take care of during the day. Each activity happens during a specified interval during the day. They need to assign each activity to one of them, so that neither of them is responsible for two activities that overlap. An activity that ends at time t is not considered to overlap with another activity that starts at time t.

For example, suppose that Selvam and Lakshmi need to cover 3 activities: one running from 18:00 to 20:00, another from 19:00 to 21:00 and another from 22:00 to 23:00. One possibility would be for Lakshmi to cover the activity running from 19:00 to 21:00, with Selvam covering the other two. Another valid schedule would be for Selvam to cover the activity from 18:00 to 20:00 and Lakshmi to cover the other two. Notice that the first two activities overlap in the time between 19:00 and 20:00, so it is impossible to assign both of those activities to the same partner.

Compute any schedule that does not require the same person to cover overlapping activities, or say that it is impossible.

### Constraints
- 1 ≤ T ≤ 100.
- 0 ≤ Si < Ei ≤ 24 × 60.
- 2 ≤ B ≤ 1000.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing a single integer B, the number of activities to assign. Then, B more lines follow. The i-th of these lines (counting starting from 1) contains two integers Si and Ei. The i-th activity starts exactly Si minutes after midnight and ends exactly Ei minutes after midnight.

### Output Format
- Print the output in a separate lines contains compute any schedule that does not require the same person to cover overlapping activities, or say that it is impossible..The i-th character in y must be S if the i-th activity is assigned to Selvam in your proposed schedule, and L if it is assigned to Lakshmi.

### Test Cases

#### Test Case 1
**Input:**
```
4
3
360 480
420 540
600 660
3
0 1440
1 3
2 4
5
99 150
1 100
100 301
2 5
150 250
2
0 720
720 1440
```
**Expected Output:**
```
SLS
IMPOSSIBLE
SLLSS
SS
```

#### Test Case 2
**Input:**
```
2
5
56 567
34 345
23 453
24 345
12 567
4
12 456
12 643
7 456
8 789
```
**Expected Output:**
```
IMPOSSIBLE
IMPOSSIBLE
```

### Mandatory Keywords
- `int lhs[1005];`
- `int rhs[1005];`
- `for(int i=0;i<n;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 19
- Token Count: 550
- NLOC: 84
