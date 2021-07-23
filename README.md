# Desafio TDD 1

An avid hiker keeps meticulous records of their hikes. During the last hike he
walked and for every step it was noted if it was an uphill, U, or a downhill, D step.
Hikes always start and end at sea level, and each step up or down represents
a unit change in altitude. We define the following terms:

 - A mountain is a sequence of consecutive steps above sea level,
   starting with a step up from sea level and ending with a step down to
   sea level.
 - A valley is a sequence of consecutive steps below sea level, starting
   with a step down from sea level and ending with a step up to sea
   level.

Given the sequence of up and down steps during a hike, find and print the number
of valleys walked through.

**Example**
path = DDUUUUDD
The hiker first enters a valley 2 units deep. Then they climb out and up onto a
mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

**Function Description**
Complete the countingValleys function in the editor below.
countingValleys has the following parameter(s):

 - string path: a string describing the path

**Returns**

 - int: the number of valleys traversed

**Sample Input**

UDDDUDUU

**Sample Output**

1

**Explanation**

If we represent _ as sea level, a step up as / , and a step down as \ , the hike
can be drawn as:

![exemple image](https://drive.google.com/u/0/uc?id=1uo6doXlyYWHZ1j1aL75Fcuc10clQjZWC&export=download)

The hiker enters and leaves one valley.

**Other Samples**

UDDDUDUU = 1

DDUUUUDD = 1

DDUUDDUDUUUD = 2

DUDDDUUDUU = 2

DDUUUDDDUUUDDDUUUDDU = 4