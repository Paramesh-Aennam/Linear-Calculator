# 🧮 Linear Calculator ( ‼️ Not BODMASS Fashioned ‼️ )

A simple, stylish, and functional web-based calculator that supports linear arithmetic expressions. Built with **HTML**, **CSS**, and **JavaScript** — no external libraries or frameworks.

## 🚀 Live Demo

> [🔗 Try it out on GitHub Pages](https://your-username.github.io/Linear-Calculator/)  
> *(Replace with your GitHub Pages link if you deploy it)*

---

## 📦 Features

- ✅ Basic arithmetic operations: `+`, `-`, `x`, `/`, `%`
- ✅ Input queue display
- ✅ Clear (`AC`) and backspace (`⌫`) functionality
- ✅ Error handling for invalid expressions
- ✅ Responsive layout using CSS Grid
- ✅ Minimalist and customizable UI

---

## 💻 How It Works

### Input
- Clicking a button appends the symbol to an internal queue.
- Pressing `=` evaluates the queue left to right (linear evaluation without operator precedence).

### Evaluation Logic
- The JavaScript parses the queue in order:
  - Numbers are grouped together if entered consecutively.
  - Operators are applied sequentially.
  - Errors are handled (e.g., multiple operators in a row, or starting with an operator).

---

## 🛠️ Technologies Used

- **HTML5** – UI layout and structure
- **CSS3** – Styling with CSS variables and responsive design
- **JavaScript (Vanilla)** – Functional logic for parsing and evaluating expressions

---

## 📁 Folder Structure

/Linear-Calculator
│
├── index.html # Main HTML page
├── styles.css # Styling for layout and buttons
└── script.js # Core calculator logic


---

## 🚧 Limitations & Future Improvements

- No support for operator precedence (e.g., `2 + 3 x 4` is evaluated linearly)
- No decimal or floating point support yet
- No keyboard input handling

### Planned Enhancements:
- Add support for parentheses and floating-point numbers
- Implement proper operator precedence using expression parsing
- Allow keyboard-based input in addition to buttons

---

## 🧑‍💻 Author

**Paramesh Aennam**  
Feel free to contribute or fork the project!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).