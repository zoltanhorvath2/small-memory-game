// Creating the table for onload

const setUpCells = 36;
const halfOfCells = setUpCells/2;

function arrayMaker() {
  const cells = [];

  for (let i = 1; i <= halfOfCells; i++){
    cells.push(i);
    cells.push(i);
  }
  shuffle(cells);
  return cells;
}

// tableCreator returns an array with random elements, we have to add them to the grid

const shuffledArr = arrayMaker();

for (let i = 0; i < shuffledArr.length; i++){
  const newDiv = document.createElement('div');
  const wrapper = document.querySelector('.grid-wrapper');
  wrapper.appendChild(newDiv);
  
}

// We have to wire up the grid

// Clicking on elements

