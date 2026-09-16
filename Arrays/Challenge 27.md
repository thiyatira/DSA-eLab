## Level 2 / Arrays / Challenge 27

### Problem Description
pathan has a sequence of N integers, A1,A2,...,AN. He likes this sequence if it contains a subsequence of M integers, B1,B2,...,BM within it. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

You will be given a sequence of N integers, A1,A2,...,AN followed by another sequence of M integers, B1,B2,...,BM. Given these, you have to tell whether pathan likes the sequence of N integers(A1,A2,...,AN) or not.

Formally, output "Yes" if

∃idx1,idx2,...,idxM | 1 ≤ idx1 < idx2 < ... < idxM ≤ N and Aidxi = Bi ∀ i, 1 ≤ i ≤ M

Otherwise output "No". Note that the quotes are for clarity.

### Constraints
- 1 ≤ T ≤ 100
- 1 ≤ N ≤ 10^3
- 1 ≤ M ≤ 10^3
- 1 ≤ Ai, Bi ≤ 10^9

### Input Format
- The first line contains a single integer, T.
- T test cases follow where each test case contains four lines:
- The first line of a test case contains a single integer N
- The second line of the test case contains N space separated integers, A1,A2,...,AN
- The third line of the test case contains a single integer M.
- The fourth line contains M space separated integers, B1,B2,...,BM
- Symbols have usual meanings as described in the statement.

### Output Format
- Print the output a single line containing the output. Output is "Yes" if Irfan likes the sequence A. 
- Output is "No" if pathan dislikes the sequence A.

### Test Cases

#### Test Case 1
**Input:**
```
3
8
1 4 3 2 5 6 9 4
3
1 7 8
4
21 7 16 11
3
15 7 3
4
1 4 3 2
3
1 1 3
```
**Expected Output:**
```
No
No
Yes
```

#### Test Case 2
**Input:**
```
3
6
3 2 5 6 9 4
3
1 7 8
3
7 16 11
3
15 7 3
3
4 3 2
3
1 1 3
```
**Expected Output:**
```
No
No
No
```

### Mandatory Keywords
- `int no[100],fs[100]`

### Complexity Constraints
- Cyclomatic Complexity: 10
- Token Count: 225
- NLOC: 41
