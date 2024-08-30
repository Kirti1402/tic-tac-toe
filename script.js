const divCell = document.getElementsByClassName("cell") // returns the HTML COLLECTION
const cells = Array.from(divCell)
let board = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
];


let input = ''
const handleClick = (event) =>{
    console.log(event.target)

    if(input=='' || input=="O") {
        event.target.innerText = 'X'
        input ="X"
    } else if(input == 'X'){
        event.target.innerText = 'O'
        input ="O"
    }
}
    
    



cells.forEach(cell => cell.addEventListener('click', handleClick));