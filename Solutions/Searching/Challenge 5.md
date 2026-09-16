# Searching - Challenge 5

## 1. Problem Overview
The problem asks to find the total number of non-empty subsets of classes such that no two classes in a subset overlap. Two classes $[S_1, E_1]$ and $[S_2, E_2]$ are non-overlapping if $E_1 \le S_2$ or $E_2 \le S_1$. We need to output the count modulo $10^8$, formatted as an 8-digit string with leading zeros.

## 2. Algorithm & Approach
1. **Sorting**: Sort the classes by their end times ($E$).
2. **Dynamic Programming**: Let $DP[i]$ be the number of non-overlapping subsets using a subset of the first $i$ classes.
3. **Transition**: For each class $i$, we can either exclude it ($DP[i-1]$) or include it. If we include it, we add $1$ (the subset containing only class $i$) plus the number of valid subsets ending at or before $S_i$.
4. **Binary Search**: Use `std::upper_bound` (or equivalent) to find the rightmost class $j$ such that $E_j \le S_i$.
5. **Modulo Arithmetic**: Since we need the last 8 digits, perform all additions modulo $10^8$.

## 3. Example Walkthrough
For input `2 3, 3 4, 4 5, 2 4, 1 6`:
1. Sorted by end time: `(2,3), (3,4), (4,5), (2,4), (1,6)`.
2. $DP[i]$ stores count of subsets using first $i$ classes.
3. For each class, we calculate subsets ending at or before its start time using binary search.
4. Summing these up and applying modulo $10^8$ gives the total count of non-empty subsets.

## 4. C Solution
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

struct Class { int s, e; };
void add(int &a,int b) { a = (a + b) % 100000000; }

int solve() {
    int n;
    if (!(cin >> n) || n == -1) return -1;
    vector<Class> c(n);
    for (int i = 0; i < n; ++i) {
        if (cin >> c[i].s >> c[i].e && c[i].s > c[i].e) swap(c[i].s, c[i].e);
    }
    sort(c.begin(), c.end(), [](Class a, Class b) { return a.e < b.e; });
    vector<int> dp(n + 1, 0);
    vector<int> ends(n);
    for (int i = 0; i < n; ++i) ends[i] = c[i].e;
    for (int i = 1; i <= n; ++i) {
        int prev = upper_bound(ends.begin(), ends.begin() + i - 1, c[i - 1].s) - ends.begin();
        int count = (1 + dp[prev]);
        dp[i] = dp[i - 1];
        add(dp[i], count);
    }
    cout << setfill('0') << setw(8) << dp[n] << endl;
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    while (solve() != -1);
    return 0;
}
```
