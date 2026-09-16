# Searching - Challenge 4

An efficient and optimal solution in C for the **Revenge of the Pancakes** (Pizza Hut) problem.

---

## 1. Problem Overview
Given a stack of pizzas represented by `+` (smiley side up) and `-` (empty side up), we can flip any prefix of pizzas (which also inverts their sides). The objective is to find the minimum number of flips needed to make all pizzas smiley side up (`+`).

## 2. Algorithm & Approach
1. Appending an imaginary `+` at the bottom of the stack simplifies the problem: the goal is to make every pizza match the orientation of the final desired state (`+`).
2. Every transition between adjacent pizzas with different states (`+` to `-` or `-` to `+`) requires at least one flip to homogenize them.
3. Therefore, the minimum number of flips is simply the count of adjacent pairs where `S[i] != S[i+1]`, considering an extra `+` at the end of the string.
4. Using an arithmetic expression `ans += (S[i] != S[i+1])` instead of branching statements ensures the solution stays within the strict Cyclomatic Complexity limit of 3.

## 3. Example Walkthrough
For the input string `--+-`:
1. Append `+` to the end: `--+-+`
2. Compare adjacent characters:
   - Index 0 to 1: `-` vs `-` (No change)
   - Index 1 to 2: `-` vs `+` (Change $\to$ Count = 1)
   - Index 2 to 3: `+` vs `-` (Change $\to$ Count = 2)
   - Index 3 to 4: `-` vs `+` (Change $\to$ Count = 3)
3. Output: `3`

---

## 4. C Solution

```c
#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        char s[105];
        scanf("%s", s);
        int len = strlen(s);
        s[len] = '+';
        s[len + 1] = '\0';
        int ans = 0;
        for (int i = 0; i < len; i++) {
            ans += (s[i] != s[i + 1]);
        }
        printf("%d\n", ans);
    }
    return 0;
}
```
