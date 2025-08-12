# Sum to N Implementations in JavaScript

This project contains **three different implementations** of the `sum_to_n(n)` function, which calculates the sum of all integers from 1 up to `n`.

Example:

```
sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15
```

---

## 📂 Files

* **`sum_to_n.js`** — Contains 3 unique implementations:

  1. **Formula-based** (O(1))
  2. **Iterative loop** (O(n))
  3. **Recursive** (O(n) time, O(n) stack)
* **`test/test_sum_to_n.js`** — Mocha-based tests for all implementations.

---

## 📜 Implementations

### 1️⃣ Formula Method (`sum_to_n_a`)

Uses the mathematical formula:

```
sum = n * (n + 1) / 2
```

Runs in constant time **O(1)**.

### 2️⃣ Iterative Loop (`sum_to_n_b`)

Loops from 1 to `n` and accumulates the sum in a variable.
Time complexity: **O(n)**

### 3️⃣ Recursive Method (`sum_to_n_c`)

Calls itself until `n` reaches 1, adding each number along the way.
Time complexity: **O(n)**, space complexity: **O(n)**.

---

## 🚀 Running the Script

Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Go straight to the project directory

```bash
cd problem1
```

Then run the script with:
```

### 2. Run with default `n=5`

```bash
node sum_to_n.js
```

**Expected output:**

```
n = 5
sum_to_n_a: 15
sum_to_n_b: 15
sum_to_n_c: 15
```

### 3. Run with a custom number

```bash
node sum_to_n.js 10
```

Expected:

```
n = 10
sum_to_n_a: 55
sum_to_n_b: 55
sum_to_n_c: 55
```

---

## 🧪 Testing

This project uses **Mocha** for testing.


### 1. Run the tests

```bash
npx mocha
```

Expected:

```
  sum_to_n functions
    ✓ sum_to_n_a(5) should return 15
    ✓ sum_to_n_b(5) should return 15
    ✓ sum_to_n_c(5) should return 15
    ...
```

---

## 📌 Notes

* Recursive method may fail for very large `n` due to stack overflow.
* Formula method is most efficient.
* Input should be a positive integer within safe limits (`Number.MAX_SAFE_INTEGER`).

---

## 📄 License

MIT License — free to use and modify.
