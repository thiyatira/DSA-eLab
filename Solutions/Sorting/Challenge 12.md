# Sorting - Challenge 12

## 1. Problem Overview
The problem asks whether we can sort an array of $m$ integers in non-decreasing order using adjacent element swaps, such that all elements end up facing their initial "Right" direction. Each swap flips the directions of both swapped elements.

## 2. Algorithm & Approach
1. **Key Invariant**: Swapping two adjacent elements changes their 0-based position parity (even $\leftrightarrow$ odd) and flips their facing direction. Since all elements initially face "Right" at their starting indices, an element will face "Right" at its sorted position **if and only if** its sorted index has the **same parity** (even/odd) as its original index.
2. **Frequency Count**: 
   - Maintain a frequency table `c[x][parity]` tracking how many times value `x` appears at an `even` (parity 0) or `odd` (parity 1) index in the original array.
3. **Validation**:
   - Sort the array into non-decreasing order.
   - Iterate through the sorted array. For each index $j$, check if the sorted value $a[j]$ has an available count at index parity $j \pmod 2$.
   - Decrement the count if available. If any required count is missing, output `No`; otherwise, output `Yes`.

## 3. Example Walkthrough
Consider $m = 5$ and array `[1, 2, 3, 5, 4]`:
1. **Original Indices & Parities**:
   - Index 0 (even): `1`
   - Index 1 (odd): `2`
   - Index 2 (even): `3`
   - Index 3 (odd): `5`
   - Index 4 (even): `4`
2. **Sorted Array**: `[1, 2, 3, 4, 5]`
3. **Checking Parity Alignment**:
   - $j = 0$ (even): Needs `1` at even index $\rightarrow$ Available (`Yes`)
   - $j = 1$ (odd): Needs `2` at odd index $\rightarrow$ Available (`Yes`)
   - $j = 2$ (even): Needs `3` at even index $\rightarrow$ Available (`Yes`)
   - $j = 3$ (odd): Needs `4` at odd index $\rightarrow$ Originally at index 4 (even), count is 0 $\rightarrow$ **Mismatch!**
4. Output: `No`.

## 4. C Solution

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int a[100005], c[100005][2];
int cmp(const void *p, const void *q) { return *(int*)p - *(int*)q; }

int main() {
    int t, m, j, ok;
    scanf("%d", &t);
    while (t--) {
        scanf("%d", &m);
        memset(c, 0, sizeof(c));
        for(j=0;j<m;j++) {
            scanf("%d", &a[j]);
            c[a[j]][j % 2]++;
        }
        qsort(a, m, sizeof(int), cmp);
        for (ok = 1, j = 0; j < m; j++) ok &= (c[a[j]][j % 2]-- > 0);
        puts(ok ? "Yes" : "No");
    }
    return 0;
}
```
