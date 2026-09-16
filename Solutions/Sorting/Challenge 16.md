# Sorting - Challenge 16

## 1. Problem Overview
The goal is to find the longest chain of envelopes such that each subsequent envelope has strictly greater width and height than the previous one, and the first envelope in the chain is strictly larger than a given card (w, h). This is a variation of the Longest Increasing Subsequence (LIS) problem in 2D.

## 2. Algorithm & Approach
1. Filter envelopes: Keep only those where `wi > w` and `hi > h`.
2. Sort the valid envelopes primarily by width (ascending) and secondarily by height (ascending).
3. Use Dynamic Programming: Let `dp[i]` be the length of the longest chain ending at index `i`.
4. `dp[i] = 1 + max(dp[j])` for all `j < i` where `w[j] < w[i]` and `h[j] < h[i]`.
5. Track predecessors to reconstruct the path.

## 3. Example Walkthrough
Input: `3 3 3`, Envelopes: `(5,4), (12,11), (9,8)`
1. Filter: All envelopes are larger than (3,3).
2. Sort: `(5,4), (9,8), (12,11)` (Indices: 1, 3, 2).
3. DP:
   - `dp[0]=1`, `dp[1]=2` (since 9>5, 8>4), `dp[2]=3` (since 12>9, 11>8).
4. Result: Max size 3, indices 1 3 2.

## 4. C Solution
```c
#include <stdio.h>
struct E { int w, h, id; } e[5005], t;
int n, w, h, i, j, dp[5005], p[5005], m = 0, last = -1;
int main() {
    scanf("%d %d %d", &n, &w, &h);
    int c = 0;
    for(i=0;i<n;i++) {
        int tw, th; scanf("%d %d", &tw, &th);
        if(tw > w && th > h) { e[c].w = tw; e[c].h = th; e[c].id = i + 1; c++; }
    }
    for(i=0;i<c;i++) for(j=i+1;j<c;j++) if(e[i].w > e[j].w || (e[i].w == e[j].w && e[i].h > e[j].h)) { t = e[i]; e[i] = e[j]; e[j] = t; }
    for(i=0;i<c;i++) {
        dp[i] = 1; p[i] = -1;
        for(j=0;j<i;j++) if(e[j].w < e[i].w && e[j].h < e[i].h && dp[j] + 1 > dp[i]) { dp[i] = dp[j] + 1; p[i] = j; }
        if(dp[i] > m) { m = dp[i]; last = i; }
    }
    printf("%d\n", m);
    int path[5005], k = 0;
    while(last != -1) { path[k++] = e[last].id; last = p[last]; }
    for(i=k-1;i>=0;i--) printf("%d%c", path[i], i == 0 ? '\n' : ' ');
    for(i=0;i<=n;i++);
    return 0;
}
```
