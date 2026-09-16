## Level 2 / Linked List / Challenge 39

### Problem Description
There are 'P' room in a row indexed from 1 to P. At a time, 2 people enter the kitchen. The level of uncleanness of each room is '0' initially and it increases by 1 after it is used each time. The first person occupies the first room with the lowest level of uncleanness moving from 1 to P. The second person occupies the room with the lowest level of uncleanness moving from P to 1. The next two people enter the room when the first two people have left. Find the index of room and level of uncleanness for the Q-th person.

Note: In case 'Q' is odd, the last person walks into the kitchen alone and occupies the least unclean room moving from 1 to P.

### Constraints
- 1 <= T <= 20
- 1 <= P <= 45000
- 1 <= Q <= 10^6

### Input Format
- The first line contains T, the number of test cases. Each test case consists of one line containing P, the number of rooms, and Q, the person to enter the room, seperated by space.

### Output Format
- Print the output in a separate lines containing the index of the room used by Q and its level of uncleanness.

### Test Cases

#### Test Case 1
**Input:**
```
3  
12 3  
5 9  
4 25 
```
**Expected Output:**
```
2 0
2 1
1 6
```

#### Test Case 2
**Input:**
```
4  
15 4  
6 8  
3 17
4 7 
```
**Expected Output:**
```
14 0
6 1
1 5
2 1
```

### Mandatory Keywords
- `while`
- `if`
- `else`

### Complexity Constraints
- Cyclomatic Complexity: 9
- Token Count: 180
- NLOC: 24
