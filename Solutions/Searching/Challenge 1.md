# Searching - Challenge 1

## 1. Problem Overview
The problem requires determining whether a given integer $n$ contains the digit sequence `"21"` or is divisible by $21$. If either condition is met, output `"The streak is broken!"`; otherwise, output `"The streak lives still in our heart!"`.

## 2. Algorithm & Approach
1. Read the number of test cases $t$.
2. For each test case, read the number as a string $s$ (and parse its integer value $n$).
3. Check if $n \pmod{21} == 0$ or if the substring `"21"` exists in $s$ using `strstr(s, "21")`.
4. If either condition holds, print `"The streak is broken!"`.
5. Otherwise, print `"The streak lives still in our heart!"`.

## 3. Example Walkthrough
For the input:
- **121**: Contains `"21"` as a substring. Output: `The streak is broken!`
- **130**: $130 \pmod{21} = 4 \neq 0$ and does not contain `"21"`. Output: `The streak lives still in our heart!`
- **231**: $231 \pmod{21} = 0$. Output: `The streak is broken!`

## 4. C Solution
```c
#include <stdio.h>
#include <string.h>

int main()
{
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        char s[20];
        int n;
        scanf("%s", s);
        sscanf(s, "%d", &n);
        if (n % 21 == 0 || strstr(s, "21") != NULL) {
            printf("The streak is broken!\n");
        } else {
            printf("The streak lives still in our heart!\n");
        }
    }
    return 0;
}
```
