## Level 2 / Linked List / Challenge 37

### Problem Description
Ram's friend is recently done with Hotel management course and now she wants to boast in front of his college friends by making a nice cake. She has come up with an amazing cake called Strawberry Velvet. To make the dish, she has already collected Strawberries numbered 1 to B. She has also decided to connect each distinct and unordered pair of Strawberries with a sweet strand, made of jaggery powder. Sweet strands are either Pink or White, depending on the jaggery powder content in them. Each White strand contains one units of jaggery powder, and each Pink strand contains two units of jaggery powder.

But it turns out that the dessert is now too tasty, and these days his college friends are dieting and they usually like dishes with less jaggery powder. She is really confused now and comes to your rescue. Can you help her find out which all sweet strands she should remove such that each pair of Strawberries is connected directly or indirectly via a jaggery powder strand, and the dish has the minimum possible jaggery powder content?

### Constraints
- 1 ≤ T ≤ 50
- A ≤ B*(B-1)/2
- 1 ≤ Pi ≤ B, for all i.
- 1 ≤ Qi ≤ B, for all i.
- Pi ≠ Qi, for all i.
- Every {Pi, Qi} is distinct.
- 1 ≤ B ≤ 100.
- 0 ≤ A ≤ 100.

### Input Format
- The first line of input gives the number of test cases, T.
- Each test case begins with a line containing two integers B and A, the number of Strawberries and the number of white sweet strands, respectively.
- Then A lines follow, each describing a pair of Strawberries connected to a white strand. The i-th line contains cherries numbered Pi and Qi, it indicates that Pi and Qi Strawberry are connected with a white strand of jaggery powder.
- Note: Any other pair of Strawberries not present in the input means that they are connected by a Pink strand.

### Output Format
- Print the output in a separate lines contains minimum possible jaggery powder content.

### Test Cases

#### Test Case 1
**Input:**
```
4
2 1
1 4
3 1
2 6
4 1
3 6
4 1
4 7
```
**Expected Output:**
```
Line #1: 1
Line #2: 3
Line #3: 5
Line #4: 5
```

#### Test Case 2
**Input:**
```
3
2 1
1 3
3 1
2 3
4 1
3 4
```
**Expected Output:**
```
Line #1: 1
Line #2: 3
Line #3: 5
```

### Mandatory Keywords
- `while`
- `for`
- `if`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 325
- NLOC: 58
