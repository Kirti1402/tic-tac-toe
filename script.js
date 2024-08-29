const cells = document.getElementsByClassName("cell")
console.log(cells)


const handleClick = () =>{
    console.log(events)
}

cells.forEach(cell => cell.addEventListener('click', handleClick));