# Arrays - Challenge 26

## 1. Problem Overview
The problem asks us to find the maximum number of burgers that can be placed on cooling racks. We are given $N$ burgers with specified weights and $N$ cooling racks with specified weight limits. A burger can be placed on a rack if its weight does not exceed the rack's limit, with each rack holding at most one burger.

## 2. Algorithm & Approach
1. Read the number of test cases $T$.
2. For each test case, read $N$, the array of burger weights (`no`), and the array of rack weight limits (`w`).
3. Sort both arrays in non-decreasing (ascending) order using a simple sorting algorithm like Bubble Sort.
4. Use a greedy two-pointer strategy to pair burgers with racks:
   - Compare the smallest available burger with the smallest available rack limit.
   - If the burger fits on the rack (`no[bi] <= w[ri]`), increment the count and move both pointers forward.
   - If the burger is too heavy for the current rack limit, move only the rack pointer forward to try a larger rack.
5. Print the maximum count for each testcase.

## 3. Example Walkthrough
For Test Case 2:
- Burgers: `[87, 45, 3, 2]` $\rightarrow$ Sorted: `[2, 3, 45, 87]`
- Racks: `[56, 13, 4, 8]` $\rightarrow$ Sorted: `[4, 8, 13, 56]`

Matching step-by-step:
1. Burger `2` $\le$ Rack `4` $\rightarrow$ Match! Count = 1.
2. Burger `3` $\le$ Rack `8` $\rightarrow$ Match! Count = 2.
3. Burger `45` $\le$ Rack `13` $\rightarrow$ No fit. Move to Rack `56`.
4. Burger `45` $\le$ Rack `56` $\rightarrow$ Match! Count = 3.
5. Burger `87` $\rightarrow$ No racks left.

Total placed burgers = `3`.

## 4. C Solution
```c
#include <stdio.h>

int main()
{
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        int n, no[32],w[32];
        scanf("%d", &n);
        for (int i = 0; i < n; i++) {
            scanf("%d", &no[i]);
        }
        for (int i = 0; i < n; i++) {
            scanf("%d", &w[i]);
        }

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (no[j] > no[j + 1]) {
                    int temp = no[j];
                    no[j] = no[j + 1];
                    no[j + 1] = temp;
                }
                if (w[j] > w[j + 1]) {
                    int temp = w[j];
                    w[j] = w[j + 1];
                    w[j + 1] = temp;
                }
            }
        }

        int count = 0, bi = 0, ri = 0;
        while (bi < n && ri < n) {
            if (no[bi] <= w[ri]) {
                count++;
                bi++;
                ri++;
            } else {
                ri++;
            }
        }
        printf("%d\n", count);
    }
    return 0;
}
```
