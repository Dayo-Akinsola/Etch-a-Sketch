const container = document.querySelector('.container');

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}



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
        squares.forEach(square => {
            square.style.backgroundColor = 'white';
            square.classList.remove('randomColor');  
            square.classList.remove('blackTransition');          
        });
    })
}
resetGrid();


//Changes the color of a box when hovered.
const colorChangeBlack = () =>{
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', (event) => {
    event.target.classList.remove("randomColor");
    event.target.classList.add("blackTransition");
}))
}

//Changes color of a box to a random color when hovered.
const colorChangeRandom = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', (event) => {
        let randomColor = getRandomColor();
        event.target.classList.add("randomColor");
        event.target.style.backgroundColor = randomColor;
    }))
}

const colorChanges = [colorChangeBlack, colorChangeRandom];

// variable to control which color mode the hover is on
let color = 0;

const changeColorChoice = () => {
    const rainbowButton = document.querySelector('#rainbowMode');
    const blackButton = document.querySelector('#blackMode');

    rainbowButton.addEventListener('click', (event) => {
        console.log(event.target);
        color = 1;
        console.log(color)
        colorChanges[color]();
    })

    blackButton.addEventListener('click', (event) => {
        console.log(event.target);
        color = 0;
        console.log(color);
        colorChanges[color]();
    })
}

changeColorChoice();

const dimensionsButton = document.querySelector('#gridDimensions');
dimensionsButton.addEventListener('click', (event) => {
    dimensionsChoice = prompt('Please enter a number between 2 - 100.');
    while (parseInt(dimensionsChoice) > 100 || parseInt(dimensionsChoice) < 2 || isNaN(dimensionsChoice)){
        dimensionsChoice = prompt('Please enter an number between 2 - 100.')
    }
    if (dimensionsChoice){
        createGrid(parseInt(dimensionsChoice));
    }
    colorChanges[color]();
    resetGrid();
})

colorChanges[color]();
















