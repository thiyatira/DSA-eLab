# Arrays - Challenge 27

## 1. Problem Overview
The problem asks us to determine whether a given sequence of $M$ integers ($B$) is a subsequence of another sequence of $N$ integers ($A$). A subsequence is formed by deleting zero or more elements from $A$ without changing the relative order of the remaining elements. We need to print "Yes" if $B$ is a subsequence of $A$, and "No" otherwise.

## 2. Algorithm & Approach
1. Read the number of test cases $T$.
2. For each test case:
   - Read $N$ and the elements of sequence $A$ into array `no`.
   - Read $M$ and the elements of sequence $B$ into array `fs`.
   - Use a two-pointer technique to check if sequence $B$ is a subsequence of $A$:
     - Initialize two index pointers $i = 0$ (for sequence $A$) and $j = 0$ (for sequence $B$).
     - Iterate $i$ from $0$ to $N - 1$. Whenever `no[i]` matches `fs[j]`, increment $j$.
     - Stop early if $j$ reaches $M$.
   - If $j == M$, output "Yes"; otherwise, output "No".

## 3. Example Walkthrough
Given $N = 8, A = [1, 4, 3, 2, 5, 6, 9, 4]$ and $M = 3, B = [1, 7, 8]$:
- Step 1: $i = 0 \implies A[0] = 1, B[0] = 1$. Match found! Advance $j$ to $1$.
- Step 2: Search for $B[1] = 7$ in remaining elements $[4, 3, 2, 5, 6, 9, 4]$. No match found before reaching end of $A$.
- End: $j = 1 \neq M (3)$. Output: `No`.

## 4. C Solution
```c
#include <stdio.h>

int main()
{
    int t, n, m, i, j;
    int no[100],fs[100];
    
    if (scanf("%d", &t) == 1) {
        while (t--) {
            scanf("%d", &n);
            for (i = 0; i < n; i++) {
                scanf("%d", &no[i]);
            }
            scanf("%d", &m);
            for (i = 0; i < m; i++) {
                scanf("%d", &fs[i]);
            }
            
            i = 0;
            j = 0;
            while (i < n && j < m) {
                if (no[i] == fs[j]) {
                    j++;
                }
                i++;
            }
            
            if (j == m) {
                printf("Yes\n");
            } else {
                printf("No\n");
            }
        }
    }
    return 0;
}
```
