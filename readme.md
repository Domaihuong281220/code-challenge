# 99Tech Code Challenge #1 #
<!-- overview of the solutions and setup instructions -->
# Code Challenge Overview
This repository contains solutions to a coding challenge consisting of three problems, each demonstrating different programming skills and concepts.
## Problems Overview
1. **Sum to N Algorithm**  
   Location: `src/problem1/`  
   Implements three different approaches to calculate the sum of integers from 1 to N.
2. **Currency Swap Form**  
   Location: `src/problem2/currency-swap/`  
   A web application that allows users to swap currencies with real-time conversion and validation.
3. **Code Analysis**  
   Location: `src/problem3/`  
   Analyzes and corrects a buggy React component, demonstrating debugging and code improvement skills.
4. **Responsive design** with TailwindCSS
# 🎯 Problem Description

**Problem 1: Sum to N Algorithm**  
**Location:** `src/problem1/`

**Challenge:**  
Implement a function to calculate the sum of integers from 1 to N using three different approaches.

**Solutions Provided:**  
- **Mathematical Formula:** Uses the formula `n * (n + 1) / 2` with O(1) time complexity  
- **Simple Loop:** Iterative approach with O(n) time complexity  
- **Recursion:** Recursive solution with O(n) time and space complexity  

**Key Learning:**  
Demonstrates understanding of algorithm optimization, time complexity analysis, and multiple implementation strategies.

----
# Problem 2: Currency Swap Form  
**Location:** `src/problem2/`  

## Challenge  
Build a currency swap form based on the provided template, allowing users to swap assets from one currency to another.  

## Issues Addressed  
- **Form Validation:** Ensured all required fields are filled and valid.  
- **User Experience:** Provided clear error messages for invalid input.  
- **Code Structure:** Improved readability and maintainability with modular components.  
- **Responsiveness:** Ensured proper display on different devices.  

## Solutions Provided  
- Added input validation and error handling.  
- Implemented controlled form fields with React state.  
- Used TypeScript for type safety.  
- Applied Tailwind CSS for styling without modifying the Tailwind configuration.  
- Ensured accessibility and responsiveness.  

## Key Learning  
Form handling with React, TypeScript best practices, controlled components, validation logic, and responsive UI design.

----
# Problem 3: React TypeScript Code Debugging

**Location:** `src/problem3/`


## Challenge
Identify and fix critical bugs in a React TypeScript component that displays wallet balances.

## Issues Addressed
- **Runtime Crash:** Undefined variable causing application failure.
- **Inverted Logic:** Filter logic showing wrong data (negative balances instead of positive).
- **Performance Issues:** Inefficient sorting and filtering.
- **Type Safety:** Missing TypeScript interfaces and proper typing.
- **Code Quality:** Anti-patterns and poor structure.

## Solutions Provided
- Fixed undefined variable references.
- Corrected filter logic to show positive balances only.
- Optimized performance with proper memoization.
- Added comprehensive TypeScript interfaces.
- Improved code structure and readability.

## Key Learning
Debugging skills, React best practices, TypeScript implementation, code refactoring.

-----
# 🚀 Getting Started

## Prerequisites

* **Node.js 18+** (for Problem 2 development)
* Modern web browser
* Code editor (**VS Code** recommended)

---

## Running the Solutions

### Problem 1: Algorithm Testing

```bash
cd src/problem1
node sum_to_n.js
```

### Problem 2: Web Application

```bash
cd src/problem2/currency-swap
```
npm install
npm run dev
```
This will start the app at:

```http://localhost:5173
``` 

### Problem 3: Code Analysis

```bash
cd src/problem3/walletpage
npm install
npm run dev
```

* Review `current_code.tsx` for the **original buggy code**
* Review `fix_code.tsx` for the **corrected implementation**
* Read `README.md` for detailed analysis and explanations
