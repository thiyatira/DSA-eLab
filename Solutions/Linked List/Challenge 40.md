# Linked List - Challenge 40

## 1. Problem Overview
Given two arrays $X$ and $Y$ of length $M$, the objective is to find an integer $Z$ that minimizes the sum $\sum_{i=1}^M |(X_i + Z) - Y_i|$. We need to output this minimum possible sum.

## 2. Algorithm & Approach
1. Rewrite the equation: $|(X_i + Z) - Y_i| = |Z - (Y_i - X_i)|$. Let $D_i = Y_i - X_i$.
2. The problem reduces to finding a value $Z$ that minimizes $\sum_{i=1}^M |Z - D_i|$.
3. Mathematically, the sum of absolute deviations is minimized when $Z$ is chosen as the median of the set $D = \{D_1, D_2, \dots, D_M\}$.
4. Compute array $D$ where $D_i = Y_i - X_i$, sort $D$ in non-decreasing order, and set $Z = D[M / 2]$.
5. Calculate the total sum $\sum_{i=0}^{M-1} |D_i - Z|$ using 64-bit integers (`long long`) to handle potential large sums and print the result.

## 3. Example Walkthrough
For **Test Case 1**:
- $M = 3$
- $X = [5, 3, 2]$
- $Y = [5, 1, 3]$

1. Compute $D_i = Y_i - X_i$:
   - $D_0 = 5 - 5 = 0$
   - $D_1 = 1 - 3 = -2$
   - $D_2 = 3 - 2 = 1$
2. Sort $D$: $[-2, 0, 1]$
3. Median $Z = D[3/2] = D[1] = 0$
4. Compute sum:
   - $|-2 - 0| + |0 - 0| + |1 - 0| = 2 + 0 + 1 = 3$
5. Output: `3`

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

long long D[100005];

int cmp(const void *a, const void *b) {
    long long diff = *(long long*)a - *(long long*)b;
    return (diff > 0) - (diff < 0);
}

int main() {
    int answer = 0;
    int M;
    if (scanf("%d", &M) != 1) return 0;
    for (int i = 0; i < M; i++) {
        long long x;
        scanf("%lld", &x);
        D[i] = -x;
    }
    for (int i = 0; i < M; i++) {
        long long y;
        scanf("%lld", &y);
        D[i] += y;
    }
    qsort(D, M, sizeof(long long), cmp);
    long long med = D[M / 2], total = 0;
    for (int i = 0; i < M; i++) {
        total += llabs(D[i] - med);
    }
    printf("%lld\n", total);
    return 0;
}
```
