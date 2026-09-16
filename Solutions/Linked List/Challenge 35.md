# Linked List - Challenge 35

An explanation and the C solution for the problem are provided below.

## 1. Problem Overview
Given $M$ workers, each knowing up to 5 subjects out of $S$ possible subjects, we need to count the number of ordered pairs of workers $(i, j)$ (where $i \neq j$) such that worker $i$ knows at least one subject that worker $j$ does not know (meaning worker $i$ can guide worker $j$).

## 2. Algorithm & Approach
1. For each test case, read the number of workers $M$ and total subjects $S$.
2. Store the subjects known by each worker in an array of size $M \times 5$, alongside the count of subjects $D_i$ for each worker.
3. Iterate over all pairs $(i, j)$ with $0 \le i, j < M$ and $i \neq j$.
4. For each pair, check if there exists any subject in worker $i$'s list that is not present in worker $j$'s list:
   - Check each subject of worker $i$ against all subjects of worker $j$.
   - If a subject is found that worker $j$ does not know, increment the pair counter and proceed to the next pair $(i, j)$.
5. Output the result formatted as `Line #<case_number>: <count>`.

## 3. Example Walkthrough
Consider $M = 4, S = 100$:
- Worker 0: $\{70, 90, 100, 5\}$
- Worker 1: $\{90\}$
- Worker 2: $\{70\}$
- Worker 3: $\{70, 90, 100\}$

Evaluating pairs $(i, j)$:
- $(0, 1), (0, 2), (0, 3)$: Worker 0 knows subjects (e.g., $5$) not known by $1, 2, 3$ $\rightarrow 3$ pairs.
- $(1, 2)$: Worker 1 knows $90$, which worker 2 does not know $\rightarrow 1$ pair.
- $(2, 1)$: Worker 2 knows $70$, which worker 1 does not know $\rightarrow 1$ pair.
- $(3, 1), (3, 2)$: Worker 3 knows subjects not known by $1$ and $2$ $\rightarrow 2$ pairs.
- Other pairs have no new subjects to guide.

Total pairs = $3 + 1 + 1 + 2 = 7$, printed as `Line #1: 7`.

## 4. C Solution
```c
#include <stdio.h>

int main()
{
    int T, caseNum = 1;
    if (scanf("%d", &T) != 1) return 0;

    while (caseNum <= T)
    {
        int M, S;
        scanf("%d %d", &M, &S);

        int D[505];
        int sub[505][10];

        for (int i = 0; i < M; i++)
        {
            scanf("%d", &D[i]);
            for (int k = 0; k < D[i]; k++)
            {
                scanf("%d", &sub[i][k]);
            }
        }

        int count = 0;
        for (int i = 0; i < M; i++)
        {
            for (int j = 0; j < M; j++)
            {
                if (i == j) continue;

                int can_guide = 0;
                for (int a = 0; a < D[i]; a++)
                {
                    int found = 0;
                    for (int b = 0; b < D[j]; b++)
                    {
                        if (sub[i][a] == sub[j][b])
                        {
                            found = 1;
                            break;
                        }
                    }
                    if (!found)
                    {
                        can_guide = 1;
                        break;
                    }
                }
                if (can_guide)
                {
                    count++;
                }
            }
        }

        printf("Line #%d: %d\n", caseNum, count);
        caseNum++;
    }

    return 0;
}
```
