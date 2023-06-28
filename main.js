let gridSize=16
const container = document.querySelector('.container');

const createGrid = (dimension) => {
    for ( let i=0; i<dimension; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for(let j =0;j<dimension;j++){
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
    
}
createGrid(gridSize)