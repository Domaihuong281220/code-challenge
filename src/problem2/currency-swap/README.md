# 💱 Currency Swap Form

A modern, responsive currency swap interface built with **React + TypeScript + Vite** and styled with **TailwindCSS (via CDN)**.
It fetches real-time token prices and allows users to swap assets from one currency to another with live conversion rates.

---

## 🚀 Features

* **Live token prices** fetched from:
  [https://interview.switcheo.com/prices.json](https://interview.switcheo.com/prices.json)
* **Token selection** for both "From" and "To" currencies
* **Real-time conversion** based on selected tokens and amount
* **Input validation**:

  * Prevents swapping the same token
  * Amount must be greater than zero
* **Loading simulation** for swap action
* **Responsive design** with TailwindCSS

---

## 📦 Tech Stack

* [Vite](https://vitejs.dev/) – Fast build tool for modern web apps
* [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) – Component-based UI development
* [TailwindCSS (CDN)](https://tailwindcss.com/docs/installation/play-cdn) – Utility-first styling
* [Axios](https://axios-http.com/) – API requests

---

## 🛠 Installation & Setup

### 1️⃣ Go straight to the project directory

```bash
cd currency-swap
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

This will start the app at:

```
http://localhost:5173
```

---

## 📄 Project Structure

```
currency-swap/
├── index.html        # Entry HTML file (Tailwind CDN added here)
├── src/
│   ├── App.tsx       # Main app logic & UI
│   ├── main.tsx      # React entry point
│   ├── components/
│   │   └── TokenSelector.tsx  # Dropdown selector for tokens
├── package.json
```

---

## 🌐 API Details

* **Prices Endpoint:**
  Returns an array of `{ currency, price }` objects.
  Example:

  ```json
  [
    { "currency": "SWTH", "price": 0.005 },
    { "currency": "ETH", "price": 1600 }
  ]
  ```

---

## 💡 How It Works

1. On load, the app fetches the token prices.
2. User selects **From** and **To** tokens.
3. User enters an amount to swap.
4. The converted value is calculated instantly using:

   ```
   converted = (amount * fromPrice) / toPrice
   ```
5. Clicking **Swap** triggers a loading state and shows a success alert.

---

## 📜 License

This project is licensed under the MIT License.
