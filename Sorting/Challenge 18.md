## Level 2 / Sorting / Challenge 18

### Problem Description
Today is Vignesh's birthday, and he will go shopping to buy ice spheres. All n ice spheres are placed in a row and they are numbered from 1 to n from left to right. Each ice sphere has a positive integer price. In this version all prices are different. 

An ice sphere is cheap if it costs strictly less than two neighboring ice spheres: the nearest to the left and the nearest to the right. The leftmost and the rightmost ice spheres are not cheap. Vignesh will choose all cheap ice spheres and then buy only them. 

You can visit the shop before Vignesh and reorder the ice spheres as you wish. Find out the maximum number of ice spheres that Vignesh can buy, and show how the ice spheres should be reordered. 

### Constraints
- 1 ≤ n ≤ 10^5 
- 1 ≤ ai ≤ 10^9 

### Input Format
- The first line contains a single integer n — the number of ice spheres in the shop. 
- The second line contains n different integers a1,a2,…,an — the prices of ice spheres 

### Output Format
- In the first line print the maximum number of ice spheres that Vignesh can buy. 
- In the second line print the prices of ice spheres in the optimal order.

### Test Cases

#### Test Case 1
**Input:**
```
5
1 2 3 4 5
```
**Expected Output:**
```
2
5 1 4 2 3
```

#### Test Case 2
**Input:**
```
1
1000000000
```
**Expected Output:**
```
0
1000000000
```

### Mandatory Keywords
- `int a[n+1];`
- `for(i=0,j=n-1;i<=j;i++,j--)`

### Complexity Constraints
- Cyclomatic Complexity: 4
- Token Count: 150
- NLOC: 20
