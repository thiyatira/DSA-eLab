## Level 2 / Searching / Challenge 4

### Problem Description
The Pizza Hut has just introduced a new kind of pizza! It has a smiley face made of potato chips on one side (the "smiley side"), and nothing on the other side (the "empty side").

You are the head waiter on duty, and the kitchen has just given you a stack of pizzas to serve to a customer. Like any good pizza server, you have X-ray pizza vision, and you can see whether each pizza in the stack has the smiley side up or the empty side up. You think the customer will be happiest if every pizza is smiley side up when you serve them.

You know the following maneuver: carefully lift up some number of pizzas (possibly all of them) from the top of the stack, flip that entire group over, and then put the group back down on top of any pizzas that you did not lift up. When flipping a group of pizzas, you flip the entire group in one motion; you do not individually flip each pizza. Formally: if we number the pizzas 1, 2, ..., N from top to bottom, you choose the top i pizzas to flip. Then, after the flip, the stack is i, i-1, ..., 2, 1, i+1, i+2, ..., N. Pizzas 1, 2, ..., i now have the opposite side up, whereas pizzas i+1, i+2, ..., N have the same side up that they had up before.

For example, let's denote the smiley side as + and the empty side as -. Suppose that the stack, starting from the top, is --+-. One valid way to execute the maneuver would be to pick up the top three, flip the entire group, and put them back down on the remaining fourth pizza (which would stay where it is and remain unchanged). The new state of the stack would then be -++-. The other valid ways would be to pick up and flip the top one, the top two, or all four. It would not be valid to choose and flip the middle two or the bottom one, for example; you can only take some number off the top.

You will not serve the customer until every pizza is smiley side up, but you don't want the pizzas to get cold, so you have to act fast! What is the smallest number of times you will need to execute the maneuver to get all the pizzas smiley side up, if you make optimal choices?

### Constraints
- 1 ≤ T ≤ 100.
- Every character in S is either + or -.
- 1 ≤ length of S ≤ 100.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each consists of one line with a string S, each character of which is either + (which represents a pizza that is initially smiley side up) or - (which represents a pizza that is initially empty side up). The string, when read left to right, represents the stack when viewed from top to bottom.

### Output Format
- Print the output in separate lines contains, the minimum number of times you will need to execute the maneuver to get all the pizzas smiley side up.

### Test Cases

#### Test Case 1
**Input:**
```
5
-
-+
+-
+++
--+-
```
**Expected Output:**
```
1
1
2
0
3
```

#### Test Case 2
**Input:**
```
5
--
++
+-
+-+
+-+-
```
**Expected Output:**
```
1
0
2
2
4
```

### Mandatory Keywords
- `int main(int argc, char const *argv[])`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 324
- NLOC: 38
