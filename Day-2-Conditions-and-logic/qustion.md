## 🎯 **Day 2 – Conditions & Logic**

### 🧩 **Core Concept Focus**

* Conditional statements (`if`, `else if`, `else`)
* Comparison and logical operators
* Decision making based on different inputs
* Strengthening flow-of-control understanding

---

### 🧠 **Questions List**

1. **Find the Maximum of Three Numbers**

   * Input: `10 20 5`
   * Output: `20`
   * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*

**Answer** : 
```bash
let a = 20;
let b = 10; 
let c = 50;
let max;

if (a >= b && a >= c) {
    max = a;
}
else if (b >= a && b >= c) {
    max = b;
}
else {
    max = c;
}
console.log("The maximum number is: " + max);

```

---

2. **Check if a Number is Positive, Negative, or Zero**

   * Input: `-9`
   * Output: `Negative`
   * ✨ *Practices multi-branch conditions and comparison operators.*

   **Answer** :

   ````bash
    let number = -9;
    let result;
    if (number > 0) {
    result = "Positive";
    }
    else if (number < 0) {
    result = "Negative";
    }
    else {
    result = "Zero";
    }
     console.log("The number is: " + result);


---


3. **Calculate Electricity Bill**

* Input: `Units = 230`
* Output: `Total Bill = ₹1500`
* ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
* Example Logic:

  * 0–100 units → ₹5 per unit
  * 101–200 units → ₹7 per unit
  * 201–300 units → ₹10 per unit
  * Above 300 units → ₹12 per unit
* 🔍 *Teaches:* cumulative calculation + condition chaining.

**Answer** :

```bash
let unit = 230;
let bill = 0;
if (unit <= 100) {
    bill = unit * 5;
}
else if (unit <= 200) {
    bill = unit * 7;
}
else if (unit <= 300) {
    bill = unit * 10;
}
else {
    bill = unit * 12;
}

console.log("your current bill is : " + bill);

```

---

4. **Check if a Character is a Vowel or Consonant**

   * Input: `e`
   * Output: `Vowel`
   * ✨ *Combines logical OR (`||`) operator and string comparisons.*

   **Answer** :
   ```bash
   let char = 'e';
   let result;

   if(char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U'){
    result = "Vowel";
   }
   else {
    result = "Consonant";
   }

   console.log("The character is: " + result);

   ```

---

5. **Check if a Year is a Leap Year**

   * Input: `2024`
   * Output: `Leap Year`
   * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

   A year is a **leap year** if it satisfies these conditions:

   1. It is **divisible by 4**,  
      ➜ `year % 4 === 0`
   2. **But not divisible by 100**,  
      ➜ `year % 100 !== 0`
   3. **Unless** it is also **divisible by 400**,  
      ➜ `year % 400 === 0`

   🧩 **In Simple Words**
   - If a year is divisible by **4**, it’s a leap year.  
   - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.  
   - **But** if it’s divisible by **400**, it **is** a leap year again.


**Answer** :

```bash

let year = 2024;
let result;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) { 
    result = "Leap Year";
}
else {
    result = "non leap year";
}

console.log(result);

```
---

### 🏠 **Homework / Practice Challenge**

1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

   * Input: `A`
   * Output: `Uppercase Letter`
   * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
   * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.


   **Answer** :

   ```bash
   function checkCharacterType(char) {
   if (char.length !== 1) {
     return "Please provide a single character.";
   }

   if (/[A-Z]/.test(char)) {
    return "Uppercase Letter";
   } else if (/[a-z]/.test(char)) {
    return "Lowercase Letter";
   } else if (/[0-9]/.test(char)) {
    return "Digit";
   } else {
    return "Special Character";
   }
   }
    let result = checkCharacterType('#');
    console.log("The character type is: " + result);

   ```

---

2. **Check Triangle Type Using Sides and Angles**

* **Input:** `Sides = 3, 4, 5`
* **Output:** `Right-Angled Triangle`
* ✨ *Combines geometric reasoning + Pythagoras theorem check.*
* Example Logic:

  * If `a² + b² = c²` → Right-angled
  * Else if all sides equal → Equilateral
  * Else if any two equal → Isosceles
  * Else → Scalene

---

**Answer** :

```bash
function checkTriangleType(a, b, c) {
  // Sort sides to ensure c is the largest
  const sides = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = sides;

  
  if (x + y <= z) {
    return "Not a valid triangle";
  }

  if (x === y && y === z) {
    return "Equilateral Triangle";
  } else if (x === y || y === z || x === z) {
    return "Isosceles Triangle";
  } else if (Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(z, 2)) {
    return "Right-Angled Triangle";
  } else {
    return "Scalene Triangle";
  }
}

let triangleType = checkTriangleType(3, 4, 5);
console.log("The triangle type is: " + triangleType);

```

3. **Calculate Income Tax Based on Slabs**

* **Input:** `Income = ₹7,50,000`
* **Output:** `Tax = ₹52,500`
* ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
* Example Logic (example slabs):

  * Up to ₹2,50,000 → No tax
  * ₹2,50,001 – ₹5,00,000 → 5%
  * ₹5,00,001 – ₹10,00,000 → 20%
  * Above ₹10,00,000 → 30%
* 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*

---

4. **Calculate Electricity Bill**

* Input: `Units = 230`
* Output: `Total Bill = ₹1500`
* ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
* Example Logic:

  * 0–100 units → ₹5 per unit
  * 101–200 units → ₹7 per unit
  * 201–300 units → ₹10 per unit
  * Above 300 units → ₹12 per unit
* 🔍 *Teaches:* cumulative calculation + condition chaining.