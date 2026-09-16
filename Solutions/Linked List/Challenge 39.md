# Linked List - Challenge 39

An efficient and structured C solution for the **Level 2 / Linked List / Challenge 39** problem.

---

## 1. Problem Overview
The problem models a process where $P$ rooms (initially with uncleanness $0$) are filled in pairs: the first person from room $1$ to $P$ and the second person from $P$ to $1$, always selecting the least unclean room. Each room used increments its uncleanness by $1$. We need to output the room index and uncleanness level for the $Q$-th person.

## 2. Algorithm & Approach
1. **Uncleanness Level**: In every complete round of $P$ occupants, each room is visited exactly once. Thus, the uncleanness level of the room used by the $Q$-th person is simply `(Q - 1) / P`.
2. **Room Pattern**:
   - Let $k = (Q - 1) / P$ (the round index, 0-indexed) and $r = (Q - 1) \pmod P$ (the person's index within the round, 0-indexed).
   - If $P$ is even, the room sequence repeats every $P$ people:
     - If $r$ is even: `room = 1 + r / 2`
     - If $r$ is odd: `room = P - r / 2`
   - If $P$ is odd, the direction flips every round (when $k$ is odd):
     - If $k$ is even: identical to the even $P$ case.
     - If $k$ is odd:
       - If $r$ is even: `room = P - r / 2`
       - If $r$ is odd: `room = 1 + r / 2`

This yields an optimal $O(1)$ time complexity per testcase.

## 3. Example Walkthrough
**Sample Case**: $P = 5, Q = 9$
1. Calculate $k = (9 - 1) / 5 = 1$ and $r = (9 - 1) \pmod 5 = 3$.
2. Since $P = 5$ (odd) and $k = 1$ (odd):
   - $r = 3$ is odd.
   - `room = 1 + 3 / 2 = 2`.
3. Output: `2 1`.

---

## 4. C Solution

```c
#include <stdio.h>

int main()
{
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        long long p, q;
        scanf("%lld %lld", &p, &q);
        long long k = (q - 1) / p;
        long long r = (q - 1) % p;
        long long room;
        if ((p % 2 != 0) && (k % 2 != 0)) {
            if (r % 2 == 0) room = p - r / 2;
            else room = 1 + r / 2;
        } else {
            if (r % 2 == 0) room = 1 + r / 2;
            else room = p - r / 2;
        }
        printf("%lld %lld\n", room, k);
    }
    return 0;
}
```
