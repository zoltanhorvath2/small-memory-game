// Creating the table for onload

const setUpCells = 36;
const halfOfCells = setUpCells/2;

arrayMaker = () => {

  const cells = [];

  for (let i = 1; i <= halfOfCells; i++){
    cells.push(i);
    cells.push(i);
  }
  shuffle(cells);
  return cells;
}

tableMaker = () => {

  const shuffledArr = arrayMaker();

  for (let i = 0; i < shuffledArr.length; i++){
    // Creating the grid-items and the content

    const newDiv = document.createElement('div');
    const wrapper = document.querySelector('.grid-wrapper');
    wrapper.appendChild(newDiv);
    const newContent = document.createTextNode(`${shuffledArr[i]}`);
    newDiv.appendChild(newContent);

    // Add the .grit-item class to it
    
    newDiv.classList.add('grid-item');

  }
}

tableMaker();




