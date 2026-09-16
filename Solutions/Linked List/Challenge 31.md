# Linked List - Challenge 31

## 1. Problem Overview
The problem asks us to place $G$ goats into $S$ given shop locations along a straight line such that the minimum distance between any two goats is maximized. This is a classic "Aggressive Cows" problem solvable using Binary Search on Answer.

## 2. Algorithm & Approach
1. **Input & Sorting**: Read the $S$ shop locations for each test case and sort them in ascending order.
2. **Binary Search Range**: Set the search space for the answer from `low = 1` to `high = max_position - min_position`.
3. **Feasibility Check**:
   - For a candidate minimum distance `mid`, greedily place the first goat at the first shop location.
   - Iterate through the remaining shop locations and place the next goat at the first available location that is at least `mid` distance away from the previously placed goat.
   - Count how many goats can be placed.
4. **Binary Search Decision**:
   - If at least $G$ goats can be placed, update the answer to `mid` and try a larger distance (`low = mid + 1`).
   - Otherwise, try a smaller distance (`high = mid - 1`).

## 3. Example Walkthrough
For Sample 1: $S = 6, G = 3$, positions = `[1, 2, 7, 4, 8, 9]`
1. **Sorted Positions**: `[1, 2, 4, 7, 8, 9]`
2. **Initial Range**: `low = 1`, `high = 8`
3. **Checking `mid = 4`**:
   - Goat 1 at position `1`
   - Goat 2 at position `7` (since $7 - 1 \ge 4$)
   - Total placed = 2 (less than $G = 3$). Search range becomes `[1, 3]`.
4. **Checking `mid = 2`**:
   - Placed at `1`, `4`, `7`, `9` (Total = 4 $\ge 3$). Valid! Search range becomes `[3, 3]`.
5. **Checking `mid = 3`**:
   - Placed at `1`, `4`, `7` (Total = 3 $\ge 3$). Valid! Save `ans = 3`, search range becomes `[4, 3]` (terminates).
6. **Output**: `3`

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int main() {
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        int s, g;
        scanf("%d %d", &s, &g);
        int y[100000];
        for (int i = 0; i < s; i++) {
            scanf("%d", &y[i]);
        }
        qsort(y, s, sizeof(int), compare);

        int low = 1, high = y[s - 1] - y[0], ans = 0;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            int count = 1, last = y[0];
            for (int i = 1; i < s; i++) {
                if (y[i] - last >= mid) {
                    count++;
                    last = y[i];
                }
            }
            if (count >= g) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        printf("%d\n", ans);
    }
    return 0;
}
```
