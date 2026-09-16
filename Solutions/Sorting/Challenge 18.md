# Sorting - Challenge 18

## 1. Problem Overview
The problem asks us to rearrange $n$ uniquely priced ice spheres to maximize the count of "cheap" elements—elements strictly smaller than both their immediate neighbors. We need to print the maximum possible number of cheap elements, which is $\lfloor (n-1)/2 \rfloor$, along with the rearranged sequence.

## 2. Algorithm & Approach
1. Read $n$ and the array of prices.
2. Sort the array in ascending order.
3. The maximum number of cheap elements achievable is $(n-1)/2$.
4. To maximize cheap elements, interleave the largest remaining elements with the smallest remaining elements. 
5. Using two pointers (`i` starting at $0$ moving forward and `j` starting at $n-1$ moving backward), print the larger element $a[j]$ followed by the smaller element $a[i]$ until the pointers meet.

## 3. Example Walkthrough
For $n = 5$ and array $[1, 2, 3, 4, 5]$:
- Maximum cheap count = $(5 - 1) / 2 = 2$.
- Two pointers:
  - $i=0, j=4$: print $a[4]=5$, $a[0]=1$
  - $i=1, j=3$: print $a[3]=4$, $a[1]=2$
  - $i=2, j=2$: ($i == j$), print $a[2]=3$
- Resulting order: `5 1 4 2 3`, with cheap elements at index 1 (`1`) and index 3 (`2`).

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int main() {
    int n, i, j;
    if (scanf("%d", &n) != 1) return 0;
    int a[n+1];
    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
    qsort(a, n, sizeof(int), cmp);
    printf("%d\n", (n - 1) / 2);
    for(i=0,j=n-1;i<=j;i++,j--) {
        if (i == j) {
            printf("%d ", a[j]);
        } else {
            printf("%d %d ", a[j], a[i]);
        }
    }
    printf("\n");
    return 0;
}
```
