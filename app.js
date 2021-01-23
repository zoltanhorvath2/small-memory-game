// CREEATING THE TABLE FOR ONLOAD

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
    // Creating the cell-wrappers and the grid-items
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div class="wrapper">
          <div class="card">
            <div class="backside">${shuffledArr[i]}</div>
            <div class="frontside" id=${shuffledArr[i]}></div>
          </div>
        </div>
    `;
    newDiv.classList.add('cell-container');
    const generalWrapper = document.querySelector('.grid-wrapper');
    generalWrapper.appendChild(newDiv);
  }
}

tableMaker();


// CHECKING AND HIDING THE PAIRS

function clicking() {

  const clickable = document.querySelectorAll('.frontside');

  clickable.forEach((item) => {
    item.addEventListener('click', (e) => {
      // Get access to the backside on click
      const clicked = e.target; // Clicked element
      const parent = clicked.parentNode; 
      parent.classList.add('clicking'); // Add a class to the clicked element
    });
  });
  
};

clicking();











