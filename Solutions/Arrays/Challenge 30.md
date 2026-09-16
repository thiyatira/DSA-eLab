# Arrays - Challenge 30

An elegant and optimal solution in C++ (compatible with the C-based grader environment) to solve the "Alien Rhyme" problem.

## 1. Problem Overview
The problem asks us to find the maximum number of words we can group into disjoint pairs such that each pair shares a unique, non-empty suffix (representing their rhyme), and no two pairs share the same suffix.

## 2. Algorithm & Approach
1. **Trie of Reversed Words**: Since rhyming depends on suffixes, we reverse each word and insert it into a Trie. Each node in the Trie represents a common suffix.
2. **Post-order Traversal (DFS)**: We traverse the Trie bottom-up (from the longest suffixes to the shortest).
3. **Greedy Pairing**: At each node $u$ (excluding the root):
   - We collect all unpaired words from its children.
   - If a word ends exactly at $u$, we count it as an unpaired word.
   - If the total number of unpaired words at $u$ is at least 2, we can form exactly one pair using the suffix represented by $u$. We increment our paired count by 2 and decrement the unpaired count by 2.
   - Any remaining unpaired words propagate up to the parent node.

## 3. Example Walkthrough
For the input words: `PI`, `HI`, `WI`, `FI`
1. Reversing them gives: `IP`, `IH`, `IW`, `IF`.
2. The Trie structure is:
   - Root
     - `I` (shared by all 4 words)
       - `P` (word `PI` ends here)
       - `H` (word `HI` ends here)
       - `W` (word `WI` ends here)
       - `F` (word `FI` ends here)
3. DFS traversal:
   - Nodes `P`, `H`, `W`, `F` each return 1 unpaired word.
   - Node `I` receives 4 unpaired words. Since `I` is not the root and has $\ge 2$ unpaired words, we form 1 pair (using 2 words). The remaining 2 words propagate to the root.
   - Root receives 2 unpaired words but cannot form a pair (empty suffix is invalid).
4. Total paired words = 2.

## 4. C Solution
```c
#include <iostream>
#include <vector>
#include <string>

#define ALPHA 26

std::vector<std::vector<int>> trie;
std::vector<int> is_word;
int ans;

int dfs(int u) {
    int unpaired = is_word[u];
    for (int d = 0; d < ALPHA; ++d) {
        int v = trie[u][d];
        if (v != -1) {
            unpaired += dfs(v);
        }
    }
    if (u != 0 && unpaired >= 2) {
        ans += 2;
        unpaired -= 2;
    }
    return unpaired;
}

void solve() {
    int m;
    if (!(std::cin >> m)) return;
    trie.clear();
    is_word.clear();
    trie.emplace_back(ALPHA, -1);
    is_word.push_back(0);
    ans = 0;
    for (int i = 0; i < m; ++i) {
        std::string s;
        std::cin >> s;
        int t = 0;
        for (int j = (int)s.length() - 1; j >= 0; --j) {
            int d = s[j] - 'A';
            if (trie[t][d] == -1) {
                trie[t][d] = trie.size();
                trie.emplace_back(ALPHA, -1);
                is_word.push_back(0);
            }
            t = trie[t][d];
        }
        is_word[t]++;
    }
    dfs(0);
    std::cout << ans << "\n";
}

int main() {
    int n;
    if (std::cin >> n) {
        while (n--) {
            solve();
        }
    }
    return 0;
}
```
