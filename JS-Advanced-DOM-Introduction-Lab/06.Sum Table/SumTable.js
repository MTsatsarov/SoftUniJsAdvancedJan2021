function sumTable() {
    var elements = [...document.querySelectorAll('table tr')].slice(1, -1);


    document.getElementById('sum').textContent = elements.reduce((sum, row) => {
        return sum + Number(row.lastElementChild.textContent);
    }, 0)
}