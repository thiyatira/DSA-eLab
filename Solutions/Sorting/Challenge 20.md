# Sorting - Challenge 20

## 1. Problem Overview
The problem asks for the minimum number of additional contest stages $x$ Ram needs to play such that his total score becomes greater than or equal to Priya's score. For $k = n + x$ total stages, each contestant's score is the sum of their top $k - \lfloor k/4 \rfloor$ stage scores. To maximize Ram's chances, Ram scores 100 in all $x$ additional stages while Priya scores 0 in all $x$ additional stages.

## 2. Algorithm & Approach
1. Use frequency arrays `ca` and `cb` of size 101 to store the count of stage scores (0 to 100) for Ram and Priya respectively.
2. Since stage scores range only from 0 to 100, checking whether a specific $x$ additional stages allows Ram to tie or beat Priya takes $O(100) = O(1)$ time:
   - Calculate total stages $k = n + x$ and required top stages $m = k - \lfloor k/4 \rfloor$.
   - Ram gets $x$ additional scores of 100.
   - Priya gets $x$ additional scores of 0.
   - Sum the highest $m$ scores for both players by iterating score values from 100 down to 0 using the frequency arrays.
3. Use binary search over $x \in [0, n]$ to find the minimum number of additional stages $x$ where Ram's sum $\ge$ Priya's sum.

## 3. Example Walkthrough
For $n = 4$:
- Ram scores: `20, 30, 40, 50`
- Priya scores: `100, 100, 100, 100`

- **For $x = 0$**: $k = 4, m = 3$. Ram top 3 = $50+40+30=120$. Priya top 3 = $300$. $120 < 300$ (False).
- **For $x = 2$**: $k = 6, m = 5$. Ram (adds two 100s) top 5 = $100+100+50+40+30=320$. Priya (adds two 0s) top 5 = $400$. $320 < 400$ (False).
- **For $x = 3$**: $k = 7, m = 6$. Ram (adds three 100s) top 6 = $100+100+100+50+40+30=420$. Priya top 6 = $400$. $420 \ge 400$ (True).

Thus, the minimum additional stages required is `3`.

## 4. C Solution
```c
#include <stdio.h>

int ca[101], cb[101];

int check(int x, int n) {
    int k = n + x, m = k - k / 4, sa = 0, sb = 0, ra = m, rb = m;
    for (int v = 100; v >= 0; v--) {
        int cA = ca[v] + (v == 100 ? x : 0), tA = ra < cA ? ra : cA;
        sa += tA * v; ra -= tA;
        int cB = cb[v] + (v == 0 ? x : 0), tB = rb < cB ? rb : cB;
        sb += tB * v; rb -= tB;
    }
    return sa >= sb;
}

int main() {
    int T, n, i, v;
    if (scanf("%d", &T) != 1) return 0;
    while(T--) {
        scanf("%d", &n);
        for (i = 0; i <= 100; i++) ca[i] = cb[i] = 0;
        for(i=1;i<=n;i++) { scanf("%d", &v); ca[v]++; }
        for(i=1;i<=n;i++) { scanf("%d", &v); cb[v]++; }
        int l = 0, r = n, ans = n;
        while (l <= r) {
            int m = (l + r) / 2;
            if (check(m, n)) { ans = m; r = m - 1; } else l = m + 1;
        }
        printf("%d\n", ans);
    }
    return 0;
}
```
