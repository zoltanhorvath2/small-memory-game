// Creating the table for onload

const setUpCells = 36;

document.body.onload = addElements;

function addElements () {

  for (let i = 0; i < setUpCells; i++){
    const newDiv = document.createElement('div');
    const shuffle = () => {
      const randomize = Math.floor(Math.random() * 10) * 2;
        return randomize;
    };
    const newContent = document.createTextNode(`${shuffle()}`);
    newDiv.appendChild(newContent);
    const gridWrapper = document.querySelector('.grid-wrapper');
    gridWrapper.appendChild(newDiv);
    newDiv.classList.add('grid-item');

  }
  
}


// Clicking on elements

const clicked = document.addEventListener('click', (event) => {
   console.log(event);
});
