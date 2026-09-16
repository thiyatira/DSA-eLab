## Level 2 / Sorting / Challenge 13

### Problem Description
India and Pakistan are playing a game alternating turns. India plays first. The game starts with all game pieces arranged in a single row. The pieces come in two colors: green and red. During India's turns, she must choose and remove an green piece that is either the leftmost or rightmost piece remaining. During Pakistan's turns, she must choose and remove an red piece that is either the leftmost or rightmost piece remaining. If at any point one of the players does not have a legal move (possibly because there are no pieces remaining), that player loses the game, and the other player is awarded 1 point plus 1 additional point for each piece that remains on the board.

We use an uppercase letter I to represent green pieces and an uppercase letter R to represent red pieces. Suppose, for example, that they play with the following starting board: GRGRRRGG.

On her first turn, India can choose to remove either the leftmost or rightmost pieces, as both are green. Suppose she chooses the leftmost. Then, the board would become RGRRRGG. Then, Pakistan would have no choice but to remove the new leftmost piece, as the rightmost piece is not red, leaving GRRRGG. India can choose again, and this time she chooses the rightmost piece, leaving GRRRG for Pakistan's turn. At this point, Pakistan has no valid move, so India won. Since there are 5 pieces remaining, India wins 1+5=6 points in total.

Each player plays optimally trying to win and to maximize their own score. A player that cannot guarantee a win plays to minimize the opponent's score.

Given the starting board, can you find out who wins and what is their score?

### Constraints
- 1 ≤ T ≤ 100.
- 2 ≤ the length of B ≤ 10^5

### Input Format
- The first line of the input gives the number of test cases, T. T lines follow. Each line represents a test case and contains a string B representing the status of the board. The i-th character in B is G if the i-th piece from the left is green and R if it is red.

### Output Format
- Print the output in a separate lines contains, the initial of the winner (G for India or R for Pakistan), and the score the winner gets.

### Test Cases

#### Test Case 1
**Input:**
```
5
GRGRRRGG
RGGGGR
GR
GRGRGRG
GRGRGRRGR
```
**Expected Output:**
```
G 8
R 7
R 1
G 1
R 6
```

#### Test Case 2
**Input:**
```
6
GRGRRRGGRRR
RGGRRGGR
GRRG
GRGRGRRRGGG
GGGGRGRGRRGR
GGRRRGRGRGR
```
**Expected Output:**
```
R 10
R 9
R 1
G 11
G 10
R 2
```

### Mandatory Keywords
- `n=S.length();`
- `while(!q.empty())`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 838
- NLOC: 117
