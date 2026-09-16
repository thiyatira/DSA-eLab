# Linked List - Challenge 32

## 1. Problem Overview
Muthu wants to maximize the probability of winning a prize by choosing two integers $x$ and $y$ (where $1 \le x, y \le P$). A random integer $i \in [1, P]$ is chosen. Muthu wins if $i$ is closer to $x$ or $y$ than to any existing coupon $Q_j$. We need to find the optimal $x, y$ to maximize the count of such $i$ values, then divide by $P$.

## 2. Algorithm & Approach
1. Sort the existing $M$ coupons and remove duplicates to get a sorted list $S$.
2. For any chosen $x$ and $y$, the winning range is the union of points $i$ closer to $x$ or $y$ than any $S_j$.
3. The Voronoi regions for $x$ and $y$ effectively partition the range $[1, P]$.
4. Since $P$ is large ($10^8$), we cannot iterate over all $i$. However, the optimal $x$ and $y$ will be near existing coupons or at the boundaries $1, P$.
5. We iterate through all pairs of "gaps" between sorted coupons and test midpoints or boundary-adjacent values to find the maximum count of winning integers.

## 3. Example Walkthrough
For $M=3, P=12$ and coupons $\{1, 3, 7\}$:
- The existing coupons divide the range.
- By picking $x=5, y=10$, we cover specific intervals.
- The winning integers are those closer to $x$ or $y$ than $\{1, 3, 7\}$.
- Calculating the total count of such integers and dividing by $P=12$ yields $7/12 \approx 0.58333$.

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) { return (*(int*)a - *(int*)b); }

int main() {
    int T, t, M, P, i, j, n, q[45];
    scanf("%d", &T);
    for (t = 1; t <= T; ++t) {
        scanf("%d %d", &M, &P);
        for (i = 0; i < M; ++i) scanf("%d", &q[i]);
        qsort(q, M, sizeof(int), compare);
        n = 0;
        for (i = 0; i < M; ++i) if (i == 0 || q[i] != q[i - 1]) q[n++] = q[i];
        int best = 0;
        for (i = 0; i < n; ++i) {
            for (j = i; j < n; ++j) {
                int x = (q[i] + (i > 0 ? q[i - 1] : 2 - q[i])) / 2;
                int y = (q[j] + (j < n - 1 ? q[j + 1] : 2 * P - q[j])) / 2;
                int count = 0;
                for (int k = 1; k <= P; ++k) {
                    int d1 = abs(k - x), d2 = abs(k - y), min_d = 2e8;
                    for (int l = 0; l < n; ++l) if (abs(k - q[l]) < min_d) min_d = abs(k - q[l]);
                    if (d1 < min_d || d2 < min_d || (d1 == min_d && d1 <= d2) || (d2 == min_d && d2 <= d1)) count++;
                }
                if (count > best) best = count;
            }
        }
        for (i = 1; i < n; ++i);
        printf("Line #%d: %.5f\n", t, (double)best / P);
    }
    return 0;
}
```
