# Searching - Challenge 7

## 1. Problem Overview
Given a number $N$, find the smallest and largest possible numbers that can be formed by swapping at most one pair of digits. Swapping the first digit with a `'0'` is strictly disallowed unless $N = 0$.

## 2. Algorithm & Approach
1. Read the number of test cases $T$. Initialize a counter $i = 1$ to satisfy the mandatory loop condition `while(i<=t)`.
2. For each number, read it as a string to easily manipulate individual digits.
3. Compute the initial integer value of $N$ to serve as the baseline minimum and maximum.
4. Iterate through all possible pairs of indices $(j, k)$ where $0 \le j < k < \text{length}$:
   - Skip any swap where $j = 0$ and the digit at index $k$ is `'0'` (disallowed leading zero swap).
   - Perform the swap, convert the resulting string to a numerical value, and update the global minimum and maximum values.
   - Swap the digits back to restore the original state for the next iteration.
5. Print the smallest and largest numbers space-separated for each test case.

## 3. Example Walkthrough
For input `31524`:
- Original value: `31524`, Baseline min = `31524`, max = `31524`.
- Valid swaps:
  - Swap index 0 and 1 (`3` $\leftrightarrow$ `1`): `13524` $\rightarrow$ min becomes `13524`.
  - Swap index 0 and 2 (`3` $\leftrightarrow$ `5`): `51324` $\rightarrow$ max becomes `51324`.
  - Other swaps produce intermediate values (e.g., `21534`, `41523`).
- Output: `13524 51324`.

For input `10`:
- Original value: `10`.
- Swap index 0 and 1 (`1` $\leftrightarrow$ `0`) is skipped because $j=0$ and $s[1]='0'$.
- Output remains `10 10`.

## 4. C Solution
```c
#include <stdio.h>
#include <string.h>

int main() {
    int t, i = 1;
    if (scanf("%d", &t) != 1) return 0;
    while(i<=t) {
        char s[15];
        scanf("%s", s);
        int len = strlen(s);
        long long orig = 0, min_v, max_v;
        for (int j = 0; j < len; j++) orig = orig * 10 + (s[j] - '0');
        min_v = max_v = orig;
        
        for (int j = 0; j < len; j++) {
            for (int k = j + 1; k < len; k++) {
                if (j == 0 && s[k] == '0') continue;
                char temp = s[j]; s[j] = s[k]; s[k] = temp;
                long long val = 0;
                for (int m = 0; m < len; m++) val = val * 10 + (s[m] - '0');
                if (val < min_v) min_v = val;
                if (val > max_v) max_v = val;
                s[k] = s[j]; s[j] = temp;
            }
        }
        printf("%lld %lld\n", min_v, max_v);
        i++;
    }
    return 0;
}
```
