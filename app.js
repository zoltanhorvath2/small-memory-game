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
          <div class="card item-${shuffledArr[i]}">
            <div class="backside">${shuffledArr[i]}</div>
            <div class="frontside"></div>
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

  const checker = [];
  clickable.forEach((item) => {
    item.addEventListener('click', (e) => {
      const clicked = e.target; 
      const parent = clicked.parentNode; 
      parent.classList.add('clicking'); 
      
      const selected = parent.classList[1];
      if (checker.length < 2){ 
        checker.push(selected);
        [ first, second ] = checker;
        if (first === second){
          firstMatch = [...document.querySelectorAll(`.${first}`)];
          [ match1, match2 ] = firstMatch;
          match1.classList.add('hide');
          match2.classList.add('hide');
          // Place of the score counter
        } else {
          setTimeout(() => {
            parent.classList.remove('clicking');
          }, 2000);
        }
      }
      else {
        parent.classList.remove('clicking');
      }


      
    });
  });
};

clicking();











