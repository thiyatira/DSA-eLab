# Sorting - Challenge 17

## 1. Problem Overview
The problem asks for the minimum energy required to plant $m$ tomatoes at specified 2D coordinates $(a_j, b_j)$. Mark walks on an infinite grid starting from $(0,0)$, moving only right or up (non-decreasing coordinates). At any point $(A, B)$ on his path, planting a tomato at $(a_j, b_j)$ costs $\max(|A - a_j|, |B - b_j|)$ energy. We need to find a single path starting at $(0,0)$ that minimizes the maximum energy offset needed to cover all tomatoes.

## 2. Algorithm & Approach
1. Transform each tomato coordinate $(x, y)$ into a pair $(x+y, x)$, representing the step index $T = x+y$ along Mark's path and its $x$-coordinate.
2. Sort all tomato pairs primarily by $x+y$ (time) and secondarily by $x$.
3. As Mark moves forward along his path, his $x$ and $y$ coordinates can never decrease.
4. Iterate through the sorted tomatoes while maintaining the maximum $x$ and $y$ coordinates encountered so far (`max_x` and `max_y`).
5. For each tomato $(x, y)$, if its $x$ or $y$ coordinate is smaller than the maximum seen so far, Mark must incur an energy cost equal to `max_x - x` or `max_y - y`.
6. The answer is the maximum overall deficiency encountered across all tomatoes.

## 3. Example Walkthrough
### Test Case 2
**Input:**
```
3
5 5
7 7
4 9
```

1. **Transformation into pairs $(x+y, x)$:**
   - $(5, 5) \rightarrow (10, 5)$, where $y = 10 - 5 = 5$
   - $(7, 7) \rightarrow (14, 7)$, where $y = 14 - 7 = 7$
   - $(4, 9) \rightarrow (13, 4)$, where $y = 13 - 4 = 9$

2. **Sorting by $x+y$:**
   1. $(10, 5) \rightarrow x=5, y=5$
   2. $(13, 4) \rightarrow x=4, y=9$
   3. $(14, 7) \rightarrow x=7, y=7$

3. **Processing:**
   - **Tomato 1 $(5, 5)$:** `max_x = 5`, `max_y = 5`, `ans = 0`
   - **Tomato 2 $(4, 9)$:** $x=4 < \text{max\_x}(5) \implies \text{cost} = 5 - 4 = 1$. `ans = max(0, 1) = 1`. Update `max_y = 9`.
   - **Tomato 3 $(7, 7)$:** $y=7 < \text{max\_y}(9) \implies \text{cost} = 9 - 7 = 2$. `ans = max(1, 2) = 2`. Update `max_x = 7`.

4. **Output:** `2`

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    long long first, second;
} Pair;

#define mp(u, v) (Pair){(u), (v)}

Pair a[700005];

int cmp(const void *p1, const void *p2) {
    const Pair *a = (const Pair *)p1, *b = (const Pair *)p2;
    if (a->first != b->first) return a->first > b->first ? 1 : -1;
    return a->second > b->second ? 1 : (a->second < b->second ? -1 : 0);
}

int main() {
    int m;
    if (scanf("%d", &m) != 1) return 0;
    int x,y;
    for (int i = 0; i < m; i++) {
        scanf("%d%d", &x, &y);
        a[i]=mp(x+y,x);
    }
    qsort(a, m, sizeof(Pair), cmp);
    long long max_x = 0, max_y = 0, ans = 0;
    for (int i = 0; i < m; i++) {
        long long cx = a[i].second, cy = a[i].first - a[i].second;
        if (max_x - cx > ans) ans = max_x - cx;
        if (max_y - cy > ans) ans = max_y - cy;
        if (cx > max_x) max_x = cx;
        if (cy > max_y) max_y = cy;
    }
    printf("%lld\n", ans);
    return 0;
}
```
