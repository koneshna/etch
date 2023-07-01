let gridSize=10
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createGrid = (dimensions) => {
for ( let i=0; i < dimensions; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for(let j =0;j<dimensions;j++){
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
            gridBox.addEventListener('mouseenter', ()=>
            {gridBox.style.backgroundColor = 'black'})
        }
        container.appendChild(row)
    }
    
}
resetButton.addEventListener('click', () => {
    let userSize = userSize = Number(prompt('what dimensions do you want for the grid'))
    while (userSize > 100){
        userSize = Number(prompt('pick number under 100'))
       
    }
    createGrid(userSize)
}
)
