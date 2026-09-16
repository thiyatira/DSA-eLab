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
