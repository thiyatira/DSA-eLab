## Level 2 / Arrays / Challenge 24

### Problem Description
sami is studying B.Tech.-Software Engineering. 

He's going to attend a computer science-based subject exam this semester.

Due to the less preparation in the previous monthly tests,  his internal mark decreased. 

His computer science Professor made an offer one more chance to boost up his internal marks. 

Professor assigns a program to Simon for the internal mark boostup. 

So Sami wants to solve Questions which is given by the test coordinator.
Simon need to identify the find largest sum contiguous sub-array. can you help him?

Functional Description:
Naive solution would be use two for loops and check every subarray and return the subarray which has the maximum sum.

The best way to solve this puzzle is to use Kadane’s algorithm which runs in O(n) time. 

The idea is to keep scanning through the array and calculating the maximum sub-array that ends at every position. 

The sub-array will either contain a range of numbers if the array has intermixed positive and negative values, or it will contain the least negative value if the array has only negative values.

### Constraints
- 0 < n1 < 100
- 0 < n2 < 100
- 0 < k < 100

### Test Cases

#### Test Case 1
**Input:**
```
7
-1 1 4 1 1 2 -3
```
**Expected Output:**
```
9
```

#### Test Case 2
**Input:**
```
9
-2 1 -3 4 -1 2 1 -5 4
```
**Expected Output:**
```
6
```

### Mandatory Keywords
- `int kadane(int arr[],int n)`
- `for(int i=0;i<n;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 150
- NLOC: 27
