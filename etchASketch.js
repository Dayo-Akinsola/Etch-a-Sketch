const container = document.querySelector('.container');

// Creates a intxint grid
const createGrid = (int) => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
    for (let i = 0; i < int*int; i++){
        let div = document.createElement('div');
        div.classList.add("square");
        const container = document.querySelector('.container');
        container.style.gridTemplateColumns = `repeat(${int}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${int}, 1fr)`;
        container.appendChild(div);
    }
}


let dimensionsChoice = 16;
createGrid(dimensionsChoice);

// Resets the colours back to white on the current grid
const resetGrid = () => {
    const resetButton = document.querySelector('#resetButton');
    const squares = document.querySelectorAll('.square');
    resetButton.addEventListener('click', (event) => {
        squares.forEach(square => square.classList.remove('randomColor'))
    })
}
resetGrid();


//Changes the color of a box when hovered.
const colorChangeBlack = () =>{
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', (event) => {
    event.target.classList.add("blackTransition");
}))
}

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

const colorChangeRandom = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', (event) => {
        let randomColor = getRandomColor();
        event.target.classList.add("randomColor");
        event.target.style.backgroundColor = randomColor;
    }))
}

const dimensionsButton = document.querySelector('#gridDimensions');
dimensionsButton.addEventListener('click', (event) => {
    dimensionsChoice = prompt('Please enter a number between 2 - 100.');
    while (parseInt(dimensionsChoice) > 100 || parseInt(dimensionsChoice) < 2 || isNaN(dimensionsChoice)){
        dimensionsChoice = prompt('Please enter an number between 2 - 100.')
    }
    if (dimensionsChoice){
        createGrid(parseInt(dimensionsChoice));
    }
    colorChangeRandom();
    resetGrid();
})

colorChangeRandom();
















