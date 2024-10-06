let gameLoop = 1;
let player1Score = 0;
let player2Score = 0;

alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka dari 1-3
dan kamu akan bermain dalam 5 ronde
player yang berhasil mengumpulkan poin terbanyak akan menang
SELAMAT BERMAIN!!!`);

function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

while (gameLoop <= 5) {
  let randomNumber = generateRandomNumber();
  const player1Guess = prompt('Player 1 Masukkan Angka');
  const player2Guess = prompt('Player 2 Masukkan Angka');

  if (player1Guess == player2Guess) {
    alert('tidak boleh memasukkan angka yang sama!');
    confirm('ulangi?');
  } else if (player1Guess < 1 || player1Guess > 3) {
    alert('harus memasukkan angka antara 1 - 3');
    confirm('ulangi?');
  } else if (player2Guess < 1 || player2Guess > 3) {
    alert('harus memasukkan angka antara 1 - 3');
    confirm('ulangi?');
  } else {
    if (player1Guess == randomNumber) {
      alert('Player 1 Benar!');
      player1Score += 1;
    } else if (player2Guess == randomNumber) {
      alert('Player 2 Benar');
      player2Score += 1;
    } else {
      alert('tidak ada yang benar!');
    }

    alert(`nilai yang dicari ${randomNumber}
    skor player 1 : ${player1Score}
    skor player 2 : ${player2Score}`);

    if (gameLoop < 5) {
      confirm(`Ronde ${gameLoop + 1}?`);
    }

    gameLoop++;

    if (gameLoop == 6) {
      if (player1Score > player2Score) {
        alert('Good job Player 1');
      } else {
        alert('Good job Player 2');
      }
    }
  }
}
