let gridSize=4
const container = document.querySelector('.container');

const createGrid = (amtOfGrid) => {
for ( let i=0; i < amtOfGrid; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for(let j =0;j<amtOfGrid;j++){
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
    
}
createGrid(gridSize)