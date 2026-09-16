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
