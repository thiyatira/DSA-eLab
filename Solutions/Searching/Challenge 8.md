# Searching - Challenge 8

An explanation of the method and the complete C solution are provided below.

## 1. Problem Overview
The problem asks us to select one element from each of three given sorted arrays such that the difference between the maximum and minimum of the three chosen elements is minimized (i.e., they are as close to each other as possible). The output should be the three chosen elements, printed in order of the first, second, and third arrays.

## 2. Algorithm & Approach
1. Use a three-pointer technique: initialize pointers `i = 0`, `j = 0`, `k = 0` for arrays $A$, $B$, and $C$ of sizes $p$, $q$, and $r$ respectively.
2. Maintain `diff` initialized to a large value, and variables to track the best elements found.
3. While all three pointers are within array bounds (`i < p && j < q && k < r`):
   - Find the minimum and maximum among $A[i]$, $B[j]$, and $C[k]$.
   - If `max_val - min_val < diff`, update `diff` and record the current elements.
   - Increment the pointer corresponding to `min_val` to potentially find a closer element (if $A[i] == min\_val$, increment $i$; else if $B[j] == min\_val$, increment $j$; else increment $k$).
4. Print the three stored elements separated by spaces.

## 3. Example Walkthrough
For Test Case 1:
- $A = [1, 4, 10], B = [2, 15, 20], C = [10, 12]$
- Start at `(1, 2, 10)`: min = 1, max = 10, diff = 9. Increment $i$.
- `(4, 2, 10)`: min = 2, max = 10, diff = 8. Increment $j$.
- `(4, 15, 10)`: min = 4, max = 15, diff = 11. Increment $i$.
- `(10, 15, 10)`: min = 10, max = 15, diff = 5. Best diff updated to 5, elements: `10 15 10`. Since $A[i] = 10$ is the minimum, $i$ increments to 3.
- Loop terminates. Output: `10 15 10`.

## 4. C Solution
```c
#include <stdio.h>

void findClosest(int A[],int B[],int C[],int p,int q,int r)
{
    int diff = 1000000000;
    int res_a = 0, res_b = 0, res_c = 0;
    int i = 0, j = 0, k = 0;

    while (i < p && j < q && k < r) {
        int min_val = A[i] < B[j] ? (A[i] < C[k] ? A[i] : C[k]) : (B[j] < C[k] ? B[j] : C[k]);
        int max_val = A[i] > B[j] ? (A[i] > C[k] ? A[i] : C[k]) : (B[j] > C[k] ? B[j] : C[k]);

        if (max_val - min_val < diff) {
            diff = max_val - min_val;
            res_a = A[i];
            res_b = B[j];
            res_c = C[k];
        }

        if (A[i] == min_val) i++;
        else if (B[j] == min_val) j++;
        else k++;
    }

    printf("%d %d %d\n", res_a, res_b, res_c);
}

int main()
{
    int p, q, r;
    int A[100], B[100], C[100];

    scanf("%d", &p);
    for (int i = 0; i < p; i++) scanf("%d", &A[i]);

    scanf("%d", &q);
    for (int i = 0; i < q; i++) scanf("%d", &B[i]);

    scanf("%d", &r);
    for (int i = 0; i < r; i++) scanf("%d", &C[i]);

    findClosest(A, B, C, p, q, r);

    return 0;
}
```
