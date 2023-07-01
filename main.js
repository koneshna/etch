let gridSize=4
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createGrid = (dimensions) => {
    for ( let i=0; i < dimensions; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for(let j =0;j<dimensions;j++){
            const widthAndHeight = 960 / gridSize
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            gridBox.addEventListener('mouseenter', ()=>{
                gridBox.style.backgroundColor = 'white'
            })
            row.appendChild(gridBox)
        }

        container.appendChild(row)
        
    }
    
}
createGrid(gridSize)
//resetButton.addEventListener('click', () => {
//let userSize = userSize = Number(prompt('what dimensions do you want for the grid'))
//while (userSize > 100){
//        userSize = Number(prompt('pick number under 100'))
//       
//    }
//    createGrid(userSize)
//}
//)
