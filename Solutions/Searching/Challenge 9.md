# Searching - Challenge 9

An explanation of the method and the complete C solution are provided below.

## 1. Problem Overview
The problem asks us to count the occurrences of the strings `"SUVO"` and `"SUVOJIT"` within a given set of test case strings. Any occurrence of `"SUVO"` that is part of `"SUVOJIT"` should be counted exclusively towards `"SUVOJIT"` and not towards `"SUVO"`.

## 2. Algorithm & Approach
1. Read the number of test cases $T$.
2. For each test case, initialize two counters: `suvo = 0` and `suvojit = 0`.
3. Iterate through each character index $i$ in the string $S$:
   - Check if the substring starting at index $i$ matches `"SUVOJIT"` using `strncmp`. If it matches, increment `suvojit` and advance the pointer by $6$ (so that the loop's `i++` advances past the entire 7-character word).
   - Otherwise, check if the substring starting at index $i$ matches `"SUVO"` using `strncmp`. If it matches, increment `suvo` and advance the pointer by $3$ (advancing past the 4-character word).
4. Print the result formatted as `SUVO = %d, SUVOJIT = %d`.

## 3. Example Walkthrough
For the input:
`AXRSUVOJITHSUVOJITHSUVOJJSUVOJITSUVOJIT`

- At index 3: matches `"SUVOJIT"`, `suvojit` becomes 1. Skip ahead past `"SUVOJIT"`.
- At index 11: matches `"SUVOJIT"`, `suvojit` becomes 2. Skip ahead past `"SUVOJIT"`.
- At index 19: matches `"SUVO"` followed by `JJ` (not `"SUVOJIT"`), `suvo` becomes 1. Skip ahead past `"SUVO"`.
- At index 25: matches `"SUVOJIT"`, `suvojit` becomes 3. Skip ahead past `"SUVOJIT"`.
- At index 32: matches `"SUVOJIT"`, `suvojit` becomes 4. Skip ahead past `"SUVOJIT"`.

Final output: `SUVO = 1, SUVOJIT = 4`

## 4. C Solution
```c
#include <stdio.h>
#include <string.h>

int main()
{
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--)
    {
        char s[1005];
        scanf("%s", s);
        int suvo = 0, suvojit = 0;
        for (int i = 0; s[i] != '\0'; i++)
        {
            if (strncmp(&s[i], "SUVOJIT", 7) == 0)
            {
                suvojit++;
                i += 6;
            }
            else if (strncmp(&s[i], "SUVO", 4) == 0)
            {
                suvo++;
                i += 3;
            }
        }
        printf("SUVO = %d, SUVOJIT = %d\n", suvo, suvojit);
    }
    return 0;
}
```
