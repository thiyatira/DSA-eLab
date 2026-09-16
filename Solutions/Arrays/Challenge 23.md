# Arrays - Challenge 23

## 1. Problem Overview
The problem asks us to find a valid path (called a "Pyramid run") starting at position $(1, 1)$ in Pascal's Triangle such that the sum of the numbers at all visited positions equals $S$. The path length $R$ must not exceed 500 steps, and no position may be revisited.

## 2. Algorithm & Approach
1. For $S \le 500$, we can simply walk along the right boundary $(1, 1), (2, 2), \dots, (S, S)$. Since every element on the outer diagonal of Pascal's triangle equals $1$, visiting $S$ elements along this diagonal yields a sum of $S$ using exactly $S \le 500$ steps.
2. For $S > 500$, we use a bitwise strategy: set $N = S - 30$. We inspect the binary representation of $N$. For each bit position `row` from $0$ to $29$:
   - If the `row`-th bit is set, we cross the entire row (which sums to $2^{\text{row}}$) using `for(j=row;j>=0;j--)` if moving right-to-left, or left-to-right otherwise.
   - If the bit is not set, we step along the current boundary (value $1$).
3. Afterwards, we walk along the boundary for a few extra steps to collect the remaining value needed to reach $S$.

## 3. Example Walkthrough
For $S = 4$ (Test Case 1, Process #2):
1. $S \le 500$, so we output $S = 4$ positions along the right diagonal.
2. Step 1: `1 1` (value 1, cumulative sum = 1)
3. Step 2: `2 2` (value 1, cumulative sum = 2)
4. Step 3: `3 3` (value 1, cumulative sum = 3)
5. Step 4: `4 4` (value 1, cumulative sum = 4)
Total sum = 4, Total steps = 4 $\le 500$.

## 4. C Solution

```c
#include <stdio.h>

int main() {
    int T, p, S, i, j, row, side, k, set_bits;
    if (scanf("%d", &T) != 1) return 0;
    
    for (p = 1; p <= T; p++) {
        scanf("%d", &S);
        printf("Process #%d:\n", p);
        
        if (S <= 500) {
            for (i = 1; i <= S; i++) {
                printf("%d %d\n", i, i);
            }
        } else {
            int N = S - 30;
            set_bits = 0;
            side = 1;
            
            for (row = 0; row < 30; row++) {
                if ((N >> row) & 1) {
                    set_bits++;
                    if (side == 0) {
                        for (j = 0; j <= row; j++) {
                            printf("%d %d\n", row + 1, j + 1);
                        }
                        side = 1;
                    } else {
                        for(j=row;j>=0;j--) {
                            printf("%d %d\n", row + 1, j + 1);
                        }
                        side = 0;
                    }
                } else {
                    if (side == 0) {
                        printf("%d 1\n", row + 1);
                    } else {
                        printf("%d %d\n", row + 1, row + 1);
                    }
                }
            }
            
            for (k = 0; k < set_bits; k++) {
                row = 30 + k;
                if (side == 0) {
                    printf("%d 1\n", row + 1);
                } else {
                    printf("%d %d\n", row + 1, row + 1);
                }
            }
        }
    }
    return 0;
}
```
