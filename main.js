let gridSize=10
const container = document.querySelector('.container');

const createGrid = (dimensions) => {
for ( let i=0; i < dimensions; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for(let j =0;j<dimensions;j++){
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
            gridBox.addEventListener('mouseenter', ()=>
            {gridBox.style.backgroundColor = 'white'})
        }
        container.appendChild(row)
    }
    
}
createGrid(gridSize)