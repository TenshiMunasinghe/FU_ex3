function main() {
  console.log('Rolling dice...');
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Dice 1: ${dice1}`);
  console.log(`Dice 2: ${dice2}`);
  const total = dice1 + dice2;
  console.log(`Total value: ${total}`);
  if (total > 7) {
    console.log('You won!');
  } else {
    console.log('You lost.');
  }
}

main();
