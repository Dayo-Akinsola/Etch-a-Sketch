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

const container = document.querySelector('.container');
const squares = container.querySelectorAll('.square');
let dimensionsChoice = 16;
createGrid(dimensionsChoice);


//Changes the color of a box when hovered.
const colorChange = () =>{
    squares.forEach(square => square.addEventListener('mouseover', (event) => {
    event.target.classList.add("redTransition");
    console.log(event.target)
}))
}
colorChange();

const resetGrid = () => {
    const resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener('click', (event) => {
        squares.forEach(square => square.classList.remove('redTransition'))
        console.log(event.target)
    })
}
resetGrid();

const dimensionsButton = document.querySelector('#gridDimensions');

dimensionsButton.addEventListener('click', (event) => {
    dimensionsChoice = prompt('Please enter a number between 2 - 100.');
    while (parseInt(dimensionsChoice) > 100 || parseInt(dimensionsChoice) < 2){
        dimensionsChoice = prompt('Please enter an number between 2 - 100.')
    }
    createGrid(parseInt(dimensionsChoice));
})

















