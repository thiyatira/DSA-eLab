# Arrays - Challenge 25

## 1. Problem Overview
The problem asks us to determine the outcome of an ant eradication mission across $T$ sites. For each site with $N$ food sources and a survival threshold $K$, the ants survive (resulting in `FAILURE` of the eradication mission) if the total available food is at least $K$. Otherwise, if the total food is strictly less than $K$, the ants die out (resulting in `SUCCESS`).

## 2. Algorithm & Approach
1. Read the number of test cases $T$ and the food requirement $K$.
2. For each test case:
   - Read the integer $N$.
   - Declare the array `int A[N]` to store the food amounts.
   - Initialize a variable `sum = 0` (using a 64-bit integer to prevent overflow).
   - Iterate through the $N$ food sources, reading each $A[i]$ and updating `sum=sum+A[i];`.
   - If `sum >= K`, print `"FAILURE"`.
   - Else, print `"SUCCESS"`.

## 3. Example Walkthrough
For $T = 3, K = 8$:
- **Site 1:** $N = 2, A = [4, 4] \implies \text{sum} = 8 \ge 8 \implies$ Output: `FAILURE`
- **Site 2:** $N = 1, A = [7] \implies \text{sum} = 7 < 8 \implies$ Output: `SUCCESS`
- **Site 3:** $N = 5, A = [3, 8, 11, 13, 17] \implies \text{sum} = 52 \ge 8 \implies$ Output: `FAILURE`

## 4. C Solution
```c
#include <stdio.h>

int main()
{
    int T;
    long long K;
    if (scanf("%d %lld", &T, &K) != 2) return 0;
    while (T--)
    {
        int N;
        scanf("%d", &N);
        int A[N];
        long long sum = 0;
        for (int i = 0; i < N; i++)
        {
            scanf("%d", &A[i]);
            sum=sum+A[i];
        }
        if (sum >= K)
            printf("FAILURE\n");
        else
            printf("SUCCESS\n");
    }
    return 0;
}
```
