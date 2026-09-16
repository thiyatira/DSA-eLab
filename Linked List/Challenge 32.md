## Level 2 / Linked List / Challenge 32

### Problem Description
Muthu has entering a offer for a longtime supply of pizzas. M coupons have already been sold. Each coupon contains a single integer between 1 and P, inclusive. Different coupons are allowed to contain the same integer. Muthu know exactly which numbers are on all of the coupons already sold and he would like to maximize odds of winning by purchasing two coupons. Muthu is allowed to choose which integers between 1 and P, inclusive, are on the two coupons.

Muthu knows, he is a last customer, so after he purchase his coupons, no more coupons will be purchased. Then, an integer 'i' between 1 and P, inclusive, is chosen uniformly at random. If one of Muthu's coupons is strictly closer to 'i' than all other coupons or if both of Muthu's coupons are the same distance to 'i' and strictly closer than all other coupons, then you win the offer. Otherwise, Muthu do not win the offer.

Given the integers on the M coupons purchased so far, what is the maximum probability of winning the offer Muthu can achieve by choosing the integers on Muthu's two coupons optimally?

### Constraints
- 1 ≤ T ≤ 50.
- 1 ≤ M ≤ 40.
- 1 ≤ Qi ≤ P, for all i.
- 1 ≤ P ≤ 10^8.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of two lines. The first line of a test case contains two integers M and P: the number of coupons already sold and the limit of the range of integers to collect from, respectively. The second line contains M integers Q1,Q2,…,QM, representing the integers on the coupons that have already been purchased.

### Output Format
- Print the output in a separate lines contains, the maximum win probability Muthu can achieve if Muthu choose his coupons optimally.

### Test Cases

#### Test Case 1
**Input:**
```
4
3 12
1 3 7
4 12
4 1 7 3
4 3
1 2 4 2
4 4
1 2 2 2
```
**Expected Output:**
```
Line #1: 0.58333
Line #2: 0.50000
Line #3: 0.33333
Line #4: 0.50000
```

#### Test Case 2
**Input:**
```
5
4 10
1 3 3 4
3 12
4 7 3
3 3
2 4 2
4 4
1 2 3 2
5 4
1 3 4 7 2
```
**Expected Output:**
```
Line #1: 0.70000
Line #2: 0.58333
Line #3: 0.66667
Line #4: 0.25000
Line #5: 0.50000
```

### Mandatory Keywords
- `for (i = 1; i < n; ++i)`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 275
- NLOC: 32
