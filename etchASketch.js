const container = document.querySelector('.container');

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

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

//Event listener to change grid dimensions
const changeSize = () => {
    colorChanges[color]();
    const sliders = document.querySelectorAll('.resize input');
    sliders.forEach(slider => {
        slider.addEventListener('input', (event) => {
            if (event.target.id === 'gridSize'){
                createGrid(parseInt(event.target.value));
                document.querySelector('#dimensions p').textContent = `${event.target.value} x ${event.target.value}`;
            }
        })
    })

}

//Event listener to change line thickness
const changeLineThickness = () => {
    const sliders = document.querySelectorAll('.resize input');
    const squares = document.querySelectorAll('.square');

    sliders[1].addEventListener('input', (event) => {
        squares.forEach(square => {
            square.style.borderWidth = `${event.target.value}px`;
        })
            if (event.target.value === '1'){
                document.querySelector('#lineThickness p').textContent = `${event.target.value} pixel`
            }
            else{
                document.querySelector('#lineThickness p').textContent = `${event.target.value} pixels`
            }
            sliders[1].value = event.target.value;
            console.log(event.target);
            console.log(sliders[1].value);
    })
}

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
        color = 1;
        blackButton.classList.remove('clicked');
        rainbowButton.classList.add('clicked');
        colorChanges[color]();
    })

    blackButton.addEventListener('click', (event) => {
        color = 0;
        rainbowButton.classList.remove('clicked');
        blackButton.classList.add('clicked');
        colorChanges[color]();
    })
}



// Creates a intxint grid
const createGrid = (int) => {
    const squares = document.querySelectorAll('.square');
    const sliders = document.querySelectorAll('.resize input');
    sliders[1].value = 1;
    document.querySelector('#lineThickness p').textContent = '1 pixel'
    squares.forEach(square => square.remove());
    for (let i = 0; i < int*int; i++){
        let div = document.createElement('div');
        div.classList.add("square");
        const container = document.querySelector('.container');
        container.style.gridTemplateColumns = `repeat(${int}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${int}, 1fr)`;
        container.appendChild(div);
    }
    //Function added here so event listener can still fire when the grid dimensions are changed
    changeLineThickness();
    colorChanges[color]();
    resetGrid();


}




let dimensionsChoice = 16;
createGrid(dimensionsChoice);



resetGrid();




changeColorChoice();
changeLineThickness();

changeSize();

colorChanges[color]();
















