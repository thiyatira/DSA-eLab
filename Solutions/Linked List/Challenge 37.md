# Linked List - Challenge 37

## 1. Problem Overview
The problem asks us to find the minimum total jaggery powder content (Minimum Spanning Tree weight) required to connect $B$ strawberries. We are given $A$ white strands (weight 1 each), while all other pairs of strawberries are connected by pink strands (weight 2 each). We need to determine the minimum cost to form a connected graph spanning all $B$ vertices.

## 2. Algorithm & Approach
1. Model the problem as finding a Minimum Spanning Tree (MST) on a complete graph of $B$ vertices where given edges have weight 1 and all missing edges have weight 2.
2. To minimize total weight, we greedily select as many non-cycling white strands (weight 1) as possible using Kruskal's algorithm / Disjoint Set Union (DSU).
3. Let $k$ be the maximum number of white strands that can be included without forming cycles.
4. The remaining $(B - 1 - k)$ edges required for the MST will be pink strands (weight 2).
5. The minimum total jaggery powder content is calculated as:
   $$\text{Total Cost} = k \times 1 + (B - 1 - k) \times 2 = 2B - 2 - k$$

## 3. Example Walkthrough
Given Test Case: $B = 3$, $A = 1$, Edge = $(2, 6)$
1. Initialize DSU components.
2. Process edge $(2, 6)$: $2$ and $6$ are in different components, so union them. $k$ becomes $1$.
3. Total cost formula: $2 \times 3 - 2 - 1 = 3$.
4. Output: `Line #2: 3`

## 4. C Solution
```c
#include <stdio.h>

int parent[1000];

int find(int i) {
    while (i != parent[i]) {
        i = parent[i];
    }
    return i;
}

int main() {
    int t, case_num, b, a, i, u, v, k, ru, rv;
    scanf("%d", &t);
    
    for (case_num = 1; case_num <= t; case_num++) {
        scanf("%d %d", &b, &a);
        k = 0;
        
        for (i = 0; i < 1000; i++) {
            parent[i] = i;
        }
        
        for (i = 0; i < a; i++) {
            scanf("%d %d", &u, &v);
            ru = find(u);
            rv = find(v);
            if (ru != rv) {
                parent[ru] = rv;
                k++;
            }
        }
        
        printf("Line #%d: %d\n", case_num, 2 * b - 2 - k);
    }
    
    return 0;
}
```
