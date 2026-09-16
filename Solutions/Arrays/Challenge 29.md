# Arrays - Challenge 29

## 1. Problem Overview
The problem asks us to process $N$ strings and store their occurrence counts. Then, for $Q$ queries, we need to report how many times a given query string appeared among the $N$ initial strings.

## 2. Algorithm & Approach
1. **Data Types & Data Structures**:
   - Define a type alias `typedef char string[21];` to handle strings up to length 20.
   - Use two global parallel arrays `string x[N]` and `int cnt[N]` to keep track of unique strings and their respective frequencies.
2. **Adding Strings (`void add(string s)`)**:
   - For each input string, linear search through `x` to see if it already exists.
   - If found, increment its corresponding element in `cnt[N]`.
   - If not found, insert `s` into `x` at the next available index and set its `cnt` value to 1.
3. **Querying (`int query(string s)`)**:
   - Linear search `x` for the string `s`.
   - If found, return its count from `cnt`; otherwise, return 0.
4. **Execution**:
   - Read $N$, then call `add(s)` for each of the $N$ strings.
   - Read $Q$, then call `query(s)` for each of the $Q$ query strings and print the returned count.

## 3. Example Walkthrough
**Input:**
```
4
abacd
babacd
abacd
xzxb
3
abacd
xzxb
abc
```

1. **Insertion Phase ($N=4$):**
   - Read `"abacd"` -> New string -> `x[0] = "abacd"`, `cnt[0] = 1`.
   - Read `"babacd"` -> New string -> `x[1] = "babacd"`, `cnt[1] = 1`.
   - Read `"abacd"` -> Matches `x[0]` -> `cnt[0]` becomes 2.
   - Read `"xzxb"` -> New string -> `x[2] = "xzxb"`, `cnt[2] = 1`.

2. **Query Phase ($Q=3$):**
   - Query `"abacd"` -> Found at `x[0]` -> Output: `2`
   - Query `"xzxb"` -> Found at `x[2]` -> Output: `1`
   - Query `"abc"` -> Not found -> Output: `0`

## 4. C Solution

```c
#include <stdio.h>
#include <string.h>

#define N 1000

typedef char string[21];

string x[N];
int cnt[N];
int sz = 0;

void add(string s) {
    for (int i = 0; i < sz; i++) {
        if (strcmp(x[i], s) == 0) {
            cnt[i]++;
            return;
        }
    }
    strcpy(x[sz], s);
    cnt[sz] = 1;
    sz++;
}

int query(string s) {
    for (int i = 0; i < sz; i++) {
        if (strcmp(x[i], s) == 0) {
            return cnt[i];
        }
    }
    return 0;
}

int main() {
    int n, q;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        string s;
        scanf("%s", s);
        add(s);
    }
    if (scanf("%d", &q) != 1) return 0;
    for (int i = 0; i < q; i++) {
        string s;
        scanf("%s", s);
        printf("%d\n", query(s));
    }
    return 0;
}
```
