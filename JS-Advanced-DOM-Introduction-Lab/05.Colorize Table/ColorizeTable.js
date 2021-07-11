function colorize() {
    const myTable = [...document.querySelectorAll('table tr:nth-child(even)')];

    myTable.forEach(el => el.style.backgroundColor = 'teal');
}