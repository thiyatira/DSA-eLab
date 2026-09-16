# Linked List - Challenge 38

## 1. Problem Overview
The problem asks for the minimum number of sections (elements) in an array $P$ of length $M$ that need to be modified (reconstructed) such that the number of height transitions between adjacent sections ($P_i \neq P_{i+1}$) is at most $K$.

## 2. Algorithm & Approach
1. **Reformulation**: Minimizing the number of modified sections is equivalent to maximizing the number of original sections kept unchanged. Allowing at most $K$ height changes means partitioning the array into at most $K + 1$ contiguous subsegments, where each subsegment is assigned a single height.
2. **Subsegment Cost**: For any subsegment $P[p..i-1]$, the maximum number of unchanged elements we can keep is the maximum frequency of any element value present in that subsegment.
3. **Dynamic Programming**:
   - Define `dp[i][j]` as the maximum number of elements kept unchanged in prefix $P[0..i-1]$ using at most $j$ subsegments (which corresponds to $j-1$ height transitions).
   - Base Case: `dp[0][j] = 0` for all $j$.
   - Transition: For each prefix $i$ and subsegment count $j$:
     $$\text{dp}[i][j] = \max_{0 \le p < i} \left( \text{dp}[p][j-1] + \text{max\_freq}(P[p..i-1]) \right)$$
4. The answer for a test case is $M - \text{dp}[M][\min(K+1, M)]$.

## 3. Example Walkthrough
Consider Test Case 2, Case 1: $M = 8, K = 2$, Array = `[300, 100, 300, 300, 200, 100, 700, 600]`
- $K = 2 \implies$ At most $3$ segments allowed.
- Segment 1: `[300, 100, 300, 300]` $\rightarrow$ Most frequent element is `300` (appears 3 times).
- Segment 2: `[200, 100]` $\rightarrow$ Most frequent element appears 1 time.
- Segment 3: `[700, 600]` $\rightarrow$ Most frequent element appears 1 time.
- Total maximum unchanged elements = $3 + 1 + 1 = 5$.
- Minimum sections to reconstruct = $M - 5 = 8 - 5 = 3$.
- Output: `Line #1: 3`.

## 4. C Solution
```c
#include <stdio.h>

int main() {
    int T, t;
    if (scanf("%d", &T) != 1) return 0;
    for (t = 1; t <= T; t++) {
        int M, K, i, j, p;
        if (scanf("%d %d", &M, &K) != 2) break;
        int a[105];
        for (i = 0; i < M; i++) {
            scanf("%d", &a[i]);
        }

        int dp[105][105] = {0};
        int max_blocks = K + 1 > M ? M : K + 1;

        for (j = 1; j <= max_blocks; j++) {
            for (i = 1; i <= M; i++) {
                dp[i][j] = dp[i][j - 1];
                int counts[1005] = {0};
                int max_f = 0;
                for (p = i - 1; p >= 0; p--) {
                    counts[a[p]]++;
                    if (counts[a[p]] > max_f) {
                        max_f = counts[a[p]];
                    }
                    if (dp[p][j - 1] + max_f > dp[i][j]) {
                        dp[i][j] = dp[p][j - 1] + max_f;
                    }
                }
            }
        }

        int max_kept = dp[M][max_blocks];
        printf("Line #%d: %d\n", t, M - max_kept);
    }
    return 0;
}
```
