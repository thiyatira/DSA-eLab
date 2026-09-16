# Linked List - Challenge 34

## 1. Problem Overview
The problem asks us to determine if the region covered by water ($2^B$) is greater than or equal to the outburst region ($3^A$). Given $B$ and $A$, we need to output `"TRUE"` if $2^B \ge 3^A$ and `"FALSE"` otherwise, for $T$ test cases.

## 2. Algorithm & Approach
1. Taking the natural logarithm of both sides of $2^B \ge 3^A$ yields:
   $$B \cdot \ln(2) \ge A \cdot \ln(3)$$
2. Since $B$ and $A$ are up to $10^{16}$, direct exponentiation will overflow standard numerical types. Converting to logarithmic scale using `double` allows us to compare both quantities safely without floating-point overflow.
3. For each test case, read $B$ and $A$ into `long long int`, compute $B \cdot \ln(2)$ and $A \cdot \ln(3)$, and check if the former is greater than or equal to the latter.

## 3. Example Walkthrough
For Test Case 1 (`B = 1000000000`, `A = 1000000000`):
- $B \cdot \ln(2) = 10^9 \times 0.693147... \approx 693147180.56$
- $A \cdot \ln(3) = 10^9 \times 1.098612... \approx 1098612288.67$
- $693147180.56 \ge 1098612288.67$ is false $\rightarrow$ Output `FALSE`.

For Test Case 1, line 2 (`B = 3000000000`, `A = 1000000000`):
- $B \cdot \ln(2) = 3 \cdot 10^9 \times 0.693147... \approx 2079441541.69$
- $A \cdot \ln(3) = 10^9 \times 1.098612... \approx 1098612288.67$
- $2079441541.69 \ge 1098612288.67$ is true $\rightarrow$ Output `TRUE`.

## 4. C Solution
```c
#include <stdio.h>
#include <math.h>

int main() {
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        long long int b,a;
        scanf("%lld %lld", &b, &a);
        if (b * log(2) >= a * log(3))
            printf("TRUE\n");
        else
            printf("FALSE\n");
    }
    return 0;
}
```
