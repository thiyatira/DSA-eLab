# Arrays - Challenge 24

An optimal and concise C solution using **Kadane's Algorithm** to find the maximum sum of a contiguous sub-array.

---

## 1. Problem Overview
The problem requires finding the maximum sum possible from any contiguous sub-array of a given array of integers. If the array contains negative numbers, the algorithm must handle them properly to find the largest sum (or the least negative value if all elements are negative).

---

## 2. Algorithm & Approach
1. **Kadane’s Algorithm ($O(n)$ time, $O(1)$ space)**:
   - Maintain two variables:
     - `curr_max`: tracks the maximum sub-array sum ending at the current index.
     - `max_so_far`: tracks the overall maximum sub-array sum found so far, initialized to `arr[0]`.
2. Iterate through the array using `for(int i=0;i<n;i++)`:
   - Add the current element `arr[i]` to `curr_max`.
   - If `curr_max > max_so_far`, update `max_so_far = curr_max`.
   - If `curr_max < 0`, reset `curr_max = 0` since a negative running sum cannot contribute to a maximal sub-array.
3. Return `max_so_far`.

---

## 3. Example Walkthrough
**Input:**
```
7
-1 1 4 1 1 2 -3
```

- Initialize: `max_so_far = -1`, `curr_max = 0`
- `i = 0`, `arr[0] = -1`: `curr_max = -1`, `max_so_far = -1`, `curr_max < 0` $\rightarrow$ `curr_max = 0`
- `i = 1`, `arr[1] = 1`: `curr_max = 1`, `max_so_far = 1`
- `i = 2`, `arr[2] = 4`: `curr_max = 5`, `max_so_far = 5`
- `i = 3`, `arr[3] = 1`: `curr_max = 6`, `max_so_far = 6`
- `i = 4`, `arr[4] = 1`: `curr_max = 7`, `max_so_far = 7`
- `i = 5`, `arr[5] = 2`: `curr_max = 9`, `max_so_far = 9`
- `i = 6`, `arr[6] = -3`: `curr_max = 6`, `max_so_far = 9`

**Output:** `9`

---

## 4. C Solution

```c
#include <stdio.h>

int kadane(int arr[],int n)
{
    int max_so_far = arr[0], curr_max = 0;
    for(int i=0;i<n;i++)
    {
        curr_max += arr[i];
        if(curr_max > max_so_far)
            max_so_far = curr_max;
        if(curr_max < 0)
            curr_max = 0;
    }
    return max_so_far;
}

int main()
{
    int n;
    scanf("%d", &n);
    int arr[n];
    for(int i=0;i<n;i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("%d", kadane(arr, n));
    return 0;
}
```
