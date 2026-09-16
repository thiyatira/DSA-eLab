# Linked List - Challenge 33

## 1. Problem Overview
Given an array representing the chemical levels in a line of trees, any tree with a strictly higher chemical level than the tree directly to its left dies at the end of each day. The goal is to determine the total number of days until no more trees die (identical to the classic *Poisonous Plants* problem).

## 2. Algorithm & Approach
1. Use a monotonic stack to process each tree in $O(m)$ time complexity.
2. The stack stores elements as pairs: `(value, days_to_die)`.
3. For each tree:
   - Initialize `days = 0`.
   - While the stack is not empty and the current tree's value is $\le$ the top element's value, pop the top element and update `days = max(days, top.days)`.
   - `if` the stack is empty, the current tree never dies (`days = 0`).
   - `else`, the current tree will die on day `days + 1`.
   - Update the global maximum days and push the current tree onto the stack.
4. Print the maximum days after processing all trees.

## 3. Example Walkthrough
**Input:** `8`, `[4, 5, 8, 4, 7, 11, 5, 9]`
- Tree `4`: stack is empty $\rightarrow$ `days = 0`, stack: `[(4, 0)]`
- Tree `5`: `5 > 4` $\rightarrow$ `days = 0 + 1 = 1`, stack: `[(4, 0), (5, 1)]`
- Tree `8`: `8 > 5` $\rightarrow$ `days = 1 + 1 = 2`, stack: `[(4, 0), (5, 1), (8, 2)]`
- Tree `4`: pops `(8, 2)`, `(5, 1)`, `(4, 0)` $\rightarrow$ stack empty $\rightarrow$ `days = 0`, stack: `[(4, 0)]`
- Tree `7`: `7 > 4` $\rightarrow$ `days = 0 + 1 = 1`, stack: `[(4, 0), (7, 1)]`
- Tree `11`: `11 > 7` $\rightarrow$ `days = 1 + 1 = 2`, stack: `[(4, 0), (7, 1), (11, 2)]`
- Tree `5`: pops `(11, 2)`, `(7, 1)` $\rightarrow$ `days = max(2, 1) + 1 = 3` (wait, $5 > 4$, top is 4, max popped days is 2, so `days = 2 + 1 = 3`... wait, 5 is smaller than 11, dies after 11 dies. 11 dies on day 2, so 5 dies on day 2 because on day 1 [5, 8, 7, 11, 9 die] -> remaining: [4, 4, 5], then 5 dies on day 2. Max popped days was 2, so days = 2).
- Global maximum days is `2`.

## 4. C Solution
```c
#include <stdio.h>

struct Tree {
    int val;
    int days;
} stack[100005];

int main() {
    int m, top = -1, max_days = 0;
    if (scanf("%d", &m) != 1) return 0;

    for (int i = 0; i < m; i++) {
        int x, days = 0;
        scanf("%d", &x);
        while (top >= 0 && stack[top].val >= x) {
            if (stack[top].days > days) {
                days = stack[top].days;
            }
            top--;
        }
        if (top < 0) {
            days = 0;
        } else {
            days = days + 1;
        }
        if (days > max_days) {
            max_days = days;
        }
        top++;
        stack[top].val = x;
        stack[top].days = days;
    }

    printf("%d\n", max_days);
    return 0;
}
```
