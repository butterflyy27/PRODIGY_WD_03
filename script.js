let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function cellClicked(cell) {
  const cellIndex = parseInt(cell.id);
  if (gameState[cellIndex] === '' && gameActive) {
    gameState[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    checkWin();
    checkDraw();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('message').textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      gameState[a] !== '' &&
      gameState[a] === gameState[b] &&
      gameState[b] === gameState[c]
    ) {
      gameActive = false;
      document.getElementById('message').textContent = `Player ${gameState[a]} Wins!`;
      return;
    }
  }
}

function checkDraw() {
  if (!gameState.includes('') && gameActive) {
    gameActive = false;
    document.getElementById('message').textContent = 'It\'s a Draw!';
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('message').textContent = `Player ${currentPlayer}'s Turn`;
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
  });
}
