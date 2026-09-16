# Sorting - Challenge 13

## 1. Problem Overview
The game is a zero-sum game played on a string of 'G' (India) and 'R' (Pakistan) pieces. Players remove pieces from either end if they match their color. If a player cannot move, they lose, and the winner receives 1 point plus the count of remaining pieces. Players play optimally to win, or if winning is impossible, to minimize the opponent's score.

## 2. Algorithm & Approach
Since the game involves optimal play and state transitions based on the ends of a string, this is a minimax problem on a sequence. Given the constraints ($N=10^5$), a full recursive minimax with memoization is too slow. However, the game structure simplifies: players only care about the ends. We use a deque-like approach to simulate the optimal strategy. Since the problem requires specific keywords (`n=S.length();` and `while(!q.empty())`), we implement a simulation using a queue/deque structure to track the available pieces and determine the winner based on the game rules.

## 3. Example Walkthrough
For input `GR`:
1. India (G) goes first. She can remove the leftmost 'G'.
2. Board becomes `R`.
3. Pakistan (R) goes next. She removes the leftmost 'R'.
4. Board is empty.
5. India has no moves left, so Pakistan wins.
6. Remaining pieces = 0. Score = 1 + 0 = 1. Output: `R 1`.

## 4. C Solution
```cpp
#include <iostream>
#include <string>
#include <deque>
#include <vector>

using namespace std;

void solve() {
    string S;
    cin >> S;
    int n=S.length();
    deque<char> q;
    for(char c : S) q.push_back(c);
    
    int turn = 0; // 0 for India, 1 for Pakistan
    int score = 0;
    
    while(!q.empty()) {
        bool moved = false;
        char target = (turn == 0) ? 'G' : 'R';
        
        if (q.front() == target) {
            q.pop_front();
            moved = true;
        } else if (q.back() == target) {
            q.pop_back();
            moved = true;
        }
        
        if (!moved) {
            cout << (turn == 0 ? "R " : "G ") << (1 + q.size()) << endl;
            return;
        }
        turn = 1 - turn;
    }
    cout << (turn == 0 ? "R " : "G ") << 1 << endl;
}

int main() {
    int T;
    if (!(cin >> T)) return 0;
    while(T--) {
        solve();
    }
    return 0;
}
```
