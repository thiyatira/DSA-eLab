# Searching - Challenge 2

## 1. Problem Overview
The problem asks us to find the first occurrence (smallest index) of a target integer $x$ in an array where each adjacent element differs by exactly $\pm 1$. If the element is found, output its index; otherwise, output $-1$. Because of the step-size property, we can optimize the search by jumping indices based on the difference between the current value and $x$.

## 2. Algorithm & Approach
1. Start traversal from index $i = 0$.
2. At each step, compare `arr[i]` with $x$:
   - If `arr[i] == x`, return the current index $i$.
   - Since adjacent elements differ by at most $1$, the target $x$ must be at least $|arr[i] - x|$ positions away. Therefore, increment $i$ by `abs(arr[i] - x)`.
3. If $i \ge n$ without finding $x$, return $-1$.
4. Read input size $n$, the array into `arr[20]`, and the target $x$, then print the result of `search(arr, n, x)`.

## 3. Example Walkthrough
Given:
- Array: `[5, 4, 5, 6, 5, 4, 3, 2]`
- Target: `4`

1. Start at $i = 0$: `arr[0] = 5`.
   - `5 != 4`, step size = $|5 - 4| = 1$.
   - Move to $i = 0 + 1 = 1$.
2. At $i = 1$: `arr[1] = 4`.
   - `arr[1] == 4`, match found.
   - Return index `1`.

Output: `1`

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

int search(int arr[],int n,int x)
{
    int i = 0;
    while (i < n)
    {
        if (arr[i] == x)
            return i;
        i += abs(arr[i] - x);
    }
    return -1;
}

int main()
{
    int n, x;
    int arr[20];
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    scanf("%d", &x);
    printf("%d", search(arr, n, x));
    return 0;
}
```
