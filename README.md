# React Counter App

A simple and clean **Counter Application** built using **React** and styled with **Bootstrap**.  
This project demonstrates the fundamentals of React state management and event handling.

---

## 🚀 Features

- Increment the counter value
- Decrement the counter value
- Reset the counter to zero
- Clean and responsive UI using Bootstrap
- Centered card layout with modern styling

---

## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6)**
- **Bootstrap**
- **CSS**

---

## 📚 Concepts Used

### 1. React Functional Components

- Built the app using a functional component (`App`).

### 2. `useState` Hook

- Used React’s `useState` hook to manage the counter value.

```js
const [count, setCount] = useState(0);
```

### 3. Event Handling in React

- Handled button click events using `onClick`.

```js
onClick={() => setCount(count + 1)}
```

### 4. Conditional State Updates

- Updated state dynamically for increment, decrement, and reset actions.

### 5. JSX

- Used JSX syntax to structure UI elements and bind JavaScript expressions.

### 6. Bootstrap Utility & Component Classes

- Used Bootstrap classes for layout, spacing, alignment, and styling:
  - `container`, `vh-100`
  - `d-flex`, `justify-content-center`, `align-items-center`
  - `card`, `shadow`, `btn`, `btn-success`, `btn-danger`

### 7. Component Styling

- Combined Bootstrap with custom CSS (`App.css`) and inline styles.

---

## 📂 Project Structure

```
src/
│── App.js
│── App.css
│── index.js
```

---

## ▶️ How to Run Locally

1. Clone the repository

```bash
git clone <your-repo-url>
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

---

## 📌 Learning Outcome

This project helped reinforce:

- React state management
- Handling user interactions
- Writing clean and reusable UI components
- Using Bootstrap for rapid UI development

---

## 🙌 Acknowledgements

Built as part of React learning and hands-on practice.

---

⭐ If you like this project, feel free to star the repository!
