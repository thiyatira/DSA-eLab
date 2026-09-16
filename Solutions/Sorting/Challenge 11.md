# Sorting - Challenge 11

An explanation of the problem and the efficient C solution are provided below.

## 1. Problem Overview
The problem asks for the maximum total power Heath Ledger can obtain by choosing a sequence of fruits to eat. Each fruit $j$ takes $N_j$ seconds to eat, starts with $F_j$ power, and degrades by $G_j$ power per second (never dropping below 0). When a fruit is started at time $t$, its power is immediately collected as $\max(0, F_j - G_j \cdot t)$.

## 2. Algorithm & Approach
1. **Greedy Ordering**: By the exchange argument, if fruit $A$ is eaten before fruit $B$, the power loss incurred on $B$ while eating $A$ is $G_B \cdot N_A$. Conversely, eating $B$ before $A$ incurs a loss of $G_A \cdot N_B$. Thus, fruit $A$ should precede fruit $B$ whenever $G_A \cdot N_B > G_B \cdot N_A$ (i.e., descending order of $G_j / N_j$).
2. **0/1 Knapsack Dynamic Programming**:
   - After sorting the fruits in descending order of $G_j / N_j$, we decide whether to eat or skip each fruit.
   - Let $dp[t]$ be the maximum power achievable when the total elapsed eating time is $t$ seconds.
   - For each fruit $j$, traverse time backwards from current total time down to 0:
     $$\text{power} = F_j - G_j \cdot t$$
     If $\text{power} > 0$, update $dp[t + N_j] = \max(dp[t + N_j], dp[t] + \text{power})$.
3. **Result**: The maximum value across all $dp[t]$ is the answer.

## 3. Example Walkthrough
For Test Case 1, Fruit data:
- `(20, 10, 1)`, `(5, 30, 5)`, `(100, 30, 1)`, `(5, 80, 60)`
- Ratios $G/N$: $1/20 = 0.05$, $5/5 = 1.0$, $1/100 = 0.01$, $60/5 = 12.0$.
- Sorted order: Fruit 3 $(N=5, F=80, G=60)$, Fruit 1 $(N=5, F=30, G=5)$, Fruit 0 $(N=20, F=10, G=1)$, Fruit 2 $(N=100, F=30, G=1)$.
- At $t=0$: Eat Fruit 3 $\implies$ gain $80 - 60(0) = 80$, time becomes $5$.
- At $t=5$: Eat Fruit 1 $\implies$ gain $30 - 5(5) = 5$, time becomes $10$.
- At $t=10$: Eat Fruit 2 $\implies$ gain $30 - 1(10) = 20$, time becomes $110$.
- Total power = $80 + 5 + 20 = 105$.

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

struct Fruit {
    long long n, f, g;
};

int cmp(const void *a, const void *b) {
    const struct Fruit *x = (const struct Fruit *)a;
    const struct Fruit *y = (const struct Fruit *)b;
    long long v1 = x->g * y->n;
    long long v2 = y->g * x->n;
    if (v1 > v2) return -1;
    if (v1 < v2) return 1;
    return 0;
}

int main() {
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        int m, j;
        scanf("%d", &m);
        struct Fruit fruits[105];
        for(j = 0; j < m; ++j) {
            scanf("%lld %lld %lld", &fruits[j].n, &fruits[j].f, &fruits[j].g);
        }
        qsort(fruits, m, sizeof(struct Fruit), cmp);

        long long dp[10005];
        for (int i = 0; i <= 10000; i++) dp[i] = -1;
        dp[0] = 0;
        int max_t = 0;

        for (int i = 0; i < m; i++) {
            for (int time = max_t; time >= 0; time--) {
                if (dp[time] < 0) continue;
                long long power = fruits[i].f - fruits[i].g * time;
                if (power > 0) {
                    int next_t = time + fruits[i].n;
                    if (dp[time] + power > dp[next_t]) {
                        dp[next_t] = dp[time] + power;
                    }
                }
            }
            max_t += fruits[i].n;
        }

        long long ans = 0;
        for (int i = 0; i <= max_t; i++) {
            if (dp[i] > ans) ans = dp[i];
        }
        printf("%lld\n", ans);
    }
    return 0;
}
```
