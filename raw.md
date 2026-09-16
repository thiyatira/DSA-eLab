### Part 1: Complete Markdown Documentation

```markdown
# Level 2 Questions Collection

---

## Level 2 / Searching / Challenge 1

### Problem Description
The grandest stage of all, WrestleMania, recently happened. And with it, happened one of the biggest heartbreaks for the WWE fans around the world. 

The Undertaker's undefeated streak was finally over. Now as an Undertaker fan, you're disappointed, disheartened and shattered to pieces.

And Randy Orton doesn't want to upset you in any way possible. (After all you are his only friend, true friend!) Randy Orton knows that you're still sensitive to the loss, so he decides to help you out. 

Every time you come across a number, Randy Orton carefully manipulates it. He doesn't want you to face numbers which have "21" as a part of them. Or, in the worst case possible, are divisible by 21. 

If you end up facing such a number, you feel sad... and no one wants that - because you start chanting "The streak is broken!" , if the number doesn't make you feel sad, you say, "The streak lives still in our heart!" Help Randy Orton so that he can help you! 

### Constraints
- 1 ≤ t ≤ 100 
- 1 ≤ n ≤ 1000000 

### Input Format
- The first line contains a number, `t`, denoting the number of test cases.
- After that, for `t` lines there is one number in every line. 

### Output Format
- Print the required string, depending on how the number will make you feel.

### Test Cases

#### Test Case 1
**Input:**
```
3
121
130
231
```
**Expected Output:**
```
The streak is broken!
The streak lives still in our heart!
The streak is broken!
```

#### Test Case 2
**Input:**
```
3
125
130
235
```
**Expected Output:**
```
The streak lives still in our heart!
The streak lives still in our heart!
The streak lives still in our heart!
```

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 185
- NLOC: 40

---

## Level 2 / Searching / Challenge 2

### Problem Description
For Engineering first-year students, the instructor is organising a surprise test. 

He's given you an array of n integers to work with.

By adding +1 or -1 to the preceding entry, all the elements in the array are acquired. 

For this issue, the professor stipulated that the difference between any two successive components must be 1.

The problem's anticipated outcome is to search an element index with the minimum number of comparisons possible. 

If the element appears more than once, display the smallest index. If the element is missing, print -1.

### Constraints
- 0 < n < 1000

### Input Format
- First line indicates the size of an array
- Second line indicates the array elements 
- Third line indicates the number to be find.

### Output Format
- Single line represents the 1 for number is present or -1 for number is not present.

### Test Cases

#### Test Case 1
**Input:**
```
8
5 4 5 6 5 4 3 2
4
```
**Expected Output:**
```
1
```

#### Test Case 2
**Input:**
```
8
5 4 5 6 4 3 2 3
9
```
**Expected Output:**
```
-1
```

### Mandatory Keywords
- `int search(int arr[],int n,int x)`
- `int arr[20]`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 165
- NLOC: 30

---

## Level 2 / Searching / Challenge 3

### Problem Description
In this problem, we define "set" is a collection of distinct numbers. For two sets A and B, we define their sum set is a set S(A,B) = {a+b|a∊A, b∊B}. 

In other word, set S(A,B) contains all elements which can be represented as a sum of an element in A and an element in B. Given two sets A, C, 

your task is to find set 'B' of positive integers less than or equals 100 with maximum size such that S(A, B)=C. It is guaranteed that there is unique such set.

### Constraints
- 1 ≤ N, M ≤ 100 
- 1 ≤ ai, ci ≤ 100 

### Input Format
- The first line contains N denoting the number of elements in set A, the following line contains N space-separated integers 'ai' denoting the elements of set A. 
- The third line contains M denoting the number of elements in set C, the following line contains M space-separated integers 'ci' denoting the elements of set C 

### Output Format
- Print all elements of B in increasing order in a single line, separated by space.

### Sample Input & Output
**Sample Input:**
```
2
1 2 
3 4 5
```
**Sample Output:**
```
2 3
```

**Explanation:**
If $e$ is an element of set $B$, then $e+2$ is an element of set $C$, so we must have $e \le 3$. Clearly, $e$ cannot be $1$ because $1+1=2$ is not an element of set $C$. Therefore, $B=\{2, 3\}$.

### Test Cases

#### Test Case 1
**Input:**
```
4
3 5 2 4
7
4 5 6 7 8 9 10
```
**Expected Output:**
```
2 3 4 5
```

#### Test Case 2
**Input:**
```
2
5 3
3
6 8 10
```
**Expected Output:**
```
3 5
```

### Mandatory Keywords
- `for(int i=0;i<N;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 205
- NLOC: 35

---

## Level 2 / Searching / Challenge 4

### Problem Description
The Pizza Hut has just introduced a new kind of pizza! It has a smiley face made of potato chips on one side (the "smiley side"), and nothing on the other side (the "empty side").

You are the head waiter on duty, and the kitchen has just given you a stack of pizzas to serve to a customer. Like any good pizza server, you have X-ray pizza vision, and you can see whether each pizza in the stack has the smiley side up or the empty side up. You think the customer will be happiest if every pizza is smiley side up when you serve them.

You know the following maneuver: carefully lift up some number of pizzas (possibly all of them) from the top of the stack, flip that entire group over, and then put the group back down on top of any pizzas that you did not lift up. When flipping a group of pizzas, you flip the entire group in one motion; you do not individually flip each pizza. Formally: if we number the pizzas 1, 2, ..., N from top to bottom, you choose the top i pizzas to flip. Then, after the flip, the stack is i, i-1, ..., 2, 1, i+1, i+2, ..., N. Pizzas 1, 2, ..., i now have the opposite side up, whereas pizzas i+1, i+2, ..., N have the same side up that they had up before.

For example, let's denote the smiley side as + and the empty side as -. Suppose that the stack, starting from the top, is --+-. One valid way to execute the maneuver would be to pick up the top three, flip the entire group, and put them back down on the remaining fourth pizza (which would stay where it is and remain unchanged). The new state of the stack would then be -++-. The other valid ways would be to pick up and flip the top one, the top two, or all four. It would not be valid to choose and flip the middle two or the bottom one, for example; you can only take some number off the top.

You will not serve the customer until every pizza is smiley side up, but you don't want the pizzas to get cold, so you have to act fast! What is the smallest number of times you will need to execute the maneuver to get all the pizzas smiley side up, if you make optimal choices?

### Constraints
- 1 ≤ T ≤ 100.
- Every character in S is either + or -.
- 1 ≤ length of S ≤ 100.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each consists of one line with a string S, each character of which is either + (which represents a pizza that is initially smiley side up) or - (which represents a pizza that is initially empty side up). The string, when read left to right, represents the stack when viewed from top to bottom.

### Output Format
- Print the output in separate lines contains, the minimum number of times you will need to execute the maneuver to get all the pizzas smiley side up.

### Test Cases

#### Test Case 1
**Input:**
```
5
-
-+
+-
+++
--+-
```
**Expected Output:**
```
1
1
2
0
3
```

#### Test Case 2
**Input:**
```
5
--
++
+-
+-+
+-+-
```
**Expected Output:**
```
1
0
2
2
4
```

### Mandatory Keywords
- `int main(int argc, char const *argv[])`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 324
- NLOC: 38

---

## Level 2 / Searching / Challenge 5

### Problem Description
Sania Mirza likes many more activities. She likes silambam, kumbham, archery, art, and many more. She joined a club that offers several classes. Each class has a time interval in every week. Sania Mirza wants to sign up for many classes, but since they overlap in time, she looks for a subset of non-overlapping classes to attend. A subset is non-overlapping if it does not contain two classes that overlap in time. If a class starts at the time another class ends, this is not considered overlapping.
Sania Mirza decided to list all the non-overlapping non-empty subsets of classes. Then she will choose the subset she likes best. In order to predict the amount of paper needed to write the list, she wants you to calculate how many of these subsets there are.

### Constraints
- 1 ≤ N ≤ 10^5 
- 1 ≤ S < E ≤ 10^9

### Input Format
- The first line contains an integer N indicating the number of classes the club offers. 
- Each of the next N lines describes a class using two integers S and E that represent the starting and ending times of the class, respectively.
- The end of input is indicated with a line containing a single −1.

### Output Format
- Print the output in separate lines contains, the number of non-overlapping non-empty subsets of classes. To make your life easier, output only the last 8 digits of the result. If the result has less than 8 digits, write it with leading zeros to complete 8 digits.

### Test Cases

#### Test Case 1
**Input:**
```
5
2 3
3 4
4 5
2 4
1 6
3
500 100
1 500
1 500
1
999 100
-1
```
**Expected Output:**
```
00000010
00000007
00000001
```

#### Test Case 2
**Input:**
```
4
3 4
4 5
2 4
1 6
2
500 100
1 500
1
999 100
-1
```
**Expected Output:**
```
00000006
00000004
00000001
```

### Mandatory Keywords
- `void add(int &a,int b)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 335
- NLOC: 48

---

## Level 2 / Searching / Challenge 6

### Problem Description
Ram has given an array of integers "A" to Tina, Tina need to find the maximum sum that can be obtained by picking some non-empty subset of the array. 

If there are many such non-empty subsets, choose the one with the maximum number of elements. 

Print the maximum sum and the number of elements in the chosen subset. 

### Constraints
- 1 ≤ N ≤ 10^5 
- -10^9 ≤ Ai ≤ 10^9

### Input Format
- The first line contains an integer 'N', denoting the number of elements of the array. 
- Next line contains 'N' space-separated integers, denoting the elements of the array. 

### Output Format
- Print two space-separated integers, the maximum sum that can be obtained by choosing some subset and the maximum number of elements among all such subsets which have the same maximum sum.

### Test Cases

#### Test Case 1
**Input:**
```
5
6 3 -4 -2 5
```
**Expected Output:**
```
14 3
```

#### Test Case 2
**Input:**
```
4
6 7 -2 -5
```
**Expected Output:**
```
13 2
```

### Mandatory Keywords
- `while(num)`

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 150
- NLOC: 35

---

## Level 2 / Searching / Challenge 7

### Problem Description
All business can make use of a good accountant and, if they're not big on following the law, sometimes a bad one. Bad accountants try to make more money for their employers by fudging numbers without getting caught.

Sometimes a bad accountant wants to make a number larger, and sometimes smaller. It is widely known that tax auditors will fail to notice two digits being swapped in any given number, but any discrepancy more egregious will certainly be caught. It's also painfully obvious when a number has fewer digits than it ought to, so a bad accountant will never swap the first digit of a number with a 0.

Given a number, how small or large can it be made without being found out?

### Constraints
- 1 ≤ T ≤ 100
- 0 ≤ N ≤ 999999999
- N will never begin with a leading 0 unless N = 0

### Input Format
- Input begins with an integer T , the number of numbers that need tweaking. Each of the next T lines contains a integer N .

### Output Format
- Print the output in separate lines contains, the smallest and largest numbers that can be made from the original number N , using at most a single swap and following the rules above.

### Test Cases

#### Test Case 1
**Input:**
```
5
31524
897
123
10
5
```
**Expected Output:**
```
13524 51324
798 987
123 321
10 10
5 5
```

#### Test Case 2
**Input:**
```
5
524
97
23
10
5
```
**Expected Output:**
```
254 542
79 97
23 32
10 10
5 5
```

### Mandatory Keywords
- `while(i<=t)`

### Complexity Constraints
- Cyclomatic Complexity: 10
- Token Count: 235
- NLOC: 39

---

## Level 2 / Searching / Challenge 8

### Problem Description
Kapildev is a mobile phone marketer. 

For example, if someone answers this question correctly, a mobile phone will be handed to them at a 50% discount. 

The goal is to discover the three elements that are closest to each other from three sorted arrays. 

So obtain three input arrays from the user, all of which should be sorted. 

As input, take the three sorted arrays and their sizes. 

The closest element from three arrays should be the final solution.

### Constraints
- 0 < array_size < 100
- 0 < arr_elements < 1000

### Input Format
- first line represents the number of elements N in first sorted array
- second line indicates input elements according to N
- third line represents the number of elements M in second sorted array
- fourth line indicates input elements according to M
- fifth line represents the number of elements L in second sorted array
- Sixth line indicates input elements according to L

### Output Format
- Single line represents the out put that are closest to each other from three sorted arrays

### Test Cases

#### Test Case 1
**Input:**
```
3
1 4 10
3
2 15 20
2
10 12
```
**Expected Output:**
```
10 15 10
```

#### Test Case 2
**Input:**
```
3
20 24 100
5
2 19 22 79 800
5
10 12 23 24 119
```
**Expected Output:**
```
24 22 23
```

### Mandatory Keywords
- `void findClosest(int A[],int B[],int C[],int p,int q,int r)`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 375
- NLOC: 44

---

## Level 2 / Searching / Challenge 9

### Problem Description
Kanna is upset to learn that no one at his school recognises his initial name. Even his peers refer to him by his surname. Frustrated, he resolves to force his fellow college students to solve this issue in order to get his first name.

Kanna has provided each test case a lengthy string containing any ASCII letter as input.

It's your job to figure out how many times the words SUVO and SUVOJIT appear in it.

### Constraints
- 0 < T ≤ 100
- 0 < S ≤ 1000

### Input Format
- The first line contains the number of testcases, T. 
- Next, T lines follow each containing a long string S.

### Output Format
- For each long string S, display the no. of times SUVO and SUVOJIT appears in it.

### Test Cases

#### Test Case 1
**Input:**
```
5
SUVOJITSUVOSUVOJITUCSUVOJITSUVOVXSUVOJITSUVOGMSUVODMMVDSUVOJIT
AXRSUVOJITHSUVOJITHSUVOJJSUVOJITSUVOJIT
SUVOJITPRQSUVOJIT
SUVOJITTXGSUVOUNSUVOJIT
SUVOJITSUVOSUVOJITXGSUVOSUVOQSUVOJITKDSALASUVOQESUVOHSSUVODFSUVOJITWSUVOUSUVOJITGJEM
```
**Expected Output:**
```
SUVO = 4, SUVOJIT = 5
SUVO = 1, SUVOJIT = 4
SUVO = 0, SUVOJIT = 2
SUVO = 1, SUVOJIT = 2
SUVO = 7, SUVOJIT = 5
```

#### Test Case 2
**Input:**
```
10
FSUVOFCOSUVOJITOSUVOAESUVOJITKBSUVOJITSUVOJITSUVOJITFCSUVOJITSUVOSUVOJIT
SUVOTSUVOSUVOJITGSUVORSUVOSUVOQSUVOJITSUVOTSUVOTXXHYNPSUVO
SUVOJITSUVO
SUVOJITSUVORKTSUVOSUVOJITSUVOJITSUVOJITBYGISSUVOJITSUVOSUVOJITRSUVOHSUVO
SUVOMSUVOSUVO
WDKLQSUVOJITGSUVOSUVOSUVOJITDSESSUVOJITSUVOYAHY
MQLSUVOJIT
SUVOJITOJCSUVOJITVYRHGNLNOWOESUVOJITSUVOJITEYSUVO
PMSUVOJITMRWJWBSUVOMSUVOXWSUVOJSUVOJIT
SUVOJITAMSUVOJITONQRVVUQTASUVOJITSUVOJITNBWGQGQSUVORYJRRSUVOJIT
```
**Expected Output:**
```
SUVO = 3, SUVOJIT = 7
SUVO = 8, SUVOJIT = 2
SUVO = 1, SUVOJIT = 1
SUVO = 5, SUVOJIT = 6
SUVO = 3, SUVOJIT = 0
SUVO = 3, SUVOJIT = 3
SUVO = 0, SUVOJIT = 1
SUVO = 1, SUVOJIT = 4
SUVO = 3, SUVOJIT = 2
SUVO = 1, SUVOJIT = 5
```

### Mandatory Keywords
- `0`

### Complexity Constraints
- Cyclomatic Complexity: 11
- Token Count: 200
- NLOC: 36

---

## Level 2 / Searching / Challenge 10

### Problem Description
Reliance group processes thousands of transactions daily amounting to millions of dollars. 

They also have a daily target that they must achieve. 

Given a list of transactions done by Reliance group and a daily target your task is to determine at which transaction does Reliance group achieve the same. 

### Constraints
- 1 <= T <= 100000 
- 1 <= Ai <= 1000 
- 1 <= Target <= 10^9 
- 1 <= Q <= 1000000 

### Input Format
- First line contains T, number of transactions done by Reliance group in a day. 
- The following line contains T integers, the worth of each transaction. 
- Next line contains Q, the no of queries. 
- Next Q lines contain an integer each representing the daily target. 

### Output Format
- Print the transaction number where the daily limit is achieved, or -1 if the target can't be achieved. 

### Test Cases

#### Test Case 1
**Input:**
```
5
1 2 1 3 4
5
3
4
8
```
**Expected Output:**
```
2
3
5
5
5
```

#### Test Case 2
**Input:**
```
5
1 2 1 3 4
3
3
4
7
```
**Expected Output:**
```
2
3
4
```

### Mandatory Keywords
- `int fun(int mid)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 270
- NLOC: 60

---

## Level 2 / Sorting / Challenge 11

### Problem Description
Heath ledger the Joker lives in the amazon forest and has collected M fruits for lunch. Since he has a small mouth, he eats fruits one at a time. Some fruits are tougher than others! The j-th fruit takes him Nj seconds to eat.

Heath ledger eats fruits to get power. Different stones give him different amounts of power. Furthermore, the fruits lose power over time. The j-th fruit initially contains Fj units of power and will lose Gj units of power each second. When Heath ledger starts to eat a fruit, he will receive all the power the fruit contains immediately. The fruit's power stops decreasing once it hits zero.

What is the largest amount of power Heath ledger could receive from eating his fruits?

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ M ≤ 100.
- 1 ≤ Nj ≤ 100.
- 1 ≤ Fj ≤ 10^5.
- 0 ≤ Gj ≤ 10^5.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the integer M, the number of power fruits Heath ledger has. Then, there are M more lines, the M-th of which contains the three integers Nj, Fj and Gj, as described above.

### Output Format
- Print the output in a separate lines contains, largest amount of power Heath ledger could receive from eating his fruits?

### Test Cases

#### Test Case 1
**Input:**
```
3
4
20 10 1
5 30 5
100 30 1
5 80 60
3
10 4 1000
10 3 1000
10 8 1000
2
12 300 50
5 200 0
```
**Expected Output:**
```
105
8
500
```

#### Test Case 2
**Input:**
```
2
4
15 10 1
5 30 4
90 30 1
5 80 60
2
10 4 1000
10 3 999
```
**Expected Output:**
```
110
4
```

### Mandatory Keywords
- `int m, j;`
- `for(j = 0; j < m; ++j)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 585
- NLOC: 65

---

## Level 2 / Sorting / Challenge 12

### Problem Description
Spiderman has 'm' friends. They stand in a row from left to right, and the j-th friend from the left wears a Jersey with a number xj written on it. Each friend has a direction (left or right). In the beginning, the direction of each friend is right.

Spiderman can make some operations on friends. On each operation, Spiderman can choose two adjacent friends and swap their positions. After each operation, the direction of both chosen friends will also be flipped: left to right and vice versa.

Spiderman hopes that after some operations, the numbers written on the Jersey of 'm' friends in the row, read from left to right, become non-decreasing. Also he wants, that all friends will have a direction of right at the end. Please find if it is possible.

### Constraints
- 1 ≤ T ≤ 50
- 1 ≤ m ≤ 10^5
- 1 ≤ xj ≤ 10^5

### Input Format
- The input consists of multiple test cases. The first line contains a single integer T (1≤ T ≤ 50) — the number of test cases.
- The first line of each test case contains a single integer m (1 ≤ m ≤ 10^5) — the number of Spidermans friends.
- The second line contains 'm' integers x1,x2,…,xm (1 ≤ xj ≤ 10^5) — the numbers, written on the Jersey.

### Output Format
- Print the output in a separate lines contains, a possible sequence of operations, print YES ; otherwise, print NO.

### Test Cases

#### Test Case 1
**Input:**
```
3
4
4 3 2 5
4
3 3 2 2
5
1 2 3 5 4
```
**Expected Output:**
```
Yes
Yes
No
```

#### Test Case 2
**Input:**
```
4
5
1 4 2 5
3
1 3 3
4
2 3 5 4
2
3 5
```
**Expected Output:**
```
No
Yes
No
No
```

### Mandatory Keywords
- `for(j=0;j<m;j++)`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 155
- NLOC: 20

---

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

---

## Level 2 / Sorting / Challenge 14

### Problem Description
As the Basketball coach at local college, Vivek have been tasked with picking a team of exactly R students to represent your college. There are M students for you to pick from. The j-th student has a skill rating Nj, which is a positive integer indicating how skilled they are.

Vivek have decided that a team is fair if it has exactly R students on it and they all have the same skill rating. That way, everyone plays as a team. Initially, it might not be possible to pick a fair team, so you will give some of the students one-on-one coaching. It takes one hour of coaching to increase the skill rating of any student by 1.

The competition season is starting very soon, so Vivek wants to calculate the minimum number of hours of coaching Vivek need to give before Vivek able to pick a fair team.

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ Nj ≤ 10000, for all j.
- 2 ≤ R ≤ M.
- 2 ≤ M ≤ 1000

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the two integers M and R, the number of students and the number of students Vivek need to pick, respectively. Then, another line follows containing M integers Nj; the j-th of these is the skill of the j-th student.

### Output Format
- Print the output in a separate lines contains, Calculate the minimum number of hours of coaching Vivek need to give before Vivek able to pick a fair team.

### Test Cases

#### Test Case 1
**Input:**
```
3
4 3
3 1 9 100
6 2
5 5 1 2 3 4
5 5
7 7 1 7 7
```
**Expected Output:**
```
14
0
6
```

#### Test Case 2
**Input:**
```
5
4 3
3 1 9 100
6 2
5 6 1 2 3 4
5 5
7 7 1 7 7
3 2
6 7 1
4 3
5 6 1 4
```
**Expected Output:**
```
14
1
6
1
3
```

### Mandatory Keywords
- `for(tt = 1; tt <= tc; ++tt)`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 405
- NLOC: 50

---

## Level 2 / Sorting / Challenge 15

### Problem Description
Many years ago Berland was a small country where only 𝑛 people lived. Each person had some savings: the 𝑖-th one had 𝑎𝑖 burles.

The government considered a person as wealthy if he had at least 𝑥 burles. To increase the number of wealthy people Berland decided to carry out several reforms. Each reform looked like that:

the government chooses some subset of people (maybe all of them);
the government takes all savings from the chosen people and redistributes the savings among the chosen people equally.

A lot of data was lost from that time, so we don't know how many reforms were implemented and to whom. All we can do is ask you to calculate the maximum possible number of wealthy people after several (maybe zero) reforms.

### Constraints
- 1 ≤ 𝑇 ≤ 1000
- 1 ≤ 𝑛 ≤ 10^5, 1 ≤ 𝑥 ≤ 10^9
- 1 ≤ 𝑎𝑖 ≤ 10^9

### Input Format
- The first line contains single integer 𝑇 — the number of test cases.
- Next 2𝑇 lines contain the test cases — two lines per test case. The first line contains two integers 𝑛 and 𝑥 — the number of people and the minimum amount of money to be considered as wealthy.
- The second line contains 𝑛 integers 𝑎1,𝑎2,…,𝑎𝑛 — the initial savings of each person.

### Output Format
- Print the output in a separate lines contains the maximum possible number of wealthy people after several (maybe zero) reforms.

### Test Cases

#### Test Case 1
**Input:**
```
4
4 3
5 1 2 1
4 10
11 9 11 9
2 5
4 3
3 7
9 4 9
```
**Expected Output:**
```
2
4
0
3
```

#### Test Case 2
**Input:**
```
5
4 3
1 1 2 1
4 9
10 9 11 9
2 5
4 3
3 7
9 4 8
3 5
9 1 8
```
**Expected Output:**
```
0
4
0
3
3
```

### Mandatory Keywords
- `for(i=0;i<n;i++)`
- `for(i=n-1;i>=0;i--)`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 145
- NLOC: 23

---

## Level 2 / Sorting / Challenge 16

### Problem Description
Ajith decided to wish happy birthday to his friend from America and send him a card. To make his present more mysterious, he decided to make a bracelet. Bracelet here is such a sequence of envelopes X = {x1, x2, ..., xn}, where the width and the height of the i-th envelope is strictly higher than the width and the height of the (i - 1)-th envelope respectively. Bracelet size is the number of envelopes in the chain.

Ajith wants to make the bracelet of the maximum size from the envelopes he has, the bracelet should be such, that he'll be able to put a card into it. The card fits into the bracelet if its width and height is lower than the width and the height of the smallest envelope in the bracelet respectively. It's forbidden to turn the card and the envelopes.

Ajith has very many envelopes and very little time, this hard task is entrusted to you.

### Constraints
- 1 ≤ n ≤ 5000
- 1 ≤ w, h ≤ 10^6
- 1 ≤ wi, hi ≤ 10^6

### Input Format
- The first line contains integers n, w, h — amount of envelopes Peter has, the card width and height respectively. 
- Then there follow n lines, each of them contains two integer numbers wi and hi — width and height of the i-th envelope.

### Output Format
- Print the output in a separate lines contains, the first line print the maximum bracelet size. In the second line print the numbers of the envelopes (separated by space), forming the required chain, starting with the number of the smallest envelope. Remember, please, that the card should fit into the smallest envelope. If the bracelet of maximum size is not unique, print any of the answers.

### Test Cases

#### Test Case 1
**Input:**
```
2 1 1
2 2
2 2
```
**Expected Output:**
```
1
1
```

#### Test Case 2
**Input:**
```
3 3 3
5 4
12 11
9 8
```
**Expected Output:**
```
3
1 3 2
```

### Mandatory Keywords
- `for(i=0;i<=n;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 6
- Token Count: 240
- NLOC: 24

---

## Level 2 / Sorting / Challenge 17

### Problem Description
Mark has gotten very bored of winning every programming contest and farming unlimited rating. Today, he is going to farm tomatoes instead. 

Mark's garden is an infinite 2D plane. he has 'm' tomatoes to plant, and the j-th tomato must be planted at (aj, bj). Starting at the point (0,0), Mark begins walking, in one step he can travel one unit right or up (increasing his a or b coordinate by 1 respectively). At any point (A,B) during his walk he can plant some tomatoes at arbitrary points using his tomato gun, consuming max(|A−a|,|B−b|) units of energy in order to plant a tomato at (a,b). Find the minimum total energy required to plant every tomato. 

Note that Mark may plant any number of tomatoes from any point. 

### Constraints
- 1 ≤ m ≤ 700000 
- 0 ≤ aj, bj ≤ 10^9 

### Input Format
- The first line contains the integer m. 
- The next 'm' lines contain two integers aj and bj, representing the location of the j-th tomato. It is possible that some tomatoes should be planted in the same location. 

### Output Format
- Print the output in a single line contains the minimum total energy to plant all tomatoes.

### Test Cases

#### Test Case 1
**Input:**
```
2
2 0
0 1
```
**Expected Output:**
```
1
```

#### Test Case 2
**Input:**
```
3
5 5
7 7
4 9
```
**Expected Output:**
```
2
```

### Mandatory Keywords
- `int x,y;`
- `a[i]=mp(x+y,x);`

### Complexity Constraints
- Cyclomatic Complexity: 4
- Token Count: 335
- NLOC: 28

---

## Level 2 / Sorting / Challenge 18

### Problem Description
Today is Vignesh's birthday, and he will go shopping to buy ice spheres. All n ice spheres are placed in a row and they are numbered from 1 to n from left to right. Each ice sphere has a positive integer price. In this version all prices are different. 

An ice sphere is cheap if it costs strictly less than two neighboring ice spheres: the nearest to the left and the nearest to the right. The leftmost and the rightmost ice spheres are not cheap. Vignesh will choose all cheap ice spheres and then buy only them. 

You can visit the shop before Vignesh and reorder the ice spheres as you wish. Find out the maximum number of ice spheres that Vignesh can buy, and show how the ice spheres should be reordered. 

### Constraints
- 1 ≤ n ≤ 10^5 
- 1 ≤ ai ≤ 10^9 

### Input Format
- The first line contains a single integer n — the number of ice spheres in the shop. 
- The second line contains n different integers a1,a2,…,an — the prices of ice spheres 

### Output Format
- In the first line print the maximum number of ice spheres that Vignesh can buy. 
- In the second line print the prices of ice spheres in the optimal order.

### Test Cases

#### Test Case 1
**Input:**
```
5
1 2 3 4 5
```
**Expected Output:**
```
2
5 1 4 2 3
```

#### Test Case 2
**Input:**
```
1
1000000000
```
**Expected Output:**
```
0
1000000000
```

### Mandatory Keywords
- `int a[n+1];`
- `for(i=0,j=n-1;i<=j;i++,j--)`

### Complexity Constraints
- Cyclomatic Complexity: 4
- Token Count: 150
- NLOC: 20

---

## Level 2 / Sorting / Challenge 19

### Problem Description
Many years ago Berland was a small country where only 𝑛 people lived. Each person had some savings: the 𝑖-th one had 𝑎𝑖 burles.

The government considered a person as wealthy if he had at least 𝑥 burles. To increase the number of wealthy people Berland decided to carry out several reforms. Each reform looked like that:

the government chooses some subset of people (maybe all of them);
the government takes all savings from the chosen people and redistributes the savings among the chosen people equally.

A lot of data was lost from that time, so we don't know how many reforms were implemented and to whom. All we can do is ask you to calculate the maximum possible number of wealthy people after several (maybe zero) reforms.

### Constraints
- 1 ≤ 𝑇 ≤ 1000
- 1 ≤ 𝑛 ≤ 10^5, 1 ≤ 𝑥 ≤ 10^9
- 1 ≤ 𝑎𝑖 ≤ 10^9

### Input Format
- The first line contains single integer 𝑇 — the number of test cases.
- Next 2𝑇 lines contain the test cases — two lines per test case. The first line contains two integers 𝑛 and 𝑥 — the number of people and the minimum amount of money to be considered as wealthy.
- The second line contains 𝑛 integers 𝑎1,𝑎2,…,𝑎𝑛 — the initial savings of each person.

### Output Format
- Print the output in a separate lines contains the maximum possible number of wealthy people after several (maybe zero) reforms.

### Test Cases

#### Test Case 1
**Input:**
```
4
4 3
5 1 2 1
4 10
11 9 11 9
2 5
4 3
3 7
9 4 9
```
**Expected Output:**
```
2
4
0
3
```

#### Test Case 2
**Input:**
```
5
4 3
1 1 2 1
4 9
10 9 11 9
2 5
4 3
3 7
9 4 8
3 5
9 1 8
```
**Expected Output:**
```
0
4
0
3
3
```

### Mandatory Keywords
- `for(i=0;i<n;i++)`
- `for(i=n-1;i>=0;i--)`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 145
- NLOC: 23

---

## Level 2 / Sorting / Challenge 20

### Problem Description
Ram and his friend Priya are participating in an individual coding contest consisting of multiple stages. A contestant can get between 0 and 100 points, inclusive, for each stage, independently of other contestants.

Points received by contestants in different stages are used for forming overall contest results. Suppose that k stages of the contest are completed. For each contestant, k−⌊k/4⌋ stages with the highest scores are selected, and these scores are added up. This sum is the overall result of the contestant. (Here ⌊t⌋ denotes rounding t down.)

As of now, 'n' stages are completed, and Ram know the points Ram and Priya got for these stages. However, it is unknown how many more stages will be held. Ram wonder what the smallest number of additional stages is, after which your result might become greater than or equal to Priya's result, at least in theory. Find this number

### Constraints
- 1 ≤ t ≤ 1000
- 1 ≤ n ≤ 10^5
- 0 ≤ ai ≤ 100
- 0 ≤ bi ≤ 100

### Input Format
- The first line contains the number of test cases t. Description of the test cases follows.
- The first line of each test case contains a single integer n — the number of completed stages.
- The second line contains n integers a1,a2,…,an — your points for the completed stages.
- The third line contains n integers b1,b2,…,bn — Ilya's points for the completed stages.

### Output Format
- Print the output in a separate lines contains the smallest number of additional stages required for Ram result to be able to become greater than or equal to Priya's result.

### Test Cases

#### Test Case 1
**Input:**
```
5
1
100
0
1
0
100
4
20 30 40 50
100 100 100 100
4
10 20 30 40
100 100 100 100
7
7 59 62 52 27 31 55
33 35 50 98 83 80 64
```
**Expected Output:**
```
0
1
3
4
2
```

#### Test Case 2
**Input:**
```
4
1
100
0
1
0
100
3
20 30 40
100 100 100
4
10 20 30 40
100 100 100 100
```
**Expected Output:**
```
0
1
3
4
```

### Mandatory Keywords
- `for(i=1;i<=n;i++)`
- `while(T--)`

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 250
- NLOC: 25

---

## Level 2 / Arrays / Challenge 21

### Problem Description
Vikram K Kumar has decided to give a task to his assistant directors as the part of preparation for his upcoming technological thriller film.

So he have given two arrays with distinct elements A and B.  

The task is to print the common elements of the two arrays.  

If no element is common in two arrays, then print Zero.

Can you help the assistant directors to complete their task

### Constraints
- 1 ≤ T ≤ 100
- 1 ≤ N, M ≤ 105
- 1 ≤ A[i], B[i] ≤ 105

### Input Format
- The first line of input contains an integer T denoting the number of test cases.  
- The first line of each test case is N and M, N is the size of array A and M is size of array B. 
- The second line of each test case contains N input A[i].
- The third line of each test case contains M input B[i].

### Output Format
- Print the intersecting elements sorted in ascending order.
- If no element is common in two array, then print "Zero" without quotes.

### Test Cases

#### Test Case 1
**Input:**
```
2
5 3
89 24 75 11 23
89 2 4
6 5
1 2 3 4 5 6
3 4 5 6 7
```
**Expected Output:**
```
89 
3 4 5 6 
```

#### Test Case 2
**Input:**
```
1
3 5
89 78 56
51 61 89 78 12
```
**Expected Output:**
```
89 78 
```

### Mandatory Keywords
- `int a[n],b[m];`
- `if(a[i]>b[j])`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 195
- NLOC: 35

---

## Level 2 / Arrays / Challenge 22

### Problem Description
Mustafa defines the happiness score of a string as the number of indices j such that Mj≠MN−j+1 where 1≤j≤N/2 (1-indexed). For example, the string CABABC has a happiness score of 2 since M2≠M5 and M3≠M4.

Mustafa gave Bama a string M of length N, consisting of uppercase letters and asked her to convert it into a string with a happiness score of L. In one operation, Bama can change any character in the string to any uppercase letter. Could you help Bama compute the minimum number of the operations required to transform the given string into a string with happiness score equal to L?

### Constraints
- 1 ≤ T ≤ 100.
- 0 ≤ L ≤ N/2.
- 1 ≤ N ≤ 100

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow.
- The first line of each test case contains two integers N and L. The second line of each test case contains a string M of length N, consisting of uppercase letters.

### Output Format
- Print the output in a separate lines contains, compute the minimum number of the operations required to transform the given string into a string with happiness score equal to L?

### Test Cases

#### Test Case 1
**Input:**
```
2
5 1
ABCAA
4 2
ABAA
```
**Expected Output:**
```
0
1
```

#### Test Case 2
**Input:**
```
3
6 1
ABCAAC
5 2
ABAAB
3 1
ABA
```
**Expected Output:**
```
2
0
1
```

### Mandatory Keywords
- `string S;`
- `for (i = 0; i < N/2; i++)`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 140
- NLOC: 20

---

## Level 2 / Arrays / Challenge 23

### Problem Description
Pyramid's consists of an infinite number of rows of an increasing number of integers each, arranged in a triangular shape.

Let us define (a, b) as the b-th position from the left in the a-th row, with both a and b counted starting from 1. Then Pyramid's is defined by the following rules:

The r-th row contains r positions (a, 1), (a, 2), ..., (a, a).
The numbers at positions (a, 1) and (a, a) are 1, for all a.
The number at position (a, b) is the sum of the numbers at positions (a - 1, b - 1) and (a - 1, b), for all b with 2 ≤ b ≤ a - 1.

In this problem, a Pyramid run is a sequence of s positions (a1, b1), (a2, b2), ..., (as, bs) in Pyramid's that satisfy the following criteria:

- a1 = 1 and b1 = 1.
- Each subsequent position must be within the triangle and adjacent (in one of the six possible directions) to the previous position. That is, for all i ≥ 1, (ai + 1, bi + 1) must be one of the following that is within the triangle: (ai - 1, bi - 1), (ai - 1, bi), (ai, bi - 1), (ai, bi + 1), (ai + 1, bi), (ai + 1, bi + 1).
- No position may be repeated within the sequence. That is, for every i ≠ j, either ai ≠ aj or bi ≠ bj, or both.

Find any Pyramid run of R ≤ 500 positions such that the sum of the numbers in all of the positions it visits is equal to S. It is guaranteed that at least one such run exists for every S.

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ S ≤ 1000.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each consists of a single line containing a single integer S.

### Output Format
- Print the output in a separate lines contains, Pyramid run of length R ≤ 500 using R additional lines. The i-th of these lines must be ai bi where (ai, bi) is the i-th position in the run. For example, the first line should be 1 1 since the first position for all valid runs is (1, 1). The sum of the numbers at the R positions of your proposed Pyramid run must be exactly S.

### Test Cases

#### Test Case 1
**Input:**
```
3
1
4
19
```
**Expected Output:**
```
Process #1:
1 1
Process #2:
1 1
2 2
3 3
4 4
Process #3:
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
10 10
11 11
12 12
13 13
14 14
15 15
16 16
17 17
18 18
19 19
```

#### Test Case 2
**Input:**
```
3
2
6
9
```
**Expected Output:**
```
Process #1:
1 1
2 2
Process #2:
1 1
2 2
3 3
4 4
5 5
6 6
Process #3:
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
```

### Mandatory Keywords
- `for(j=row;j>=0;j--)`

### Complexity Constraints
- Cyclomatic Complexity: 10
- Token Count: 350
- NLOC: 50

---

## Level 2 / Arrays / Challenge 24

### Problem Description
sami is studying B.Tech.-Software Engineering. 

He's going to attend a computer science-based subject exam this semester.

Due to the less preparation in the previous monthly tests,  his internal mark decreased. 

His computer science Professor made an offer one more chance to boost up his internal marks. 

Professor assigns a program to Simon for the internal mark boostup. 

So Sami wants to solve Questions which is given by the test coordinator.
Simon need to identify the find largest sum contiguous sub-array. can you help him?

Functional Description:
Naive solution would be use two for loops and check every subarray and return the subarray which has the maximum sum.

The best way to solve this puzzle is to use Kadane’s algorithm which runs in O(n) time. 

The idea is to keep scanning through the array and calculating the maximum sub-array that ends at every position. 

The sub-array will either contain a range of numbers if the array has intermixed positive and negative values, or it will contain the least negative value if the array has only negative values.

### Constraints
- 0 < n1 < 100
- 0 < n2 < 100
- 0 < k < 100

### Test Cases

#### Test Case 1
**Input:**
```
7
-1 1 4 1 1 2 -3
```
**Expected Output:**
```
9
```

#### Test Case 2
**Input:**
```
9
-2 1 -3 4 -1 2 1 -5 4
```
**Expected Output:**
```
6
```

### Mandatory Keywords
- `int kadane(int arr[],int n)`
- `for(int i=0;i<n;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 150
- NLOC: 27

---

## Level 2 / Arrays / Challenge 25

### Problem Description
Ants have developed advanced ways to find, distribute and make their own food, to such extent that, it has been said that ants eat more meat than lions wolves and tigers combined! 

Argentine ant is one of the world’s worst invasive species(Species which are not native to a specific location, but have tendency to spread to a degree to cause damage to the native species of a region) present in the Norfolk Island. 

It forms supercolonies and are aggressive competitors, displacing most other ant species. It can alter ecosystem processes such as pollination and seed dispersal of native plant species.

The federal environment department is in its mission to wipe out the species from Norfolk Island. So, they are carrying out a survey in T sites within the island examinig the food sources. They know that the ant species can survive in a site only if the food available is more than K units or else they will eventually die out from the site. 

For every site, they go around the region examining N food sources, and finding A[i], the unit of food available from the ith source(1 ≤ i ≤ N).

Determine for each site, whether the ant species can survive or they die out from the specific site.

### Constraints
- 1 ≤ T ≤ 100
- 0 ≤ K ≤ 1018
- 1 ≤ N ≤ 105
- 0 ≤ A[i] ≤ 1013

### Input Format
- The first line contains two space-separated integers T and K. Then, information of T sites of the island follow.
- For each T, the first line contains N, the number of food sources and the second line contains N space-separated integers, A[i] (1 ≤ i ≤ N).

### Output Format
- For each T, output "SUCCESS" without quotes, if the ant species die out or "FAILURE" if the ant species survives.

### Test Cases

#### Test Case 1
**Input:**
```
3 8
2
4 4
1
7
5
3 8 11 13 17
```
**Expected Output:**
```
FAILURE
SUCCESS
FAILURE
```

#### Test Case 2
**Input:**
```
5 7
2
5 9
4
11 2 7 5
2
9 13
3
5 7 13
1
6
```
**Expected Output:**
```
FAILURE
FAILURE
FAILURE
FAILURE
SUCCESS
```

### Mandatory Keywords
- `int A[N]`
- `sum=sum+A[i];`

### Complexity Constraints
- Cyclomatic Complexity: 6
- Token Count: 160
- NLOC: 30

---

## Level 2 / Arrays / Challenge 26

### Problem Description
vijay has just finished baking several burgers, and it's time to place them on cooling racks. vijay has exactly as many cooling racks as burgers. 

Each cooling rack can only hold one burger, and each burger may only be held by one cooling rack, but vijay isn't confident that the cooling racks can support the weight of the burgers. 

vijay knows the weight of each burger, and has assigned each cooling rack a maximum weight limit. What is the maximum number of burgers the vijay can cool on the racks?

### Constraints
- T ≤ 30
- N ≤ 30

### Input Format
- Input begins with an integer T≤30, the number of test cases. 
- Each test case consists of 3 lines. 
- The first line of each test case contains a positive integer N≤30, the number of burgers (and also the number of racks). 
- The second and third lines each contain exactly positive N integers not exceeding 100. 
- The integers on the second line are the weights of the burgers, and the integers on the third line are the weight limits of the cooling racks.

### Output Format
- Print the maximum number of burgers vijay can place on the racks.

### Test Cases

#### Test Case 1
**Input:**
```
1
5
16 34 26 5 31
37 40 32 43 12
```
**Expected Output:**
```
5
```

#### Test Case 2
**Input:**
```
1
4
87 45 3 2
56 13 4 8
```
**Expected Output:**
```
3
```

### Mandatory Keywords
- `int no[32],w[32]`

### Complexity Constraints
- Cyclomatic Complexity: 12
- Token Count: 303
- NLOC: 52

---

## Level 2 / Arrays / Challenge 27

### Problem Description
pathan has a sequence of N integers, A1,A2,...,AN. He likes this sequence if it contains a subsequence of M integers, B1,B2,...,BM within it. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

You will be given a sequence of N integers, A1,A2,...,AN followed by another sequence of M integers, B1,B2,...,BM. Given these, you have to tell whether pathan likes the sequence of N integers(A1,A2,...,AN) or not.

Formally, output "Yes" if

∃idx1,idx2,...,idxM | 1 ≤ idx1 < idx2 < ... < idxM ≤ N and Aidxi = Bi ∀ i, 1 ≤ i ≤ M

Otherwise output "No". Note that the quotes are for clarity.

### Constraints
- 1 ≤ T ≤ 100
- 1 ≤ N ≤ 10^3
- 1 ≤ M ≤ 10^3
- 1 ≤ Ai, Bi ≤ 10^9

### Input Format
- The first line contains a single integer, T.
- T test cases follow where each test case contains four lines:
- The first line of a test case contains a single integer N
- The second line of the test case contains N space separated integers, A1,A2,...,AN
- The third line of the test case contains a single integer M.
- The fourth line contains M space separated integers, B1,B2,...,BM
- Symbols have usual meanings as described in the statement.

### Output Format
- Print the output a single line containing the output. Output is "Yes" if Irfan likes the sequence A. 
- Output is "No" if pathan dislikes the sequence A.

### Test Cases

#### Test Case 1
**Input:**
```
3
8
1 4 3 2 5 6 9 4
3
1 7 8
4
21 7 16 11
3
15 7 3
4
1 4 3 2
3
1 1 3
```
**Expected Output:**
```
No
No
Yes
```

#### Test Case 2
**Input:**
```
3
6
3 2 5 6 9 4
3
1 7 8
3
7 16 11
3
15 7 3
3
4 3 2
3
1 1 3
```
**Expected Output:**
```
No
No
No
```

### Mandatory Keywords
- `int no[100],fs[100]`

### Complexity Constraints
- Cyclomatic Complexity: 10
- Token Count: 225
- NLOC: 41

---

## Level 2 / Arrays / Challenge 28

### Problem Description
Selvam and Lakshmi's daughter is almost 3 years old! However, even though the daughter is more independent now, scheduling daughter activities and domestic necessities is still a challenge for the couple.

Selvam and Lakshmi have a list of B activities to take care of during the day. Each activity happens during a specified interval during the day. They need to assign each activity to one of them, so that neither of them is responsible for two activities that overlap. An activity that ends at time t is not considered to overlap with another activity that starts at time t.

For example, suppose that Selvam and Lakshmi need to cover 3 activities: one running from 18:00 to 20:00, another from 19:00 to 21:00 and another from 22:00 to 23:00. One possibility would be for Lakshmi to cover the activity running from 19:00 to 21:00, with Selvam covering the other two. Another valid schedule would be for Selvam to cover the activity from 18:00 to 20:00 and Lakshmi to cover the other two. Notice that the first two activities overlap in the time between 19:00 and 20:00, so it is impossible to assign both of those activities to the same partner.

Compute any schedule that does not require the same person to cover overlapping activities, or say that it is impossible.

### Constraints
- 1 ≤ T ≤ 100.
- 0 ≤ Si < Ei ≤ 24 × 60.
- 2 ≤ B ≤ 1000.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing a single integer B, the number of activities to assign. Then, B more lines follow. The i-th of these lines (counting starting from 1) contains two integers Si and Ei. The i-th activity starts exactly Si minutes after midnight and ends exactly Ei minutes after midnight.

### Output Format
- Print the output in a separate lines contains compute any schedule that does not require the same person to cover overlapping activities, or say that it is impossible..The i-th character in y must be S if the i-th activity is assigned to Selvam in your proposed schedule, and L if it is assigned to Lakshmi.

### Test Cases

#### Test Case 1
**Input:**
```
4
3
360 480
420 540
600 660
3
0 1440
1 3
2 4
5
99 150
1 100
100 301
2 5
150 250
2
0 720
720 1440
```
**Expected Output:**
```
SLS
IMPOSSIBLE
SLLSS
SS
```

#### Test Case 2
**Input:**
```
2
5
56 567
34 345
23 453
24 345
12 567
4
12 456
12 643
7 456
8 789
```
**Expected Output:**
```
IMPOSSIBLE
IMPOSSIBLE
```

### Mandatory Keywords
- `int lhs[1005];`
- `int rhs[1005];`
- `for(int i=0;i<n;i++)`

### Complexity Constraints
- Cyclomatic Complexity: 19
- Token Count: 550
- NLOC: 84

---

## Level 2 / Arrays / Challenge 29

### Problem Description
Everyday morning, the frog would jump from out his pool and go to see his friend who resided in a tree hole.

At noon, he'd come home. In the meanwhile, these two individuals will engage in a game. 

It will be a technical game.

today task for solving the technical program is,

There is a collection of N strings ( There can be multiple occurrences of a particular string ). 

Each string's length is no more than 20 characters. 

There are also Q queries. For each query, you are given a string, and you need to find out how many times this string occurs in the given collection of N strings.

### Constraints
- 1 < N < 1000
- 1 < Q < 1000

### Input Format
- The first line contains N, the number of strings.
- The next N lines each contain a string.
- The N+2nd line contains , Q the number of queries.
- The following Q lines each contain a query string.             

### Output Format
- print the results that the number of times the string present in the given strings.

### Test Cases

#### Test Case 1
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
**Expected Output:**
```
2
1
0
```

#### Test Case 2
**Input:**
```
4
ertyu
babacd
edcfrvt
xzxb
3
abacd
ertyu
abc
```
**Expected Output:**
```
0
1
0
```

### Mandatory Keywords
- `int cnt[N]`
- `string x[N];`
- `int query(string s)`
- `void add(string s)`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 250
- NLOC: 44

---

## Level 2 / Arrays / Challenge 30

### Problem Description
During some Research, Ragu found evidence of Predator poetry! Ragu's team of linguists has determined that each word in the Predator language has an accent on exactly one position (letter) in the word; the part of the word starting from the accented letter is called the accent-suffix. Two words are said to rhyme if both of their accent-suffixes are equal.

Ragu have recovered a list of M words that may be part of an Predator poem. Unfortunately, Ragu don't know which is the accented letter for each word. Ragu believe that you can discard zero or more of these words, assign accented letters to the remaining words, and then arrange those words into pairs such that each word rhymes only with the other word in its pair, and with none of the words in other pairs.

Ragu want to know the largest number of words that can be arranged into pairs in this way.

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ length of Vi ≤ 50, for all i.
- Vi consists of uppercase English letters, for all i.
- Vi ≠ Vj, for all i ≠ j.
- 2 ≤ M ≤ 1000.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line with a single integer M. Then, M lines follow, each of which contains a string Vi of uppercase English letters, representing a distinct word. Notice that the same word can have different accentuations in different test cases.

### Output Format
- Print the output in a separate lines contains, find the largest number of words that can be arranged into pairs in this way.

### Test Cases

#### Test Case 1
**Input:**
```
4
2
TARPOL
PROL
3
TARPOR
PROL
TARPRO
6
SEVENES
JAM
HAM
NALAM
HUM
NOLOM
4
PI
HI
WI
FI
```
**Expected Output:**
```
2
0
4
2
```

#### Test Case 2
**Input:**
```
3
3
TARPOL
PROL
ROLL
4
TARPOR
PROL
TARPRO
TRPO
5
SEVENES
JAM
HAM
NALAM
HUM
```
**Expected Output:**
```
2
2
4
```

### Mandatory Keywords
- `while (n--)`
- `trie.emplace_back(ALPHA, -1);`
- `t = trie[t][d];`

### Complexity Constraints
- Cyclomatic Complexity: 8
- Token Count: 330
- NLOC: 50

---

## Level 2 / Linked List / Challenge 31

### Problem Description
Farmer Ayyanar has built a new long shelter, with S shops. The shops are located along a straight line at positions y1,...,yS.

His G goats don't like this shelter layout and become aggressive towards each other once put into a shop. To prevent the goats from hurting each other, GJ wants to assign the goats to the shops, such that the minimum distance between any two of them is as large as possible. What is the highest minimum distance?

### Constraints
- 1 <= T <= 20
- 2 <= S <= 100,000
- 0 <= yi <= 1,000,000,000
- 2 <= G <= S

### Input Format
- T – the number of test cases, then T test cases follows.
- Line 1: Two space-separated integers: S and G
- Lines 2..S+1: Line i+1 contains an integer shop location, yi

### Output Format
- Print the output in a separate lines contains the highest minimum distance.

### Test Cases

#### Test Case 1
**Input:**
```
1
6 3
1
2
7
4
8
9
```
**Expected Output:**
```
3
```

#### Test Case 2
**Input:**
```
2
5 2
1
3
4
6
7
4 3
1
5
6
7
```
**Expected Output:**
```
6
2
```

### Mandatory Keywords
- `while`
- `for`
- `if`
- `else`

### Complexity Constraints
- Cyclomatic Complexity: 6
- Token Count: 275
- NLOC: 45

---

## Level 2 / Linked List / Challenge 32

### Problem Description
Muthu has entering a offer for a longtime supply of pizzas. M coupons have already been sold. Each coupon contains a single integer between 1 and P, inclusive. Different coupons are allowed to contain the same integer. Muthu know exactly which numbers are on all of the coupons already sold and he would like to maximize odds of winning by purchasing two coupons. Muthu is allowed to choose which integers between 1 and P, inclusive, are on the two coupons.

Muthu knows, he is a last customer, so after he purchase his coupons, no more coupons will be purchased. Then, an integer 'i' between 1 and P, inclusive, is chosen uniformly at random. If one of Muthu's coupons is strictly closer to 'i' than all other coupons or if both of Muthu's coupons are the same distance to 'i' and strictly closer than all other coupons, then you win the offer. Otherwise, Muthu do not win the offer.

Given the integers on the M coupons purchased so far, what is the maximum probability of winning the offer Muthu can achieve by choosing the integers on Muthu's two coupons optimally?

### Constraints
- 1 ≤ T ≤ 50.
- 1 ≤ M ≤ 40.
- 1 ≤ Qi ≤ P, for all i.
- 1 ≤ P ≤ 10^8.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of two lines. The first line of a test case contains two integers M and P: the number of coupons already sold and the limit of the range of integers to collect from, respectively. The second line contains M integers Q1,Q2,…,QM, representing the integers on the coupons that have already been purchased.

### Output Format
- Print the output in a separate lines contains, the maximum win probability Muthu can achieve if Muthu choose his coupons optimally.

### Test Cases

#### Test Case 1
**Input:**
```
4
3 12
1 3 7
4 12
4 1 7 3
4 3
1 2 4 2
4 4
1 2 2 2
```
**Expected Output:**
```
Line #1: 0.58333
Line #2: 0.50000
Line #3: 0.33333
Line #4: 0.50000
```

#### Test Case 2
**Input:**
```
5
4 10
1 3 3 4
3 12
4 7 3
3 3
2 4 2
4 4
1 2 3 2
5 4
1 3 4 7 2
```
**Expected Output:**
```
Line #1: 0.70000
Line #2: 0.58333
Line #3: 0.66667
Line #4: 0.25000
Line #5: 0.50000
```

### Mandatory Keywords
- `for (i = 1; i < n; ++i)`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 275
- NLOC: 32

---

## Level 2 / Linked List / Challenge 33

### Problem Description
There are a number of trees in a forest. Each of the trees has been treated with some amount of chemical. After each day, if any tree has more chemical than the tree on its left, being low energy than the left one, it dies.

You are given the starting values of the chemical in each of the trees. Determine the number of days after which no tree dies, i.e. the time after which there is no tree with more chemical content than the tree to its left.

### Constraints
- 1 <= m <= 10^5
- 1 <= t[i] <= 10^9

### Input Format
- The first line contains an integer 'm', the size of the array 't'.
- The next line contains 'm' space-separated integers t[i].

### Output Format
- Print the output in a single line contain the number of days after which no tree dies, i.e. the time after which there is no tree with more chemical content than the tree to its left.

### Test Cases

#### Test Case 1
**Input:**
```
8
4 5 8 4 7 11 5 9
```
**Expected Output:**
```
2
```

#### Test Case 2
**Input:**
```
6
5 4 8 4 7 9
```
**Expected Output:**
```
1
```

### Mandatory Keywords
- `for`
- `if`
- `else`

### Complexity Constraints
- Cyclomatic Complexity: 7
- Token Count: 265
- NLOC: 32

---

## Level 2 / Linked List / Challenge 34

### Problem Description
There was an outburst in the Kashiwazaki-Kariwa arithmetic plant. The region of effect of outburst is represented by a power of 3. To be able to control the outburst, workers needed to increase the amount of water flowing into the reactor. Total amount of water is represented by a power of 2. After the increment you need to check whether amount of water is enough to cover the whole outbursted region.

### Constraints
- 1 <= T <= 10^5
- 10^8 <= B <= 10^16
- 10^8 <= A <= 10^16

### Input Format
- The first line contains T, number of test cases. Each following line includes two numbers B, A representing the powers of 2 and 3, representing water and outburst powers representing their corresponding regions.

### Output Format
- Print the output in a separate lines contains, TRUE if amount of water is greater than or equal to the outburst region else print FALSE.

### Test Cases

#### Test Case 1
**Input:**
```
2
1000000000 1000000000
3000000000 1000000000
```
**Expected Output:**
```
FALSE
TRUE
```

#### Test Case 2
**Input:**
```
6
169931051624517282 442627781271449319
874675929881566453 734974143455549950
945379294603004186 82002188938213491
521543410880882901 347384392012703088
366793787774505031 200724302738852984
486793787774505031 300724302738852984
```
**Expected Output:**
```
FALSE
FALSE
TRUE
FALSE
TRUE
TRUE
```

### Mandatory Keywords
- `long long int b,a;`

### Complexity Constraints
- Cyclomatic Complexity: 4
- Token Count: 115
- NLOC: 20

---

## Level 2 / Linked List / Challenge 35

### Problem Description
At NPTEL we love learning new subjects to each other! There are M workers at NPTEL, numbered from 1 to M. There are a total of S different subjects, numbered from 1 to S. Each worker knows up to 5 different subjects.

The i-th worker can guide the j-th worker if there is a subject that the i-th worker knows that the j-th worker does not know. How many ordered pairs (i, j) are there where the i-th worker can guide the j-th worker?

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ S ≤ 1000.
- 1 ≤ Di ≤ 5 for all i.
- 1 ≤ Bij ≤ S for all i and j.
- Bij ≠ Bik for all j ≠ k.
- 2 ≤ M ≤ 500.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. The first line of each test case gives the two integers M and S, which are the number of workers and the number of subjects respectively.
- The next M lines describe the subjects that each worker knows. The i-th of these lines begins with an integer Di which is the number of subjects the i-th worker knows. Then, Di integers follow on the same line. The j-th of these integers is Bij indicating that the i-th worker knows the subject Bij.

### Output Format
- Print the output in a separate lines contains the number of ordered pairs (i, j) where the i-th worker can guide the j-th worker.

### Test Cases

#### Test Case 1
**Input:**
```
5
4 100
4 70 90 100 5
1 90
1 70
3 70 90 100
3 30
4 10 11 12 13
4 10 11 12 13
5 25 26 27 28 29
3 33
4 11 12 12 13
4 10 11 12 13
5 24 25 27 28 29
4 100
4 70 90 100 5
1 80
1 70
3 80 90 100
3 32
4 10 11 12 13
4 10 11 12 13
5 25 26 27 28 29
```
**Expected Output:**
```
Line #1: 7
Line #2: 4
Line #3: 6
Line #4: 10
Line #5: 4
```

#### Test Case 2
**Input:**
```
4
4 100
4 70 90 100 5
1 90
1 70
3 70 90 100
3 30
4 10 11 12 13
4 10 11 12 13
5 25 26 27 28 29
3 33
4 11 12 12 13
4 10 11 12 13
5 24 25 27 28 29
4 100
4 70 90 100 5
1 80
1 70
3 80 90 100
```
**Expected Output:**
```
Line #1: 7
Line #2: 4
Line #3: 6
Line #4: 10
```

### Mandatory Keywords
- `for`
- `while`
- `if`

### Complexity Constraints
- Cyclomatic Complexity: 1
- Token Count: 725
- NLOC: 94

---

## Level 2 / Linked List / Challenge 36

### Problem Description
Madurai is a major city in the Indian state of Tamil Nadu with a number of villages, some of which have hotels. Villages are numbered consecutively and each has a street of 1KM length connecting it to the next village. It is not a circular route, so the first village doesn't connect with the last village. Determine the maximum distance from any village to its nearest hotel.

### Constraints
- 1 <= q <= 10^6
- 1 <= p <= q
- There will be at least 1 village with a hotel
- No village has more than one hotel.

### Input Format
- The first line consists of two space-separated integers, q and p.
- The second line contains 'p' space-separated integers, the indices of each village that has a hotel. These values are unordered and distinct.

### Output Format
- Print the output in a single line contains, find the maximum distance from any village to its nearest hotel.

### Test Cases

#### Test Case 1
**Input:**
```
6 6
0 1 2 4 3 4
```
**Expected Output:**
```
1
```

#### Test Case 2
**Input:**
```
5 3
1 0 6
```
**Expected Output:**
```
2
```

### Mandatory Keywords
- `for`

### Complexity Constraints
- Cyclomatic Complexity: 3
- Token Count: 200
- NLOC: 25

---

## Level 2 / Linked List / Challenge 37

### Problem Description
Ram's friend is recently done with Hotel management course and now she wants to boast in front of his college friends by making a nice cake. She has come up with an amazing cake called Strawberry Velvet. To make the dish, she has already collected Strawberries numbered 1 to B. She has also decided to connect each distinct and unordered pair of Strawberries with a sweet strand, made of jaggery powder. Sweet strands are either Pink or White, depending on the jaggery powder content in them. Each White strand contains one units of jaggery powder, and each Pink strand contains two units of jaggery powder.

But it turns out that the dessert is now too tasty, and these days his college friends are dieting and they usually like dishes with less jaggery powder. She is really confused now and comes to your rescue. Can you help her find out which all sweet strands she should remove such that each pair of Strawberries is connected directly or indirectly via a jaggery powder strand, and the dish has the minimum possible jaggery powder content?

### Constraints
- 1 ≤ T ≤ 50
- A ≤ B*(B-1)/2
- 1 ≤ Pi ≤ B, for all i.
- 1 ≤ Qi ≤ B, for all i.
- Pi ≠ Qi, for all i.
- Every {Pi, Qi} is distinct.
- 1 ≤ B ≤ 100.
- 0 ≤ A ≤ 100.

### Input Format
- The first line of input gives the number of test cases, T.
- Each test case begins with a line containing two integers B and A, the number of Strawberries and the number of white sweet strands, respectively.
- Then A lines follow, each describing a pair of Strawberries connected to a white strand. The i-th line contains cherries numbered Pi and Qi, it indicates that Pi and Qi Strawberry are connected with a white strand of jaggery powder.
- Note: Any other pair of Strawberries not present in the input means that they are connected by a Pink strand.

### Output Format
- Print the output in a separate lines contains minimum possible jaggery powder content.

### Test Cases

#### Test Case 1
**Input:**
```
4
2 1
1 4
3 1
2 6
4 1
3 6
4 1
4 7
```
**Expected Output:**
```
Line #1: 1
Line #2: 3
Line #3: 5
Line #4: 5
```

#### Test Case 2
**Input:**
```
3
2 1
1 3
3 1
2 3
4 1
3 4
```
**Expected Output:**
```
Line #1: 1
Line #2: 3
Line #3: 5
```

### Mandatory Keywords
- `while`
- `for`
- `if`

### Complexity Constraints
- Cyclomatic Complexity: 2
- Token Count: 325
- NLOC: 58

---

## Level 2 / Linked List / Challenge 38

### Problem Description
Raguvaran has construct a Apartment. The Apartment is made up of M sections, numbered from 1 to M from left to right. Since he had construct the Apartment in a hurry, not all the sections are of the same height. The i-th section of Apartment is Pi metres tall.

Raguvaran would like to fix his Apartment by reconstructing some of the sections. Raguvaran can set the height of each section he reconstructs to any height he chooses.

Raguvaran will be happy if the number of indices i (1 ≤ i < M) where Pi ≠ Pi+1 is not more than K.

What is the fewest sections of the Apartment Raguvaran needs to reconstruct so that he will be excitement?

### Constraints
- 1 ≤ T ≤ 100.
- 1 ≤ Pi ≤ 1000, for all i.
- 0 ≤ K ≤ M.
- 2 ≤ M ≤ 100.

### Input Format
- The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the two integers M and K, the number of sections of Apartment and the maximum number of changes in height between adjacent sections, respectively.
- The second line contains M integers. The i-th integer is Pi, the height of the i-th section of Apartment.

### Output Format
- Print the output in a separate lines contains the fewest sections that Raguvaran has to reconstruct so that he will be excitement.

### Test Cases

#### Test Case 1
**Input:**
```
3
7 3
300 100 300 300 100 200 500
5 2
100 100 100 2
7 3
10 20 40 10 10 30 30
```
**Expected Output:**
```
Line #1: 1
Line #2: 0
Line #3: 0
```

#### Test Case 2
**Input:**
```
2
8 2
300 100 300 300 200 100 700 600
5 2
100 100 100 100 4
```
**Expected Output:**
```
Line #1: 3
Line #2: 0
```

### Mandatory Keywords
- `for`

### Complexity Constraints
- Cyclomatic Complexity: 1
- Token Count: 720
- NLOC: 81

---

## Level 2 / Linked List / Challenge 39

### Problem Description
There are 'P' room in a row indexed from 1 to P. At a time, 2 people enter the kitchen. The level of uncleanness of each room is '0' initially and it increases by 1 after it is used each time. The first person occupies the first room with the lowest level of uncleanness moving from 1 to P. The second person occupies the room with the lowest level of uncleanness moving from P to 1. The next two people enter the room when the first two people have left. Find the index of room and level of uncleanness for the Q-th person.

Note: In case 'Q' is odd, the last person walks into the kitchen alone and occupies the least unclean room moving from 1 to P.

### Constraints
- 1 <= T <= 20
- 1 <= P <= 45000
- 1 <= Q <= 10^6

### Input Format
- The first line contains T, the number of test cases. Each test case consists of one line containing P, the number of rooms, and Q, the person to enter the room, seperated by space.

### Output Format
- Print the output in a separate lines containing the index of the room used by Q and its level of uncleanness.

### Test Cases

#### Test Case 1
**Input:**
```
3  
12 3  
5 9  
4 25 
```
**Expected Output:**
```
2 0
2 1
1 6
```

#### Test Case 2
**Input:**
```
4  
15 4  
6 8  
3 17
4 7 
```
**Expected Output:**
```
14 0
6 1
1 5
2 1
```

### Mandatory Keywords
- `while`
- `if`
- `else`

### Complexity Constraints
- Cyclomatic Complexity: 9
- Token Count: 180
- NLOC: 24

---

## Level 2 / Linked List / Challenge 40

### Problem Description
Ram has given two integer arrays X and Y to Sakthi. Sakthi wants to find the Z that minimize the following equation. Print the Answer.

Answer:
$\sum_{i=1}^M |(X_i + Z) - Y_i|$

### Constraints
- 1 <= M <= 10^5
- 1 <= Xi, Yi <= 10^9

### Input Format
- First line contains M, Size of arrays
- Second line contains M integer: X1, X2, X3,...XM
- Third line contains M integer: Y1, Y2, Y3,..YM

### Output Format
- Print the output in a single line contains, The minimum value of the equation.

### Test Cases

#### Test Case 1
**Input:**
```
3
5 3 2
5 1 3
```
**Expected Output:**
```
3
```

#### Test Case 2
**Input:**
```
4
2 4 3 1
1 1 0 3
```
**Expected Output:**
```
7
```

### Mandatory Keywords
- `int answer = 0;`

### Complexity Constraints
- Cyclomatic Complexity: 5
- Token Count: 190
- NLOC: 25
```