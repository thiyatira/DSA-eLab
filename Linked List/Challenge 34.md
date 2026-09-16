## Level 2 / Linked List / Challenge 34

### Problem Description
There was an outburst in the Kashiwazaki-Kariwa arithmetic plant. The region of effect of outburst is represented by a power of 3. To be able to control the outburst, workers needed to increase the amount of water flowing into the reactor. Total amount of water is represented by a power of 2. After the increment you need to check whether amount of water is enough to cover the whole outbursted region.

### Constraints
- 1 <= T <= 10^5
- 10^8 <= B <= 10^16
- 10^8 <= A <= 10^16

### Input Format
- The first line contains T, number of test cases. Each following line includes two numbers B, A representing the powers of 2 and 3, representing water and outburst powers representing their corresponding regions.

### Output Format
- Print the output in a separate lines contains, TRUE if amount of water is greater than or equal to the outburst region else print FALSE.

### Test Cases

#### Test Case 1
**Input:**
```
2
1000000000 1000000000
3000000000 1000000000
```
**Expected Output:**
```
FALSE
TRUE
```

#### Test Case 2
**Input:**
```
6
169931051624517282 442627781271449319
874675929881566453 734974143455549950
945379294603004186 82002188938213491
521543410880882901 347384392012703088
366793787774505031 200724302738852984
486793787774505031 300724302738852984
```
**Expected Output:**
```
FALSE
FALSE
TRUE
FALSE
TRUE
TRUE
```

### Mandatory Keywords
- `long long int b,a;`

### Complexity Constraints
- Cyclomatic Complexity: 4
- Token Count: 115
- NLOC: 20
