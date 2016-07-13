function Cell() {
    this.el = document.createElement("td");
    this.alive = (function () {
        if (Math.round(Math.random())) {
            this.el.className = "alive";
            return true
        } else {
            this.el.className = "dead";
            return false
        }
    }.call(this));

}

//function that counts the number of "alive" neighbors a cell has
function numAliveNeighbors(td) {
    var counter = 0,
        rowNumber = Number(td.parentNode.dataset.row),
        cellNumber = Number(td.dataset.cell);

//top-left neighbor
    var topLeft = document.body.querySelector("tr[data-row ='" + [rowNumber - 1] + "'] td[data-cell='" + [cellNumber - 1] + "']");
    if (!topLeft){
        counter+0
    }
    else if (topLeft.className === "alive") {
        counter++;
    }

//top neighbor
    var top = document.body.querySelector("tr[data-row ='" + [rowNumber - 1] + "'] td[data-cell='" + cellNumber + "']");
    if (!top){
        counter+0
    }
   else if (top.className === "alive") {
        counter++;
    }

// top-right neighbor
    var topRight = document.body.querySelector("tr[data-row ='" + [rowNumber - 1] + "'] td[data-cell='" + [cellNumber + 1] + "']");
    if (!topRight){
        counter+0
    }
   else if (topRight.className === "alive") {
        counter++;
    }

// left neighbor
    var left = document.body.querySelector("tr[data-row ='" + rowNumber + "'] td[data-cell='" + [cellNumber - 1] + "']");
    if (!left){
        counter+0
    }
   else if (left.className === "alive") {
        counter++;
    }

// right neighbor
    var right = document.body.querySelector("tr[data-row ='" + rowNumber + "'] td[data-cell='" + [cellNumber + 1] + "']");
    if (!right){
        counter+0
    }
   else if (right.className === "alive") {
        counter++;
    }

// bottom-left neighbor
    var bottomLeft = document.body.querySelector("tr[data-row ='" + [rowNumber + 1] + "'] td[data-cell='" + [cellNumber - 1] + "']");
    if (!bottomLeft){
        counter+0
    }
   else if (bottomLeft.className === "alive") {
        counter++;
    }

// bottom neighbor
    var bottom = document.body.querySelector("tr[data-row ='" + [rowNumber + 1] + "'] td[data-cell='" + cellNumber + "']");
    if (!bottom){
        counter+0
    }
   else if (bottom.className === "alive") {
        counter++;
    }

//bottom-right neighbor
    var bottomRight = document.body.querySelector("tr[data-row ='" + [rowNumber + 1] + "'] td[data-cell='" + [cellNumber + 1] + "']");
    if (!bottomRight){
        counter+0
    }
   else if (bottomRight.className === "alive") {
        counter++;
    }
    return counter;
}


//function that counts the number of "dead" neighbors a cell has
function numDeadNeighbors(td) {
    var counter = 0,
        rowNumber = Number(td.parentNode.dataset.row),
        cellNumber = Number(td.dataset.cell);

//top-left neighbor
    var topLeft = document.body.querySelector("tr[data-row ='" + [rowNumber - 1] + "'] td[data-cell='" + [cellNumber - 1] + "']");
    if (!topLeft){
        counter+0
    }
    else if (topLeft.className === "dead") {
        counter++;
    }

//top neighbor
    var top = document.body.querySelector("tr[data-row ='" + [rowNumber - 1] + "'] td[data-cell='" + cellNumber + "']");
    if (!top){
        counter+0
    }
    else if (top.className === "dead") {
        counter++;
    }

// top-right neighbor
    var topRight = document.body.querySelector("tr[data-row ='" + [rowNumber - 1] + "'] td[data-cell='" + [cellNumber + 1] + "']");
    if (!topRight){
        counter+0
    }
    else if (topRight.className === "dead") {
        counter++;
    }

// left neighbor
    var left = document.body.querySelector("tr[data-row ='" + rowNumber + "'] td[data-cell='" + [cellNumber - 1] + "']");
    if (!left){
        counter+0
    }
    else if (left.className === "dead") {
        counter++;
    }

// right neighbor
    var right = document.body.querySelector("tr[data-row ='" + rowNumber + "'] td[data-cell='" + [cellNumber + 1] + "']");
    if (!right){
        counter+0
    }
    else if (right.className === "dead") {
        counter++;
    }

// bottom-left neighbor
    var bottomLeft = document.body.querySelector("tr[data-row ='" + [rowNumber + 1] + "'] td[data-cell='" + [cellNumber - 1] + "']");
    if (!bottomLeft){
        counter+0
    }
    else if (bottomLeft.className === "dead") {
        counter++;
    }

// bottom neighbor
    var bottom = document.body.querySelector("tr[data-row ='" + [rowNumber + 1] + "'] td[data-cell='" + cellNumber + "']");
    if (!bottom){
        counter+0
    }
    else if (bottom.className === "dead") {
        counter++;
    }

//bottom-right neighbor
    var bottomRight = document.body.querySelector("tr[data-row ='" + [rowNumber + 1] + "'] td[data-cell='" + [cellNumber + 1] + "']");
    if (!bottomRight){
        counter+0
    }
    else if (bottomRight.className === "dead") {
        counter++;
    }
    return counter;
}



function TableRow() {
    this.el = document.createElement("tr");
}

function GameBoard() {
    this.el = document.createElement("table");
    this.el.className = "game-board";
}


GameBoard.prototype.render = function () {
    document.body.appendChild(this.el);
}

GameBoard.prototype.createGameBoard = function (gridSize) {
    //if gridSize is not passed it will be given a random number between 5 and 24
    var gridSize = gridSize || Math.floor(20 * Math.random()) + 5,
        i = 0;

    for (i; i < gridSize; i++) {
        var row = new TableRow();
        for (var j = 0; j < gridSize; j++) {
            var cell = new Cell();
            cell.el.dataset.cell = j;
            row.el.appendChild(cell.el);
        }
        row.el.dataset.row = i;
        this.el.appendChild(row.el);
    }
}

var testTable = new GameBoard();
testTable.createGameBoard();
testTable.render();


