# Arrays - Challenge 28

## 1. Problem Overview
The problem asks us to assign $B$ daily activities, each defined by a start time $S_i$ and end time $E_i$, to either Selvam ('S') or Lakshmi ('L'). No person can be assigned two overlapping activities (activities touching at an endpoint, i.e., $E_i = S_j$, are not considered overlapping). If a valid assignment exists, output the string of assignments; otherwise, print `IMPOSSIBLE`.

## 2. Algorithm & Approach
1. Store the activity start times in `lhs` and end times in `rhs`.
2. Process each activity in the given input order.
3. For each activity $i$:
   - Check if assigning it to Selvam ('S') causes any time overlap with previously assigned 'S' activities. An overlap between activity $i$ and $j$ occurs if $S_i < E_j$ and $E_i > S_j$.
   - If Selvam is free, assign activity $i$ to 'S'.
   - If Selvam is busy, check if Lakshmi ('L') is free from overlaps with all previously assigned 'L' activities.
   - If Lakshmi is free, assign activity $i$ to 'L'.
   - If both Selvam and Lakshmi are busy, mark the schedule as impossible.
4. Output the resulting schedule string or `IMPOSSIBLE`.

## 3. Example Walkthrough
Consider Test Case 1, Subcase 3 ($B = 5$):
- `99 150`: Free for S $\rightarrow$ Assign **S**. (S list: `[99, 150]`)
- `1 100`: Overlaps with S (`1 < 150` and `100 > 99`). Free for L $\rightarrow$ Assign **L**. (L list: `[1, 100]`)
- `100 301`: Overlaps with S (`100 < 150`). Does not overlap with L (`100` touches end `100`) $\rightarrow$ Assign **L**. (L list: `[1, 100]`, `[100, 301]`)
- `2 5`: Free for S (does not overlap with `[99, 150]`) $\rightarrow$ Assign **S**.
- `150 250`: Free for S (touches end `150`) $\rightarrow$ Assign **S**.

Final Assignment: `SLLSS`

## 4. C Solution
```c
#include <stdio.h>

int main()
{
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        int n;
        if (scanf("%d", &n) != 1) break;
        int lhs[1005];
        int rhs[1005];
        char ans[1005];
        int possible = 1;

        for(int i=0;i<n;i++) {
            scanf("%d %d", &lhs[i], &rhs[i]);
        }

        for (int i = 0; i < n; i++) {
            int s_ok = 1;
            for (int j = 0; j < i; j++) {
                if (ans[j] == 'S' && lhs[i] < rhs[j] && rhs[i] > lhs[j]) {
                    s_ok = 0;
                    break;
                }
            }
            if (s_ok) {
                ans[i] = 'S';
            } else {
                int l_ok = 1;
                for (int j = 0; j < i; j++) {
                    if (ans[j] == 'L' && lhs[i] < rhs[j] && rhs[i] > lhs[j]) {
                        l_ok = 0;
                        break;
                    }
                }
                if (l_ok) {
                    ans[i] = 'L';
                } else {
                    possible = 0;
                    break;
                }
            }
        }

        if (possible) {
            ans[n] = '\0';
            printf("%s\n", ans);
        } else {
            printf("IMPOSSIBLE\n");
        }
    }
    return 0;
}
```
