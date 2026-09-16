## Level 2 / Searching / Challenge 1

### Problem Description
The grandest stage of all, WrestleMania, recently happened. And with it, happened one of the biggest heartbreaks for the WWE fans around the world. 

The Undertaker's undefeated streak was finally over. Now as an Undertaker fan, you're disappointed, disheartened and shattered to pieces.

And Randy Orton doesn't want to upset you in any way possible. (After all you are his only friend, true friend!) Randy Orton knows that you're still sensitive to the loss, so he decides to help you out. 

Every time you come across a number, Randy Orton carefully manipulates it. He doesn't want you to face numbers which have "21" as a part of them. Or, in the worst case possible, are divisible by 21. 

If you end up facing such a number, you feel sad... and no one wants that - because you start chanting "The streak is broken!" , if the number doesn't make you feel sad, you say, "The streak lives still in our heart!" Help Randy Orton so that he can help you! 

### Constraints
- 1 ≤ t ≤ 100 
- 1 ≤ n ≤ 1000000 

### Input Format
- The first line contains a number, `t`, denoting the number of test cases.
- After that, for `t` lines there is one number in every line. 

### Output Format
- Print the required string, depending on how the number will make you feel.

### Test Cases

#### Test Case 1
**Input:**
```
3
121
130
231
```
**Expected Output:**
```
The streak is broken!
The streak lives still in our heart!
The streak is broken!
```

#### Test Case 2
**Input:**
```
3
125
130
235
```
**Expected Output:**
```
The streak lives still in our heart!
The streak lives still in our heart!
The streak lives still in our heart!
```

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 185
- NLOC: 40
