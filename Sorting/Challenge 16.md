## Level 2 / Sorting / Challenge 16

### Problem Description
Ajith decided to wish happy birthday to his friend from America and send him a card. To make his present more mysterious, he decided to make a bracelet. Bracelet here is such a sequence of envelopes X = {x1, x2, ..., xn}, where the width and the height of the i-th envelope is strictly higher than the width and the height of the (i - 1)-th envelope respectively. Bracelet size is the number of envelopes in the chain.

Ajith wants to make the bracelet of the maximum size from the envelopes he has, the bracelet should be such, that he'll be able to put a card into it. The card fits into the bracelet if its width and height is lower than the width and the height of the smallest envelope in the bracelet respectively. It's forbidden to turn the card and the envelopes.

Ajith has very many envelopes and very little time, this hard task is entrusted to you.

### Constraints
- 1 ≤ n ≤ 5000
- 1 ≤ w, h ≤ 10^6
- 1 ≤ wi, hi ≤ 10^6

### Input Format
- The first line contains integers n, w, h — amount of envelopes Peter has, the card width and height respectively. 
- Then there follow n lines, each of them contains two integer numbers wi and hi — width and height of the i-th envelope.

### Output Format
- Print the output in a separate lines contains, the first line print the maximum bracelet size. In the second line print the numbers of the envelopes (separated by space), forming the required chain, starting with the number of the smallest envelope. Remember, please, that the card should fit into the smallest envelope. If the bracelet of maximum size is not unique, print any of the answers.

### Test Cases

#### Test Case 1
**Input:**
```
2 1 1
2 2
2 2
```
**Expected Output:**
```
1
1
```

#### Test Case 2
**Input:**
```
3 3 3
5 4
12 11
9 8
```
**Expected Output:**
```
3
1 3 2
```

### Mandatory Keywords
- `for(i=0;i<=n;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 6
- Token Count: 240
- NLOC: 24
