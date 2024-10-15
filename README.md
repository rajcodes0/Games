# Games
This is my first ever project after deciding to code.



# Tic-Tac-Toe Game

## Overview

This is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3x3 grid, aiming to get three of their marks in a row (horizontally, vertically, or diagonally).

## Table of Contents

1. [Getting Started](#getting-started)
2. [Game Structure](#game-structure)
3. [How to Play](#how-to-play)
4. [Game Logic](#game-logic)
5. [Styling](#styling)
6. [Contributing](#contributing)
7. [License](#license)

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tictactoe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tictactoe
   ```

3. Open `index.html` in your web browser to play the game.

## Game Structure

The game consists of three main files:

- **`index.html`**: The structure of the web page.
- **`main.css`**: The styling for the game elements.
- **`main.js`**: The JavaScript that contains the game logic.

### HTML (`index.html`)

The HTML file sets up the layout of the game, including the grid for the Tic-Tac-Toe board and buttons for resetting or starting a new game.

### CSS (`main.css`)

The CSS file styles the game, giving it a colorful background, defining the size of the game boxes, and styling the buttons.

### JavaScript (`main.js`)

The JavaScript file handles user interactions, game state, and the logic for checking winners.

## How to Play

1. **Start the Game**: Open the game in your browser.
2. **Make Your Move**: Click on an empty box to place your mark (either "O" or "X").
3. **Winning the Game**: The first player to get three of their marks in a row wins!
4. **Draw**: If all boxes are filled and no one has won, the game ends in a draw.
5. **Reset the Game**: Click the "Reset Game" button to clear the board and start over.

## Game Logic

- The game keeps track of turns and disables boxes after they are clicked to prevent overwriting.
- The game checks for winning combinations after each move.
- If all boxes are filled without a winner, a draw message is displayed.
- Players can start a new game or reset the current game at any time.

### Key Functions

- **`resetGame()`**: Resets the game state and clears the board.
- **`checkWinner()`**: Checks if there is a winner after each turn.
- **`gameDraw()`**: Displays a message when the game ends in a draw.

## Styling

The CSS file uses flexbox to center the game board and style the boxes and buttons with colors and shadows for a fun look. 

### Example CSS Rules

```css
body {
    background-color: rgb(216, 30, 219);
    text-align: center;
}

.box {
    background-color: aqua;
    color: rgb(222, 18, 18);
    font-size: 8vmin;
}
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repository and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

