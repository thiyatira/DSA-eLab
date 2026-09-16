## Level 2 / Linked List / Challenge 36

### Problem Description
Madurai is a major city in the Indian state of Tamil Nadu with a number of villages, some of which have hotels. Villages are numbered consecutively and each has a street of 1KM length connecting it to the next village. It is not a circular route, so the first village doesn't connect with the last village. Determine the maximum distance from any village to its nearest hotel.

### Constraints
- 1 <= q <= 10^6
- 1 <= p <= q
- There will be at least 1 village with a hotel
- No village has more than one hotel.

### Input Format
- The first line consists of two space-separated integers, q and p.
- The second line contains 'p' space-separated integers, the indices of each village that has a hotel. These values are unordered and distinct.

### Output Format
- Print the output in a single line contains, find the maximum distance from any village to its nearest hotel.

### Test Cases

#### Test Case 1
**Input:**
```
6 6
0 1 2 4 3 4
```
**Expected Output:**
```
1
```

#### Test Case 2
**Input:**
```
5 3
1 0 6
```
**Expected Output:**
```
2
```

### Mandatory Keywords
- `for`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 200
- NLOC: 25
