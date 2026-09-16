# Linked List - Challenge 36

## 1. Problem Overview
The problem asks us to find the maximum distance from any village (indexed from $0$ to $q-1$) to its nearest hotel. Given $q$ total villages and $p$ hotel indices, we need to calculate the minimum distance from each village to any hotel and output the maximum of these minimum distances.

## 2. Algorithm & Approach
1. **Sort Hotel Indices**: Sort the array of hotel positions in ascending order using `qsort`.
2. **Boundary Distances**:
   - For villages before the first hotel: distance is $H[0]$ if $H[0] > 0$, else $0$.
   - For villages after the last hotel: distance is $(q - 1) - H[p-1]$ if $H[p-1] < q - 1$, else $0$.
3. **Internal Distances**: For any two adjacent hotels $H[i]$ and $H[i+1]$, the maximum distance to the nearest hotel for any village between them is $\lfloor (H[i+1] - H[i]) / 2 \rfloor$.
4. **Max Distance**: Track the maximum value across boundary distances and all internal gap distances.

## 3. Example Walkthrough
For **Test Case 2**: `q = 5, p = 3`, hotels at `1 0 6`

1. **Sort Hotels**: `[0, 1, 6]`
2. **Boundary Checks**:
   - First hotel at index 0: boundary distance = 0.
   - Last hotel at index 6 ($\ge q-1$): boundary distance = 0.
3. **Internal Gaps**:
   - Between `0` and `1`: $(1 - 0) / 2 = 0$.
   - Between `1` and `6`: $(6 - 1) / 2 = 2$.
4. **Max Distance**: $\max(0, 0, 0, 2) = 2$.

**Output**: `2`

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int solve(int *h, int q, int p) {
    int max = (h[0] > 0) * h[0];
    int end = (q - 1 > h[p - 1]) * (q - 1 - h[p - 1]);
    if (end > max) max = end;
    for (int i = 0; i < p - 1; i++) {
        int d = (h[i + 1] - h[i]) / 2;
        if (d > max) max = d;
    }
    return max;
}

int main() {
    int q, p;
    if (scanf("%d %d", &q, &p) != 2) return 0;
    int *h = (int *)malloc(p * sizeof(int));
    for (int i = 0; i < p; i++) scanf("%d", &h[i]);
    qsort(h, p, sizeof(int), cmp);
    printf("%d\n", solve(h, q, p));
    free(h);
    return 0;
}
```
