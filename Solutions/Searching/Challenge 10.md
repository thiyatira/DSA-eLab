# Searching - Challenge 10

An elegant and optimal solution in C to solve the "Reliance daily target" transaction problem.

## 1. Problem Overview
The problem asks us to find the earliest transaction index (1-indexed) at which the cumulative sum of transaction values reaches or exceeds a given target. We need to answer multiple such queries efficiently.

## 2. Algorithm & Approach
1. **Prefix Sums**: Since all transaction values are positive, the cumulative sum of transactions is strictly increasing. We can compute the prefix sums of the transactions in $O(T)$ time.
2. **Binary Search**: For each of the $Q$ queries, we can perform a binary search over the prefix sum array to find the first index `mid` where `prefix[mid] >= target` in $O(\log T)$ time.
3. **Helper Function**: We implement the mandatory function `int fun(int mid)` to check if the prefix sum at index `mid` is greater than or equal to the current target.

## 3. Example Walkthrough
### Input:
```
5
1 2 1 3 4
3
3
4
7
```

### Step-by-Step Execution:
1. **Prefix Sum Array Construction**:
   - `prefix[0] = 0`
   - `prefix[1] = 1`
   - `prefix[2] = 1 + 2 = 3`
   - `prefix[3] = 3 + 1 = 4`
   - `prefix[4] = 4 + 3 = 7`
   - `prefix[5] = 7 + 4 = 11`

2. **Query 1 (Target = 3)**:
   - Binary search range: `[1, 5]`
   - `mid = 3`: `prefix[3] = 4 >= 3` (True) $\rightarrow$ `ans = 3`, search left `[1, 2]`
   - `mid = 1`: `prefix[1] = 1 >= 3` (False) $\rightarrow$ search right `[2, 2]`
   - `mid = 2`: `prefix[2] = 3 >= 3` (True) $\rightarrow$ `ans = 2`, search left `[2, 1]` (Terminates)
   - **Output**: `2`

3. **Query 2 (Target = 4)**:
   - Binary search range: `[1, 5]`
   - `mid = 3`: `prefix[3] = 4 >= 4` (True) $\rightarrow$ `ans = 3`, search left `[1, 2]`
   - `mid = 1`: `prefix[1] = 1 >= 4` (False) $\rightarrow$ search right `[2, 2]`
   - `mid = 2`: `prefix[2] = 3 >= 4` (False) $\rightarrow$ search right `[3, 2]` (Terminates)
   - **Output**: `3`

4. **Query 3 (Target = 7)**:
   - Binary search range: `[1, 5]`
   - `mid = 3`: `prefix[3] = 4 >= 7` (False) $\rightarrow$ search right `[4, 5]`
   - `mid = 4`: `prefix[4] = 7 >= 7` (True) $\rightarrow$ `ans = 4`, search left `[4, 3]` (Terminates)
   - **Output**: `4`

## 4. C Solution
```c
#include <stdio.h>

long long prefix[100005];
long long target;

int fun(int mid)
{
    return prefix[mid] >= target;
}

int main()
{
    int T, Q;
    if (scanf("%d", &T) == 1)
    {
        for (int i = 1; i <= T; i++)
        {
            long long val;
            scanf("%lld", &val);
            prefix[i] = prefix[i - 1] + val;
        }
        if (scanf("%d", &Q) == 1)
        {
            while (Q--)
            {
                scanf("%lld", &target);
                int low = 1, high = T, ans = -1;
                while (low <= high)
                {
                    int mid = low + (high - low) / 2;
                    if (fun(mid))
                    {
                        ans = mid;
                        high = mid - 1;
                    }
                    else
                    {
                        low = mid + 1;
                    }
                }
                printf("%d\n", ans);
            }
        }
    }
    return 0;
}
```
