# Sorting - Challenge 14

An elegant and efficient C solution to solve the "Basketball Coach" problem.

## 1. Problem Overview
The problem asks us to select exactly $R$ students out of $M$ available students and make their skill ratings equal with the minimum total coaching hours. Each hour of coaching increases a student's skill rating by 1.

## 2. Algorithm & Approach
1. **Sort the Skills**: Sort the skill ratings of the $M$ students in non-decreasing order.
2. **Sliding Window**: Any contiguous subarray of size $R$ represents a potential team. To make all $R$ students in a sorted subarray from index $i$ to $i+R-1$ have the same skill rating, we must raise everyone's skill to match the maximum skill in that group, which is $N[i+R-1]$.
3. **Cost Calculation**: The cost to equalize the subarray is:
   $$\text{Cost} = R \times N[i+R-1] - \sum_{j=i}^{i+R-1} N[j]$$
4. **Optimization**: Use a sliding window to maintain the sum of the current $R$ elements in $O(1)$ time as we slide the window from left to right. This allows us to find the minimum cost in $O(M \log M)$ time overall due to sorting.

## 3. Example Walkthrough
For Input:
```
4 3
3 1 9 100
```
- **Step 1**: Sort the array: `[1, 3, 9, 100]`
- **Step 2**: Initialize the first window of size $R = 3$: `[1, 3, 9]`
  - Sum = $1 + 3 + 9 = 13$
  - Cost = $3 \times 9 - 13 = 27 - 13 = 14$
  - `min_cost` = $14$
- **Step 3**: Slide the window to the next position: `[3, 9, 100]`
  - New Sum = $13 - 1 + 100 = 112$
  - Cost = $3 \times 100 - 112 = 300 - 112 = 188$
  - `min_cost` remains $14$
- **Output**: `14`

## 4. C Solution

```c
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int tc, tt;
    if (scanf("%d", &tc) != 1) return 0;
    for(tt = 1; tt <= tc; ++tt) {
        int m, r;
        if (scanf("%d %d", &m, &r) != 2) break;
        int n[1005];
        for (int i = 0; i < m; ++i) {
            scanf("%d", &n[i]);
        }
        qsort(n, m, sizeof(int), compare);
        int sum = 0;
        for (int i = 0; i < r; ++i) {
            sum += n[i];
        }
        int min_cost = r * n[r - 1] - sum;
        for (int i = 1; i <= m - r; ++i) {
            sum = sum - n[i - 1] + n[i + r - 1];
            int cost = r * n[i + r - 1] - sum;
            if (cost < min_cost) {
                min_cost = cost;
            }
        }
        printf("%d\n", min_cost);
    }
    return 0;
}
```
