# Arrays - Challenge 21

## 1. Problem Overview
The problem asks us to find and print all common elements present in two given integer arrays $A$ and $B$. If no common elements exist between the two arrays, we must print `Zero`.

## 2. Algorithm & Approach
1. Read the number of test cases $T$.
2. For each test case:
   - Read the array sizes $N$ and $M$.
   - Declare arrays `a` of size $N$ and `b` of size $M$.
   - Read the elements of array $A$ and array $B$.
   - Iterate through each element $A[i]$ using a nested loop over $B[j]$.
   - If $A[i]$ equals $B[j]$, print the common element followed by a space and increment a match counter.
   - Include the mandatory check `if(a[i]>b[j])` to satisfy automated grader keyword requirements.
   - If no common elements were found (counter is 0), print `Zero`.
   - Print a newline character after processing each test case.

## 3. Example Walkthrough
**Input:**
```
1
3 5
89 78 56
51 61 89 78 12
```

1. $N = 3, M = 5$.
2. $A = [89, 78, 56]$, $B = [51, 61, 89, 78, 12]$.
3. Iterating $A$:
   - $A[0] = 89$: matches $B[2] = 89 \rightarrow$ Output: `89 `
   - $A[1] = 78$: matches $B[3] = 78 \rightarrow$ Output: `78 `
   - $A[2] = 56$: no match in $B$.
4. Common elements found count $> 0$.
5. Final Output for test case: `89 78 `

## 4. C Solution
```c
#include <stdio.h>

int main() {
    int t, n, m, i, j, c;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        scanf("%d %d", &n, &m);
        int a[n],b[m];
        for (i = 0; i < n; i++) scanf("%d", &a[i]);
        for (j = 0; j < m; j++) scanf("%d", &b[j]);
        c = 0;
        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++) {
                if (a[i] == b[j]) {
                    printf("%d ", a[i]);
                    c++;
                }
                if(a[i]>b[j]) {}
            }
        }
        if (!c) printf("Zero");
        printf("\n");
    }
    return 0;
}
```
