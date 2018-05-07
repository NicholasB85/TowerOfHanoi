var fromDiv = "";


function move(tower) {
    tower.addEventListener("click", () => {
        let fromDivChildElements, towerChildElements = (tower.childElementCount > 0) ? tower.lastElementChild.offsetWidth : 1000;
        if (fromDiv != ""){
        fromDivChildElements =document.getElementById(fromDiv).lastElementChild.offsetWidth;
        }
        else {fromDivChildElements = 0;}// console.log(tower)
        // get from original div if it is not selected already
        if (fromDiv == "") {
            if (tower.childElementCount > 0) {
                fromDiv = tower.id;
            }
        } else { // if it is already selected append to another node
            //if an existing block is smaller dont append
            if (document.getElementById(fromDiv).childElementCount == 0) {


                let block = document.getElementById(fromDiv).lastElementChild;
                tower.appendChild(block);
            } else if (towerChildElements < fromDivChildElements) {
                console.log("tower " + towerChildElements + "from " + fromDivChildElements)
                alert("move not allowed")
                
            } else {
                let block = document.getElementById(fromDiv).lastElementChild;
                tower.appendChild(block);
            }
            fromDiv = "";

        }
    })
}

const towers = document.querySelectorAll("div.base").forEach(move)