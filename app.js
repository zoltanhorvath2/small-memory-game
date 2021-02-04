// CREEATING THE TABLE FOR ONLOAD

const setUpCells = 36;
const halfOfCells = setUpCells/2;
const cardsChosen = [];
let score = 0;

arrayMaker = () => {

  const cells = [];

  for (let i = 1; i <= halfOfCells; i++){
    cells.push(i);
    cells.push(i);
  }
  shuffle(cells);
  return cells;
};


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
};

tableMaker();


// FLIPPING THE CARDS

flip = (e) => {
    const clicked = e.target; 
    const parent = clicked.parentNode; 
    parent.classList.add('clicking');
    if (cardsChosen.length < 2){
      cardsChosen.push(parent.classList[1]);
      check();
    } else {
      parent.classList.remove('clicking');
    }
};

// CHECKING THE CARDS

check = () => {
    [ first, second ] = cardsChosen;
    if (first === second){
      const firstChosen = document.querySelectorAll(`.${first}`);
      firstChosen.forEach((item) => item.classList.add('hide'));
      cardsChosen.length = 0;
      score++;
      const scoreCounter = document.querySelector('.score-counter');
      scoreCounter.innerHTML = `Score: ${score}`;
    } else if (first && second) {
      setTimeout(() => {
        const chosen = document.querySelectorAll(`.clicking`);
        chosen.forEach((item) => item.classList.remove('clicking'));
        cardsChosen.length = 0;
      }, 1000);
    }
};

  const clickable = document.querySelectorAll('.frontside');
  clickable.forEach((item) => { item.addEventListener('click', flip)});

  // RELOAD THE PAGE

  reloader = () => {
    button.classList.add('button-press');
    window.location.reload();
  }

  const button = document.querySelector('.reload-button');
  button.addEventListener('click', reloader);

  



  













