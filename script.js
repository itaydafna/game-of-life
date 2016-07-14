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


function TableRow() {
    this.el = document.createElement("tr");
}

function GameBoard() {
    this.el = document.createElement("table");
    this.el.className = "game-board";
    this.deg = 0;
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


GameBoard.prototype.tickTable = function() {
    var table = this.el;
    tds = table.getElementsByTagName("td");
    for (var el in tds){
        tick(tds[el]);
    }
    setTimeout(GameBoard.prototype.tickTable.bind(this),1500);
}


GameBoard.prototype.turnGameBoard = function () {
    this.deg+=3;
    this.el.style.transform = "rotate("+this.deg+"deg)";
    setTimeout(GameBoard.prototype.turnGameBoard.bind(this),200);
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




//function which sets the rules for a single cell tick

function tick (el){
    if (el.className === "alive"){
        if (numAliveNeighbors(el) < 2 ||numAliveNeighbors(el)>3) {
            el.className = "dead";
        }
    } else if
    (el.className==="dead"){
        if (numAliveNeighbors(el)===3){
            el.className = "alive";
        }

    }
}






var testTable = new GameBoard();
testTable.createGameBoard();
testTable.render();


setTimeout(GameBoard.prototype.turnGameBoard.bind(testTable),200);

setTimeout(GameBoard.prototype.tickTable.bind(testTable),1500);



