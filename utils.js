// Simple way to shuffle an array

function shuffle (arr) {
  arr.sort(() => Math.random() - 0.5);
}