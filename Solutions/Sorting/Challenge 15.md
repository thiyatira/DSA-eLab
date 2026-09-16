# Sorting - Challenge 15

## 1. Problem Overview
Given $n$ individuals with initial savings $a_i$ and a wealth threshold $x$, we can select any subset of people and redistribute their total savings equally among them. A person is considered wealthy if their redistributed savings is at least $x$. The goal is to determine the maximum number of people that can be made wealthy.

## 2. Algorithm & Approach
1. **Greedy Strategy**: To maximize the number of wealthy people, we should prioritize people with the highest savings first, as their surplus can cover those with deficits.
2. **Sort**: Sort the array of savings in non-decreasing order.
3. **Iterate Backwards**: Traverse the sorted array from largest to smallest ($i = n - 1$ down to $0$):
   - Maintain a running sum of the savings of the chosen subset.
   - If the cumulative sum satisfies $\text{sum} \ge (\text{subset size}) \times x$, the average is at least $x$, so we can include this person.
   - The moment the condition fails, we stop, as including even smaller elements will further decrease the average below $x$.
4. **Output**: Print the total count of included individuals for each test case.

## 3. Example Walkthrough
**Input:** $n = 4, x = 3$, savings: `[5, 1, 2, 1]`
1. **Sorted array:** `[1, 1, 2, 5]`
2. **Backwards traversal:**
   - $i = 3$: value = $5$, $\text{sum} = 5$, size = $1$. Since $5 \ge 1 \times 3$, `count` becomes $1$.
   - $i = 2$: value = $2$, $\text{sum} = 7$, size = $2$. Since $7 \ge 2 \times 3$, `count` becomes $2$.
   - $i = 1$: value = $1$, $\text{sum} = 8$, size = $3$. Since $8 < 3 \times 3$, break.
3. **Result:** $2$ wealthy people.

## 4. C Solution
```c
#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        int n, i;
        long long x, sum = 0, count = 0;
        scanf("%d %lld", &n, &x);
        int a[n];
        for(i=0;i<n;i++)
            scanf("%d", &a[i]);
        qsort(a, n, sizeof(int), cmp);
        for(i=n-1;i>=0;i--) {
            sum += a[i];
            if (sum >= (n - i) * x)
                count++;
            else
                break;
        }
        printf("%lld\n", count);
    }
    return 0;
}
```
