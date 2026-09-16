# Searching - Challenge 6

An expert explanation and solution for the problem.

## 1. Problem Overview
The problem asks us to find a non-empty subset of a given array $A$ that maximizes the sum of its elements. If multiple non-empty subsets produce the same maximum sum, we must choose the one containing the largest number of elements. We need to print the maximum sum and the count of elements in that optimal subset.

## 2. Algorithm & Approach
1. **Array Analysis**:
   - **Positive numbers ($A_i > 0$)**: Strictly increase the subset sum, so all positive numbers must be included.
   - **Zeros ($A_i = 0$)**: Adding zero does not change the maximum sum, but it increases the number of elements in the subset. Since we want to maximize the subset size for the optimal sum, all zeros should also be included.
   - **Negative numbers ($A_i < 0$)**: Adding negative numbers strictly decreases the sum. They should be excluded if there is at least one non-negative ($ \ge 0$) element in the array.
2. **Handling All-Negative Arrays**:
   - If the array contains **only negative numbers**, the maximum sum of a non-empty subset is obtained by selecting a single element with the maximum (least negative) value, and the subset size will always be `1`.
3. **Implementation**:
   - Iterate through the input array using a loop conditioned on `while(num)`.
   - Maintain a running sum and count for non-negative numbers, alongside tracking the maximum negative number encountered.
   - Output the total sum and count if non-negative elements exist; otherwise, output the maximum single negative number and a count of `1`.

## 3. Example Walkthrough
### Sample Input:
```text
5
6 3 -4 -2 5
```

1. **Initialization**: `num = 5`, `sum = 0`, `count = 0`, `has_non_neg = 0`, `max_neg = -2000000000`.
2. **Iteration 1**: `x = 6` ($\ge 0$) $\rightarrow$ `sum = 6`, `count = 1`, `has_non_neg = 1`.
3. **Iteration 2**: `x = 3` ($\ge 0$) $\rightarrow$ `sum = 9`, `count = 2`.
4. **Iteration 3**: `x = -4` ($< 0$) $\rightarrow$ `max_neg = -4`.
5. **Iteration 4**: `x = -2` ($< 0$) $\rightarrow$ `max_neg = -2`.
6. **Iteration 5**: `x = 5` ($\ge 0$) $\rightarrow$ `sum = 14`, `count = 3`.
7. **Final Check**: `has_non_neg` is true $\rightarrow$ Output `14 3`.

## 4. C Solution

```c
#include <stdio.h>

int main()
{
    long long num, x, sum = 0, count = 0, max_neg = -2000000000LL;
    int has_non_neg = 0;

    if (scanf("%lld", &num) != 1) return 0;

    while(num) {
        scanf("%lld", &x);
        if (x >= 0) {
            sum += x;
            count++;
            has_non_neg = 1;
        } else if (x > max_neg) {
            max_neg = x;
        }
        num--;
    }

    if (has_non_neg) {
        printf("%lld %lld\n", sum, count);
    } else {
        printf("%lld 1\n", max_neg);
    }

    return 0;
}
```
