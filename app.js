// Creating the table for onload

const setUpCells = 36;

document.body.onload = addElements;

function addElements () {

  for (let i = 0; i < setUpCells; i++){
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode(`${Math.floor(Math.random() * 100)}`);
    newDiv.appendChild(newContent);
    const gridWrapper = document.querySelector('.grid-wrapper');
    gridWrapper.appendChild(newDiv);
  }
  
}

