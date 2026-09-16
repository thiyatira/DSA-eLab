# Arrays - Challenge 22

## 1. Problem Overview
The problem asks for the minimum number of character modifications needed to make a given string $M$ of length $N$ have a happiness score equal to $L$. The happiness score is the count of pairs $(M[i], M[N - 1 - i])$ for $0 \le i < N/2$ where the characters at symmetric positions are not equal.

## 2. Algorithm & Approach
1. Compute the current happiness score $K$ of the string $S$ by iterating $i$ from $0$ to $N/2 - 1$ and counting how many pairs have $S[i] \neq S[N - 1 - i]$.
2. Changing a pair from equal to unequal (or vice versa) requires changing exactly $1$ character (1 operation).
3. Therefore, to adjust the happiness score from $K$ to $L$, the minimum operations required is simply the absolute difference $|K - L|$.

## 3. Example Walkthrough
For Input:
```
4 2
ABAA
```
1. $N = 4, L = 2, S = \text{"ABAA"}$.
2. Pair loop ($i$ from $0$ to $1$):
   - $i = 0$: $S[0] = \text{'A'}$, $S[3] = \text{'A'}$ (Equal)
   - $i = 1$: $S[1] = \text{'B'}$, $S[2] = \text{'A'}$ (Unequal $\rightarrow K = 1$)
3. Current happiness score $K = 1$, target score $L = 2$.
4. Operations required: $|K - L| = |1 - 2| = 1$.

Output: `1`

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

typedef char string[105];

int main() {
    int T, N, L, i, k;
    string S;
    scanf("%d", &T);
    while (T--) {
        scanf("%d %d %s", &N, &L, S);
        k = 0;
        for (i = 0; i < N/2; i++) {
            k += (S[i] != S[N - 1 - i]);
        }
        printf("%d\n", abs(k - L));
    }
    return 0;
}
```
