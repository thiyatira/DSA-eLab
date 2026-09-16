# Sorting - Challenge 19

An elegant and optimal solution in C to solve the "Wealthy People" redistribution problem.

## 1. Problem Overview
The problem asks us to find the maximum number of people we can make wealthy (having at least $x$ savings) by choosing any subset of people, pooling their savings, and redistributing them equally. 

## 2. Algorithm & Approach
1. **Greedy Strategy**: To maximize the number of wealthy people, we should always prioritize pooling the savings of the wealthiest individuals first.
2. **Sorting**: Sort the savings array in ascending order.
3. **Iterative Pooling**: Iterate from the largest savings (at the end of the sorted array) to the smallest.
4. **Feasibility Check**: At each step, add the current person's savings to a running sum. If the average savings of the chosen subset is at least $x$ (i.e., `sum >= count * x`), we can make all of them wealthy. If the average drops below $x$, we stop immediately because adding even smaller savings will never bring the average back up to $x$.

## 3. Example Walkthrough
For Input:
```
3 7
9 4 9
```
- **Step 1**: Sort the savings: `[4, 9, 9]`.
- **Step 2**: Start from the end of the array:
  - $i = 2$ (value $9$): `sum = 9`, `count = 1`. Since $9 \ge 1 \times 7$, we can make $1$ person wealthy.
  - $i = 1$ (value $9$): `sum = 18`, `count = 2`. Since $18 \ge 2 \times 7$, we can make $2$ people wealthy.
  - $i = 0$ (value $4$): `sum = 22`, `count = 3`. Since $22 \ge 3 \times 7$, we can make $3$ people wealthy.
- **Output**: `3`

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>
int a[100005];
int cmp(const void *p, const void *q) { return *(int*)p - *(int*)q; }
int main() {
    int t, n, i, ans;
    long long x, sum;
    scanf("%d", &t);
    while (t--) {
        scanf("%d %lld", &n, &x);
        for(i=0;i<n;i++) scanf("%d", &a[i]);
        qsort(a, n, sizeof(int), cmp);
        sum = ans = 0;
        for(i=n-1;i>=0;i--) {
            sum += a[i];
            if (sum >= (n - i) * x) ans = n - i;
            else break;
        }
        printf("%d\n", ans);
    }
    return 0;
}
```
