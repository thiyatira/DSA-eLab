## Level 2 / Arrays / Challenge 25

### Problem Description
Ants have developed advanced ways to find, distribute and make their own food, to such extent that, it has been said that ants eat more meat than lions wolves and tigers combined! 

Argentine ant is one of the world’s worst invasive species(Species which are not native to a specific location, but have tendency to spread to a degree to cause damage to the native species of a region) present in the Norfolk Island. 

It forms supercolonies and are aggressive competitors, displacing most other ant species. It can alter ecosystem processes such as pollination and seed dispersal of native plant species.

The federal environment department is in its mission to wipe out the species from Norfolk Island. So, they are carrying out a survey in T sites within the island examinig the food sources. They know that the ant species can survive in a site only if the food available is more than K units or else they will eventually die out from the site. 

For every site, they go around the region examining N food sources, and finding A[i], the unit of food available from the ith source(1 ≤ i ≤ N).

Determine for each site, whether the ant species can survive or they die out from the specific site.

### Constraints
- 1 ≤ T ≤ 100
- 0 ≤ K ≤ 1018
- 1 ≤ N ≤ 105
- 0 ≤ A[i] ≤ 1013

### Input Format
- The first line contains two space-separated integers T and K. Then, information of T sites of the island follow.
- For each T, the first line contains N, the number of food sources and the second line contains N space-separated integers, A[i] (1 ≤ i ≤ N).

### Output Format
- For each T, output "SUCCESS" without quotes, if the ant species die out or "FAILURE" if the ant species survives.

### Test Cases

#### Test Case 1
**Input:**
```
3 8
2
4 4
1
7
5
3 8 11 13 17
```
**Expected Output:**
```
FAILURE
SUCCESS
FAILURE
```

#### Test Case 2
**Input:**
```
5 7
2
5 9
4
11 2 7 5
2
9 13
3
5 7 13
1
6
```
**Expected Output:**
```
FAILURE
FAILURE
FAILURE
FAILURE
SUCCESS
```

### Mandatory Keywords
- `int A[N]`
- `sum=sum+A[i];`

### Complexity Constraints
- Cyclomatic Complexity: 6
- Token Count: 160
- NLOC: 30
