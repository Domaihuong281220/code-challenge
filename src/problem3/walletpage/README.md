# WalletPage – Next.js + TypeScript

A small React/Next.js project that displays wallet balances, sorted by blockchain priority, with live USD values.

---

## 🚀 Features

* Written in **React** + **TypeScript**
* Uses **Next.js** for routing and SSR
* Wallet balances are:

  * **Filtered** (removes empty balances)
  * **Sorted** (by blockchain priority)
  * **Formatted** (decimal amounts + USD conversion)
* Optimized with `useMemo` to avoid unnecessary recalculations
* Clean folder structure for easy scaling

---

## 📦 Tech Stack

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)

---

## 🛠 Installation & Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to see the app.

---

## 📂 Project Structure

```
src/
  components/
    WalletPage.tsx
    WalletRow.tsx
  hooks/
    useWalletBalances.ts
    usePrices.ts
  pages/
    index.tsx
    _app.tsx
public/
README.md
package.json
```

---

## 🧠 From Problem to Solution

**Original Problem:**
Given a `WalletPage` React component (TypeScript + Hooks) with multiple inefficiencies and anti-patterns, refactor it for performance, readability, and maintainability.

**Issues Found in Original Code:**

1. `getPriority` was recalculated repeatedly inside `filter` and `sort` instead of reusing results.
2. Used an undefined variable `lhsPriority` in filtering.
3. Filter logic was inverted — included zero balances instead of excluding them.
4. `formattedBalances` was computed but never used.
5. `any` used for `blockchain` instead of proper TypeScript types.
6. Duplicate logic — `getPriority` called multiple times for same values.
7. Used array `index` as React `key` (bad for dynamic lists).
8. Unnecessary renders — some derived values weren’t memoized.

**Refactoring Steps Taken:**

* Replaced `switch` with a **priority map** for cleaner lookups.
* Used **`useMemo`** to compute filtered, sorted, and formatted balances in one pass.
* Added proper **TypeScript interfaces** for stronger type safety.
* Removed unused variables and dead code.
* Used **`balance.currency`** as a unique React key.
* Kept hook dependencies minimal and correct.
* Made rendering code simpler by mapping directly to `<WalletRow />`.

**Result:**

* Cleaner, easier-to-read code.
* No redundant computations.
* Stronger type safety.
* More predictable rendering.

---

## 📄 License

MIT License – feel free to use and modify.
