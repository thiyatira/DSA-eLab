# Searching - Challenge 3

An explanation and the complete C solution for the problem are provided below.

## 1. Problem Overview
Given two sets of positive integers $A$ and $C$, the goal is to find the unique set $B$ of maximum size (with elements $\le 100$) such that the sum set $S(A, B) = \{a + b \mid a \in A, b \in B\}$ equals $C$. The elements of $B$ must be printed in increasing order.

## 2. Algorithm & Approach
1. If an integer $b \in B$, then for every element $a \in A$, the sum $a + b$ must belong to set $C$.
2. To find the maximal set $B$, we test each candidate integer $b$ from $1$ to $100$:
   - For a given candidate $b$, verify whether $a + b \in C$ for all $a \in A$.
   - A boolean lookup array `hasC` of size $205$ allows $O(1)$ membership checks for each sum $a + b$.
3. Any candidate $b$ satisfying $a + b \in C$ for all $a \in A$ is valid and added to set $B$.
4. Print all valid values of $b$ separated by a single space.

## 3. Example Walkthrough
**Sample Input:**
$A = \{5, 3\}$
$C = \{6, 8, 10\}$

- For $b = 1$: $3+1 = 4 \notin C$ (Invalid).
- For $b = 2$: $5+2 = 7 \notin C$ (Invalid).
- For $b = 3$: $3+3 = 6 \in C$ and $5+3 = 8 \in C$ (Valid $\implies b=3$).
- For $b = 4$: $3+4 = 7 \notin C$ (Invalid).
- For $b = 5$: $3+5 = 8 \in C$ and $5+5 = 10 \in C$ (Valid $\implies b=5$).
- For $b \ge 6$: $5+b \ge 11 \notin C$ (Invalid).

Result: `3 5`

## 4. C Solution
```c
#include <stdio.h>

int main()
{
    int N, M, val;
    int A[105];
    int hasC[205] = {0};

    scanf("%d", &N);
    for(int i=0;i<N;i++)
        scanf("%d", &A[i]);

    scanf("%d", &M);
    for (int i = 0; i < M; i++) {
        scanf("%d", &val);
        hasC[val] = 1;
    }

    int first = 1;
    for (int b = 1; b <= 100; b++) {
        int ok = 1;
        for (int i = 0; i < N; i++)
            ok &= hasC[A[i] + b];

        if (ok) {
            if (!first) printf(" ");
            printf("%d", b);
            first = 0;
        }
    }
    return 0;
}
```
